import { useQuery } from "@tanstack/react-query";
import { fetchDetails } from "../../fetchers/fetchDetails";
import {
  ContentRatings,
  Credits,
  Images,
  Movie,
  ReleaseDates,
  TVShow,
  Videos,
} from "../../types/tmdb";

export interface UseFetchDetails {
  mediaType: "movie" | "tv";
  id: string;
  appendToResult?: string;
}

export const useFetchDetails = <T>({
  mediaType,
  id,
  appendToResult,
}: UseFetchDetails) => {
  const query = useQuery({
    queryKey: ["details", mediaType, id],
    queryFn: () =>
      fetchDetails<
        Movie &
          TVShow & { videos: Videos } & { credits: Credits } & {
            images: Images;
          } & { release_dates: ReleaseDates } & {
            content_ratings: ContentRatings;
          } & T
      >({
        id,
        mediaType,
        append_to_response: `videos,credits,images${
          mediaType === "movie" ? ",release_dates" : ""
        }${mediaType === "tv" ? ",content_ratings" : ""}${
          appendToResult ? `,${appendToResult}` : ""
        }`,
      }),
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60 * 12,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return query;
};
