import { NextRequest } from "next/server";
import { createResponse } from "@/src/lib/utils/createResponse";
import { TMDB_FETCH_OPTIONS } from "@/src/lib/configs";

const PATH = "API_RECOMMENDATIONS_MEDIATYPE_ID_GET";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ mediaType?: string; id?: string }> }
) {
  // Extract query parameters
  const url = req.nextUrl;
  const { language, page } = Object.fromEntries(url.searchParams.entries());

  // Extract parameters
  const { id, mediaType } = await context.params;

  // Validate
  if (!id) {
    return createResponse(
      400,
      "bad_request",
      "Missing important parameters: id",
      undefined
    );
  }

  if (mediaType !== "movie" && mediaType !== "tv") {
    return createResponse(400, "bad_request", "Invalid media type", undefined);
  }

  // Extract ENV variables
  const host = process.env.TMDB_HOST;
  const key = process.env.SECRET_TMDB_API_READ_ACCESS_TOKEN;

  if (!host || !key) {
    return createResponse(
      500,
      "server crash",
      "Invalid & Missing environtment variables",
      undefined
    );
  }

  // Construct query
  const query = `${host}/${mediaType}/${id}/recommendations?language=${
    language ?? "en-US"
  }&page=${page ?? 1}`;

  try {
    const response = await fetch(query, TMDB_FETCH_OPTIONS);
    const result = await response.json();

    if (!response.ok) {
      throw result;
    }

    return createResponse(200, "success", "Fetched from TMDB", result);
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
