"use client";

import { YOUTUBE_EMBED_HOST, YOUTUBE_IMAGE_HOST } from "@/src/lib/configs";
import { useUpdateEmbed } from "@/src/lib/hooks/useUpdateEmbed";
import { useWatchStore } from "@/src/lib/stores/watch";
import { VideoResult } from "@/src/lib/types/tmdb";
import { Button } from "@/src/shadcn/components/ui/button";
import { Skeleton } from "@/src/shadcn/components/ui/skeleton";
import { Play } from "lucide-react";
import Image from "next/image";
import React from "react";

const CollectionsVideoCardSkeleton = () => {
  return (
    <div className="min-w-[300px] standard-transition drag-none select-none">
      {/* Thumbnail */}
      <Skeleton className="group/card w-[300px] h-[169px] relative overflow-hidden rounded-md" />

      <Skeleton className="mt-4 font-header h-6 w-[220px] font-extralight"></Skeleton>
    </div>
  );
};

const CollectionsVideoCard = ({ video }: { video: VideoResult }) => {
  // Player State
  const { embed } = useWatchStore();

  // Construct Youtube Embed URL
  const embedURL = `${YOUTUBE_EMBED_HOST}/${video?.key}`;

  // Const is playing
  const isPlaying = embed && embed.embedSource === embedURL;

  // Construct Thumnail
  const thumbnail = `${YOUTUBE_IMAGE_HOST}/${video?.key}/maxresdefault.jpg`;

  const mutate = useUpdateEmbed(true);

  return (
    <div className="min-w-[300px] standard-transition drag-none select-none">
      {/* Thumbnail */}
      <div
        className={`${
          isPlaying ? "pointer-events-none" : ""
        } group/card relative overflow-hidden rounded-md`}
        onClick={() => {
          if (isPlaying) return;

          mutate({ embedSource: embedURL, embedTitle: video.name });
        }}
      >
        <Image
          width={300}
          height={169}
          src={thumbnail}
          alt={`${video.name}`}
          className={`${
            isPlaying ? "brightness-50" : ""
          } w-full object-cover drag-none rounded-md group-hover/card:blur-sm standard-transition group-hover/card:brightness-50 group-hover/card:scale-[1.05]`}
        />

        {/* Is Playing Label */}
        <div
          className={`${
            isPlaying ? "opacity-100" : "opacity-0"
          } absolute top-2 right-2 text-xs font-header p-1 px-4 text-black rounded-xl bg-yellow-400 standard-transition`}
        >
          Is Playing
        </div>

        <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 standard-transition flex items-center justify-center">
          <Button
            variant={"outline"}
            className="rounded-full w-11 h-11  group-active/card:scale-90 standard-transition"
          >
            <Play />
          </Button>
        </div>
      </div>

      <h1 className="mt-4 font-header font-extralight">{video?.name}</h1>
    </div>
  );
};

export { CollectionsVideoCard, CollectionsVideoCardSkeleton };
