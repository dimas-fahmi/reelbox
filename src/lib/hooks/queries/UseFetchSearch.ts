import { fetchSearch, SearchMethod } from "../../fetchers/fetchSearch";
import { useQuery } from "@tanstack/react-query";
import { MovieResult, TVShowResult } from "../../types/tmdb";

const UseFetchSearch = (method: SearchMethod, query?: string | null) => {
  const q = useQuery({
    queryKey: ["search", query],
    enabled: !!query,
    queryFn: () => fetchSearch<MovieResult[] & TVShowResult[]>(method, query!),
    refetchOnWindowFocus: false,
  });

  return q;
};

export default UseFetchSearch;
