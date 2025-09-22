"use client";

import { TMDB_IMAGE_HOST } from "@/src/lib/configs";
import { MovieResult, TVShowResult } from "@/src/lib/types/tmdb";
import { getGenre } from "@/src/lib/utils/getGenre";
import { truncateString } from "@/src/lib/utils/truncateString";
import { Button } from "@/src/shadcn/components/ui/button";
import { Skeleton } from "@/src/shadcn/components/ui/skeleton";
import { Play } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const CollectionsCardSkeleton = () => {
  return (
    <Skeleton className="rounded-md min-w-[280px] max-w-[280px] min-h-[420px] max-h-[420px] overflow-hidden"></Skeleton>
  );
};

const CollectionsCard = ({ data }: { data: TVShowResult | MovieResult }) => {
  // Construct poster path
  const poster = `${TMDB_IMAGE_HOST}/w342/${data?.poster_path}`;

  // Title
  const title = (data as TVShowResult)?.name ?? (data as MovieResult)?.title;

  // Genre
  const genres = getGenre(data?.genre_ids, data?.media_type, 2);

  // Router
  const router = useRouter();

  return (
    <div
      className="relative group/card rounded-md min-w-[280px] max-w-[280px] min-h-[420px] max-h-[420px] overflow-hidden cursor-pointer"
      onClick={() => {
        router.push(`/watch/${data.media_type}/${data.id}`);
      }}
      role="link" // Adding role to indicate it's a link
      aria-label={`Watch ${title}`} // Descriptive label for accessibility
    >
      {/* Poster */}
      <figure>
        <Image
          width={280}
          height={280}
          src={poster}
          alt={`Poster of ${title}`} // More descriptive alt text for better accessibility
          className={`group-hover/card:brightness-50 group-hover/card:blur-md standard-transition w-full h-full drag-none`}
        />
      </figure>

      {/* Overlay Content */}
      <div
        className={`opacity-0 group-hover/card:opacity-100 absolute inset-0 standard-transition glass p-4 flex items-end`}
      >
        {/* Wrapper */}
        <div className="select-none">
          <h1 className="font-header text-xl mb-1 font-bold">{title}</h1>

          {/* Information Bar */}
          <div
            className="flex gap-1 mb-4"
            role="list"
            aria-label="Movie Information"
          >
            {/* Language */}
            <span
              className="p-1 text-xs uppercase font-body font-extralight border"
              role="listitem"
              aria-label="Language"
            >
              {data?.original_language}
            </span>

            {/* Rating */}
            <span
              className="p-1 text-xs font-body font-extralight border"
              role="listitem"
              aria-label="IMDb Rating"
            >
              {Math.floor(data?.vote_average)}
            </span>

            {/* Genre */}
            <span
              className="p-1 text-xs font-body font-extralight border max-w-34 text-ellipsis truncate"
              role="listitem"
              aria-label="Genre"
            >
              {genres.join("/")}
            </span>
          </div>
          <p className="font-body font-extralight text-sm">
            {truncateString(data?.overview, 14, true)}
          </p>

          <div className="mt-4 flex items-center gap-3">
            {/* Play Button */}
            <Button
              className="rounded-full w-10 h-10"
              aria-label={`Play ${title}`} // Updated label for accessibility
              onClick={(e) => {
                e.stopPropagation();
                router.push(`/watch/${data.media_type}/${data.id}`);
              }}
            >
              <Play />
            </Button>

            {/* Trailer Button */}
            <Button
              variant={"outline"}
              aria-label="Watch Trailer"
              onClick={(e) => {
                e.stopPropagation();
                alert("Not Yet Implemented");
              }}
            >
              Trailer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CollectionsCard, CollectionsCardSkeleton };
