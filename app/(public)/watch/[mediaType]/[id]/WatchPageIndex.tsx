"use client";

import {
  TMDB_IMAGE_HOST,
  VIDORA_HOST,
  YOUTUBE_EMBED_HOST,
} from "@/src/lib/configs";
import { getGenre } from "@/src/lib/utils/getGenre";
import React, { Suspense, useEffect } from "react";
import { useWatchStore } from "@/src/lib/stores/watch";
import { useFetchDetails } from "@/src/lib/hooks/queries/useFetchDetails";
import { useFetchRecommendations } from "@/src/lib/hooks/queries/useFetchRecommendations";
import Sidebar from "./components/Sidebar";
import { getTrailer } from "@/src/lib/utils/getTrailer";
import dynamic from "next/dynamic";

const MainContent = dynamic(
  () => import("@/app/(public)/watch/[mediaType]/[id]/components/MainContent"),
  {
    ssr: false,
  }
);

const WatchPageIndex = ({
  params,
}: {
  params: { id: string; mediaType: "movie" | "tv" };
}) => {
  // Extract Parameters
  const { id, mediaType } = params;

  // Extract States From Stores
  const { setMainEmbedURL, activeEpisode, activeSeason, setEmbed, reset } =
    useWatchStore();

  // Reset states on mount
  useEffect(() => {
    reset();
  }, [reset]);

  // Fetch Detail
  const { data } = useFetchDetails({ mediaType, id });
  const result = data?.result;
  const videos = result?.videos.results;

  // Fetch Recommendations
  const {
    data: recommendationsResponse,
    isFetching: isFetchingRecommendations,
  } = useFetchRecommendations({
    mediaType,
    id,
  });
  const recommendations = recommendationsResponse?.result?.results;

  // Data
  const title = result?.title ?? result?.name;
  const genres = getGenre(
    result?.genres ? result.genres.map((item) => item.id) : [],
    mediaType,
    2
  );
  const backdropImage = `${TMDB_IMAGE_HOST}/w780/${result?.backdrop_path}`;

  // Image
  const logos = result?.images?.logos;
  const logoItemEnglish = logos
    ? logos.filter((item) => item.iso_639_1 === "en")
    : [];
  const logo = `${TMDB_IMAGE_HOST}/w300/${
    logoItemEnglish?.length > 0
      ? logoItemEnglish?.[0]?.file_path
      : logos?.[0]?.file_path
  }`;

  // construct video src
  useEffect(() => {
    let videoURL = `${VIDORA_HOST}/${mediaType}/${id}`;

    if (mediaType === "tv") {
      videoURL += `/${activeSeason}/${activeEpisode}`;
    }

    videoURL += "?color=ffa500&autoPlay=false";

    setMainEmbedURL(videoURL);

    // Init first player
    if (!videos) return;
    const trailer = getTrailer(videos);

    if (!trailer) return;

    // Construct
    const url = `${YOUTUBE_EMBED_HOST}/${trailer.key}`;

    setEmbed({ embedSource: url, embedTitle: trailer.name });
  }, [
    mediaType,
    id,
    activeSeason,
    videos,
    activeEpisode,
    setMainEmbedURL,
    setEmbed,
  ]);

  return (
    <div className="min-h-screen max-w-screen">
      <div className="flex flex-col w-full lg:grid lg:grid-cols-[auto_384px] max-w-7xl mx-auto gap-6">
        {/* Main Content */}
        <MainContent
          result={result}
          backdropImage={backdropImage}
          genres={genres}
          logo={logo}
          title={title ?? ""}
          mediaType={mediaType}
        />

        {/* Sidebar */}
        <Sidebar
          isFetchingRecommendations={isFetchingRecommendations}
          recommendations={recommendations}
        />
      </div>
    </div>
  );
};

export default WatchPageIndex;
