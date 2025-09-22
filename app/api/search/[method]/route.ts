import { NextRequest } from "next/server";
import { createResponse } from "@/src/lib/utils/createResponse";
import { TMDB_FETCH_OPTIONS } from "@/src/lib/configs";
import { MovieResult, SearchResult, TVShowResult } from "@/src/lib/types/tmdb";

const PATH = "API_SEARCH_METHOD_GET";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ method: string }> }
) {
  // Extract Params
  const { method } = await context.params;

  // Extract Query
  const url = req.nextUrl;
  const { query } = Object.fromEntries(url.searchParams.entries());

  // Extract ENV variables
  const host = process.env.TMDB_HOST;
  const key = process.env.SECRET_TMDB_API_READ_ACCESS_TOKEN;

  if (!host) {
    return createResponse(
      500,
      "system_crash",
      "Missing env variable",
      undefined,
      true,
      `${PATH}:MISSING ENV VARIABLE (TMDB_HOST)`
    );
  }

  if (!key) {
    return createResponse(
      500,
      "system_crash",
      "Missing env variable",
      undefined,
      true,
      `${PATH}:MISSING ENV VARIABLE (SECRET_TMDB_API_READ_ACCESS_TOKEN)`
    );
  }

  // Validate Method
  if (method !== "movie" && method !== "tv" && method !== "multi") {
    return createResponse(
      400,
      "bad_request",
      "Invalid method",
      undefined,
      true,
      `${PATH}:INVALID SEARCH METHOD`
    );
  }

  if (!query) {
    return createResponse(
      400,
      "bad_request",
      "Missing important parameters: query",
      undefined,
      true,
      `${PATH}:MISSING SEARCH QUERY`
    );
  }

  // Construct Query
  const queryURL = `${host}/search/${method}?query=${query}`;

  // Execution
  try {
    const response = await fetch(queryURL, { ...TMDB_FETCH_OPTIONS });
    const result = (await response.json()) as SearchResult<
      MovieResult[] & TVShowResult[]
    >;

    // @ts-expect-error who cares
    result.results = result.results.filter(
      (item) => item?.media_type === "movie" || item?.media_type === "tv"
    );

    return createResponse(200, "success", "connected to TMDB", result);
  } catch (error) {
    return createResponse(
      500,
      "fatal_error",
      (error as Error)?.message ?? "Unknown error",
      undefined,
      true,
      `${PATH}:${JSON.stringify(error)}`
    );
  }
}
