import { StandardizeResponse } from "../utils/createResponse";

export type FetchDetails =
  | {
      mediaType: "movie";
      id: string;
      season_number?: null;
      append_to_response?: string;
    }
  | {
      mediaType: "tv";
      id: string;
      season_number?: string;
      append_to_response?: string;
    };

export async function fetchDetails<T>({
  id,
  mediaType,
  season_number,
  append_to_response,
}: FetchDetails): Promise<StandardizeResponse<T>> {
  // Construct URL
  let url = `${process.env.NEXT_PUBLIC_SITE_URL}/api/details/${mediaType}/${id}?append_to_response=${append_to_response}`;

  if (season_number) {
    url += `&season_number=${season_number}`;
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
