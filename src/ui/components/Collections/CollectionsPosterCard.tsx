import { TMDB_IMAGE_HOST } from "@/src/lib/configs";
import type { Image as ImageType } from "@/src/lib/types/tmdb";
import { Skeleton } from "@/src/shadcn/components/ui/skeleton";
import Image from "next/image";
import React from "react";

const CollectionsPosterCardSkeleton = () => {
  return (
    <Skeleton className="min-w-[185px] min-h-[277px] max-w-[185px] max-h-[277px] rounded-md overflow-hidden relative drag-none select-none" />
  );
};

const CollectionsPosterCard = ({
  image,
  title,
}: {
  image: ImageType;
  title: string;
}) => {
  // Construct path
  const path = `${TMDB_IMAGE_HOST}/w185${image.file_path}`;

  return (
    <div className="min-w-[185px] min-h-[277px] max-w-[185px] max-h-[277px] rounded-md overflow-hidden relative drag-none select-none">
      <Image
        width={185}
        height={277}
        src={path}
        alt={`Poster of ${title}`}
        className="drag-none w-full h-full object-cover"
      />
    </div>
  );
};

export { CollectionsPosterCard, CollectionsPosterCardSkeleton };
