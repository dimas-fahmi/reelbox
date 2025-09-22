import { TMDB_IMAGE_HOST } from "@/src/lib/configs";
import { Movie, TVShow } from "@/src/lib/types/tmdb";
import { truncateString } from "@/src/lib/utils/truncateString";
import { Button } from "@/src/shadcn/components/ui/button";
import { Skeleton } from "@/src/shadcn/components/ui/skeleton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const RecommendationsCardSkeleton = () => {
  return (
    <Skeleton className="w-full aspect-video relative group/card overflow-hidden rounded-md cursor-pointer"></Skeleton>
  );
};

const RecommendationsCard = ({ data }: { data: Movie & TVShow }) => {
  // Construct Backdrop URL
  const backdropImage = `${TMDB_IMAGE_HOST}/w780${data.backdrop_path}`;

  // Construct data
  const title = data?.name ?? data?.title;

  // Router
  const router = useRouter();

  return (
    <div
      onClick={() => {
        router.push(
          `/watch/${data?.first_air_date ? "tv" : "movie"}/${data.id}`
        );
      }}
      className="relative group/card overflow-hidden rounded-md cursor-pointer"
    >
      {/* Backdrop */}
      <div>
        <Image
          width={780}
          height={780}
          src={backdropImage}
          alt={`Backdrop of ${title}`}
          className="w-full group-hover/card:blur-md standard-transition brightness-50"
          unoptimized
        />
      </div>

      {/* Information */}
      <div className="absolute group-hover/card:opacity-0 standard-transition inset-0 p-4 flex items-end">
        {/* Wrapper */}
        <div>
          <h1 className="font-semibold font-header">{title}</h1>
          <p className="text-xs font-body">
            {truncateString(data?.overview, 14, true)}
          </p>
        </div>
      </div>

      <div className="opacity-0 group-hover/card:opacity-100 standard-transition absolute inset-0 flex items-center justify-center">
        <Button variant={"outline"}>PLAY</Button>
      </div>
    </div>
  );
};

export { RecommendationsCard, RecommendationsCardSkeleton };
