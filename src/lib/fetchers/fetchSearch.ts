import { SearchResult } from "../types/tmdb";
import { StandardizeResponse } from "../utils/createResponse";

export type SearchMethod = "movie" | "tv" | "multi";

export async function fetchSearch<T>(
  method: SearchMethod,
  query: string
): Promise<StandardizeResponse<SearchResult<T>>> {
  try {
    const response = await fetch(`api/search/${method}?query=${query}`);

    const result = await response.json();

    if (!response.ok) {
      throw result;
    }

    return result;
  } catch (error) {
    throw error;
  }
}
