import { TMDB_IMAGE_HOST } from "@/src/lib/configs";
import { fetchDetails } from "@/src/lib/fetchers/fetchDetails";
import { Movie, TVShow } from "@/src/lib/types/tmdb";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import React, { Suspense } from "react";
import { generateMetadata as gm } from "@/src/lib/utils/generateMetadata";
import WatchPageIndex from "./WatchPageIndex";

type Props = {
  params: Promise<{ id?: string; mediaType?: "movie" | "tv" }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id, mediaType } = await params;

  if (!id || !mediaType) {
    redirect("/");
  }

  // Fetch detail
  const response = await fetchDetails<Movie & TVShow>({ id, mediaType });
  const data = response?.result;

  if (!data) {
    redirect("/");
  }

  const title = data?.title ?? data?.name ?? "Unknown";
  const description = data?.overview ?? "No description available.";
  const backdropImage = data?.backdrop_path
    ? `${TMDB_IMAGE_HOST}/w1280${data.backdrop_path}`
    : undefined;

  return gm({
    title,
    description,
    keywords: [title, "watch"],
    openGraph: {
      title,
      description,
      images: backdropImage,
      locale: data?.original_language,
    },
    twitter: {
      title,
      description,
      images: backdropImage,
    },
  });
}

const WatchPage = async ({ params }: Props) => {
  const { id, mediaType } = await params;

  if (mediaType !== "movie" && mediaType !== "tv") {
    redirect("/");
  }

  if (!id) {
    redirect("/");
  }

  return (
    <Suspense>
      <WatchPageIndex params={{ id, mediaType }} />
    </Suspense>
  );
};

export default WatchPage;
