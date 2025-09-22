import { TMDB_IMAGE_HOST } from "@/src/lib/configs";
import type { Image as ImageType } from "@/src/lib/types/tmdb";
import { Skeleton } from "@/src/shadcn/components/ui/skeleton";
import Image from "next/image";
import React from "react";

const CollectionsBackdropCardSkeleton = () => {
  return (
    <Skeleton className="min-w-[300px] min-h-[169px] max-w-[300px] max-h-[169px] rounded-md overflow-hidden relative drag-none select-none" />
  );
};

const CollectionsBackdropCard = ({
  image,
  title,
}: {
  image: ImageType;
  title: string;
}) => {
  // Construct path
  const path = `${TMDB_IMAGE_HOST}/w300${image.file_path}`;

  return (
    <div className="min-w-[300px] min-h-[169px] max-w-[300px] max-h-[169px] rounded-md overflow-hidden relative drag-none select-none">
      <Image
        width={300}
        height={169}
        src={path}
        alt={`Backdrop of ${title}`}
        className="drag-none"
      />
    </div>
  );
};

export { CollectionsBackdropCard, CollectionsBackdropCardSkeleton };
