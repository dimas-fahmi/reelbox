"use client";

import { TMDB_IMAGE_HOST, VIDORA_HOST } from "@/src/lib/configs";
import { useUpdateEmbed } from "@/src/lib/hooks/useUpdateEmbed";
import { useWatchStore } from "@/src/lib/stores/watch";
import { Episode } from "@/src/lib/types/tmdb";
import { Button } from "@/src/shadcn/components/ui/button";
import { Play } from "lucide-react";
import Image from "next/image";
import React from "react";

const CollectionsEpisodeCard = ({ episode }: { episode: Episode }) => {
  // Player State
  const { embed } = useWatchStore();

  // Construct EMBED url
  const embedURL = `${VIDORA_HOST}/tv/${episode?.show_id}/${episode?.season_number}/${episode.episode_number}`;

  // Const is playing
  const isPlaying = embed && embed.embedSource === embedURL;

  // Construct Thumnail
  const thumbnail = `${TMDB_IMAGE_HOST}/w300${episode?.still_path}`;

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

          mutate({ embedSource: embedURL, embedTitle: episode.name });
        }}
      >
        <Image
          width={300}
          height={169}
          src={thumbnail}
          alt={`${episode.name}`}
          className={`${
            isPlaying ? "brightness-50" : ""
          } w-full object-cover drag-none rounded-md group-hover/card:blur-sm standard-transition group-hover/card:brightness-50 group-hover/card:scale-[1.05]`}
          loading={episode.episode_number < 5 ? "eager" : "lazy"}
        />

        {/* Is Playing Label */}
        <div
          className={`${
            isPlaying ? "opacity-100" : "opacity-0"
          } absolute top-2 right-2 text-xs font-header p-1 px-4 text-black rounded-xl bg-yellow-400 standard-transition`}
        >
          Is Playing
        </div>

        <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 standard-transition flex flex-col items-center justify-center">
          <Button
            variant={"outline"}
            className="rounded-full w-11 h-11  group-active/card:scale-90 standard-transition"
          >
            <Play />
          </Button>
          <span className="block mt-2 text-sm font-header">
            S{episode.season_number}:E{episode.episode_number}
          </span>
        </div>
      </div>

      <h1 className="mt-4 font-header font-extralight">{episode?.name}</h1>
    </div>
  );
};

export { CollectionsEpisodeCard };
