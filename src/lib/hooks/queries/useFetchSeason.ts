"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchDetails } from "../../fetchers/fetchDetails";
import { Season } from "../../types/tmdb";

export interface UseFetchSeason {
  id?: string;
  seasonNumber?: number | null;
}

export const useFetchSeason = ({ id, seasonNumber }: UseFetchSeason) => {
  const query = useQuery({
    queryKey: ["season", id, seasonNumber],
    enabled: !!id && !!seasonNumber,
    queryFn: () =>
      fetchDetails<Season>({
        id: id!,
        mediaType: "tv",
        season_number: seasonNumber?.toString(),
      }),
    staleTime: 86400,
    gcTime: 86400 * 2,
    refetchOnWindowFocus: false,
  });

  return query;
};
