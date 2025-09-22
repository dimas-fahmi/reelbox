import { Skeleton } from "@/src/shadcn/components/ui/skeleton";
import React from "react";

const InformationBarSkeleton = () => {
  return (
    <div className="flex p-0 flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div className="flex gap-1" role="list" aria-label="Movie Information">
        {/* Language */}
        <Skeleton className="w-6 h-5 rounded-none" />

        {/* Rating */}
        <Skeleton className="w-14 h-5 rounded-none" />

        {/* Genre */}
        <Skeleton className="w-34 h-5 rounded-none" />
      </div>
    </div>
  );
};

const InformationBar = ({
  language,
  vote_average,
  genres,
}: {
  language?: string;
  vote_average?: number;
  genres?: string[];
}) => {
  return (
    <div className="flex p-0 flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div className="flex gap-1" role="list" aria-label="Movie Information">
        {/* Language */}
        <span
          className="p-1 text-xs uppercase font-body font-extralight border"
          role="listitem"
          aria-label="Language"
        >
          {language ?? "N/A"}
        </span>

        {/* Rating */}
        <span
          className="p-1 text-xs font-body font-extralight border"
          role="listitem"
          aria-label="IMDb Rating"
        >
          {Math.floor(vote_average ?? 0)}/10
        </span>

        {/* Genre */}
        {genres && genres.length > 0 && (
          <span
            className="p-1 text-xs font-body font-extralight border max-w-34 text-ellipsis truncate"
            role="listitem"
            aria-label="Genre"
          >
            {genres.join("/")}
          </span>
        )}
      </div>
    </div>
  );
};

export { InformationBar, InformationBarSkeleton };
