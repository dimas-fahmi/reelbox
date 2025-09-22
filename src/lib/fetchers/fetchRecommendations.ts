import { StandardizeResponse } from "../utils/createResponse";

export interface FetchRecommendations {
  id: string;
  mediaType: "movie" | "tv";
  language?: string;
  page?: string;
}

export async function fetchRecommendations<T>({
  id,
  mediaType,
  language,
  page,
}: FetchRecommendations): Promise<StandardizeResponse<T>> {
  // Construct query
  let url = `${process.env.NEXT_PUBLIC_SITE_URL}/api/recommendations/${mediaType}/${id}?`;

  if (language) {
    url += `language=${language}&`;
  }

  if (page) {
    url += `page=${page}`;
  }

  try {
    const response = await fetch(url);
    const result = await response.json();
    if (!response.ok) {
      throw result;
    }

    return result;
  } catch (error) {
    throw error;
  }
}
