import { TrendingListResponse } from "../types/tmdb";
import { StandardizeResponse } from "../utils/createResponse";

export interface FetchTrending {
  filter: "movie" | "tv" | "person";
  time: "day" | "week";
  params?: string;
}

export async function fetchTrending<T>({
  filter,
  time,
  params,
}: FetchTrending): Promise<StandardizeResponse<TrendingListResponse<T>>> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/trending/${filter}/${time}?${params}`
  );
  const result = await response.json();

  if (!response.ok) {
    throw result;
  }

  return result;
}
