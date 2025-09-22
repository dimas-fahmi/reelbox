import { useQuery } from "@tanstack/react-query";
import { fetchDetails } from "../../fetchers/fetchDetails";
import { Credits, Images, Movie, TVShow, Videos } from "../../types/tmdb";

export interface UseFetchDetails {
  mediaType: "movie" | "tv";
  id: string;
}

export const useFetchDetails = ({ mediaType, id }: UseFetchDetails) => {
  const query = useQuery({
    queryKey: ["details", mediaType, id],
    queryFn: () =>
      fetchDetails<
        Movie &
          TVShow & { videos: Videos } & { credits: Credits } & {
            images: Images;
          }
      >({
        id,
        mediaType,
        append_to_response: "videos,credits,images",
      }),
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60 * 12,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return query;
};
