"use client";

import { useMemo } from "react";
import { Embed, useWatchStore } from "../stores/watch";

export const useUpdateEmbed = (scroll = false) => {
  const { setEmbed } = useWatchStore();

  // Player
  const player = document?.getElementById("player");

  // Handler
  const handler = useMemo(
    () => (embed: Embed) => {
      setEmbed(embed);

      if (scroll && player) {
        const offset = 45;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = player.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    },
    [scroll, setEmbed, player]
  );

  return handler;
};
