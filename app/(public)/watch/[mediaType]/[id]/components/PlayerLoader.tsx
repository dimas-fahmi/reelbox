import { Skeleton } from "@/src/shadcn/components/ui/skeleton";
import React from "react";

export interface PlayerLoaderProps {
  backdropImage: string;
  title: string;
  overview: string;
  logo: string;
}

const PlayerLoaderSkeleton = () => {
  return <Skeleton className="w-full h-full"></Skeleton>;
};

export { PlayerLoaderSkeleton };
