import { useQuery } from "@tanstack/react-query";
import { Movie, Recommendations, TVShow } from "../../types/tmdb";
import { fetchRecommendations } from "../../fetchers/fetchRecommendations";

export interface UseFetchRecommendations {
  mediaType: "tv" | "movie";
  id: string;
}

export const useFetchRecommendations = ({
  mediaType,
  id,
}: UseFetchRecommendations) => {
  const query = useQuery({
    queryKey: ["recommendations", mediaType, id],
    queryFn: () =>
      fetchRecommendations<Recommendations<Movie[] & TVShow[]>>({
        id,
        mediaType,
      }),
    refetchOnWindowFocus: false,
  });

  return query;
};
