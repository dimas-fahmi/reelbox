"use client";

import React from "react";
import { PlayerLoaderSkeleton } from "./PlayerLoader";
import { Credits, Images, Movie, TVShow, Videos } from "@/src/lib/types/tmdb";
import { useWatchStore } from "@/src/lib/stores/watch";
import {
  InformationBar,
  InformationBarSkeleton,
} from "@/src/ui/components/InformationBar";
import { Skeleton } from "@/src/shadcn/components/ui/skeleton";
import Section from "@/src/ui/components/Section";
import Collections from "@/src/ui/components/Collections";
import {
  CollectionsBackdropCard,
  CollectionsBackdropCardSkeleton,
} from "@/src/ui/components/Collections/CollectionsBackdropCard";
import {
  CollectionsPosterCard,
  CollectionsPosterCardSkeleton,
} from "@/src/ui/components/Collections/CollectionsPosterCard";
import {
  CollectionsCreditCard,
  CollectionsCreditCardSkeleton,
} from "@/src/ui/components/Collections/CollectionsCreditCard";
import {
  CollectionsVideoCard,
  CollectionsVideoCardSkeleton,
} from "@/src/ui/components/Collections/CollectionsVideoCard";
import { Film, Tv } from "lucide-react";
import { Button } from "@/src/shadcn/components/ui/button";
import { useUpdateEmbed } from "@/src/lib/hooks/useUpdateEmbed";

export interface MainContent {
  result:
    | (Movie &
        TVShow & {
          videos: Videos;
        } & {
          credits: Credits;
        } & {
          images: Images;
        })
    | undefined;
  backdropImage: string;
  logo: string;
  title: string;
  genres: string[];
  mediaType: "movie" | "tv";
}

const MainContent = ({ result, title, genres, mediaType }: MainContent) => {
  const { embed, mainEmbedURL } = useWatchStore();

  // Images
  const images = result?.images;
  const backdrops = images?.backdrops;
  const posters = images?.posters;

  // Credits
  const credits = result?.credits;
  const casts = credits?.cast;

  // Videos
  const videos = result?.videos?.results;

  // Icon
  const Icon = mediaType === "movie" ? Film : Tv;

  // Embed Mutation
  const mutate = useUpdateEmbed(true);

  return (
    <div className="flex-1 overflow-hidden">
      {/* Video Player */}
      <div className="relative rounded-lg overflow-hidden aspect-video">
        {!result && !embed ? (
          <PlayerLoaderSkeleton />
        ) : (
          <iframe
            id="player"
            src={embed?.embedSource}
            allowFullScreen
            className="w-full h-full"
          />
        )}
      </div>

      {/* Video Info */}
      <div className="mt-6">
        {/* Information Bar */}
        {!result ? (
          <InformationBarSkeleton />
        ) : (
          <InformationBar
            genres={genres}
            language={result?.original_language}
            vote_average={result?.vote_average}
          />
        )}

        {!result ? (
          <div className="space-y-2 mt-4">
            <Skeleton className="w-3/4 h-10" />
          </div>
        ) : (
          <h1 className="flex items-center gap-2 text-2xl mt-2 lg:text-4xl font-header font-bold">
            <Icon className="w-7 h-7" />
            {title}
          </h1>
        )}
      </div>

      {/* Description */}
      {!result ? (
        <div className="space-y-2 mt-4">
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-3/4 h-4" />
          <Skeleton className="w-1/2 h-4" />
          <Skeleton className="w-5/6 h-4" />
        </div>
      ) : (
        <p className={`font-body font-extralight mt-4 text-sm`}>
          {result?.overview}
        </p>
      )}

      {result && mediaType === "movie" && (
        <Button
          className="block mt-6 w-full"
          disabled={embed?.embedSource === mainEmbedURL}
          onClick={() => {
            mutate({ embedSource: mainEmbedURL, embedTitle: result.name });
          }}
        >
          {embed?.embedSource === mainEmbedURL ? "Playing Movie" : "Play Movie"}
        </Button>
      )}

      {/* Section Videos */}
      <Section id="extras" title="Extras" classes={{ headerTitle: "text-xl" }}>
        <Collections>
          {!videos
            ? Array(20)
                .fill(" ")
                .map((_item, index) => (
                  <CollectionsVideoCardSkeleton key={index} />
                ))
            : videos &&
              Array.isArray(videos) &&
              videos.map((item) => (
                <CollectionsVideoCard key={item?.id} video={item} />
              ))}
        </Collections>
      </Section>

      {/* Section Cast */}
      <Section id="casts" title="Casts" classes={{ headerTitle: "text-xl" }}>
        <Collections>
          {!result
            ? Array(20)
                .fill("")
                .map((_item, index) => (
                  <CollectionsCreditCardSkeleton key={index} />
                ))
            : casts &&
              Array.isArray(casts) &&
              casts.map((item) => (
                <CollectionsCreditCard key={item.credit_id} crewMember={item} />
              ))}
        </Collections>
      </Section>

      {/* Section Backdrops */}
      <Section
        id="backdrops"
        title="Backdrops"
        classes={{ headerTitle: "text-xl" }}
      >
        <Collections>
          {!result
            ? Array(20)
                .fill("")
                .map((_item, index) => (
                  <CollectionsBackdropCardSkeleton key={index} />
                ))
            : backdrops &&
              Array.isArray(backdrops) &&
              backdrops.map((item) => (
                <CollectionsBackdropCard
                  key={item.file_path}
                  image={item}
                  title={title}
                />
              ))}
        </Collections>
      </Section>

      {/* Section Posters */}
      <Section
        id="posters"
        title="Posters"
        classes={{ headerTitle: "text-xl" }}
      >
        <Collections>
          {!result
            ? Array(20)
                .fill(" ")
                .map((_item, index) => (
                  <CollectionsPosterCardSkeleton key={index} />
                ))
            : posters &&
              Array.isArray(posters) &&
              posters.map((item) => (
                <CollectionsPosterCard
                  key={item.file_path}
                  image={item}
                  title={title}
                />
              ))}
        </Collections>
      </Section>
    </div>
  );
};

export default MainContent;
