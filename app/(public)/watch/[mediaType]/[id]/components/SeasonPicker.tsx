import { useWatchStore } from "@/src/lib/stores/watch";
import { Season } from "@/src/lib/types/tmdb";
import { Button } from "@/src/shadcn/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/src/shadcn/components/ui/dropdown-menu";
import React from "react";

const SeasonPicker = ({ seasons }: { seasons: Season[] }) => {
  // State
  const { activeSeason, setActiveSeason } = useWatchStore();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Season {activeSeason?.season_number}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>Seasons</DropdownMenuLabel>
        <DropdownMenuGroup>
          {seasons &&
            Array.isArray(seasons) &&
            seasons.map((item) => (
              <DropdownMenuItem
                className={`${
                  item.name === "Specials" && item.season_number === 0
                    ? "hidden"
                    : ""
                }`}
                key={item.season_number}
                onClick={() => {
                  setActiveSeason(item);
                }}
              >
                {item.name}
                <DropdownMenuShortcut>
                  {item.season_number}
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { SeasonPicker };
