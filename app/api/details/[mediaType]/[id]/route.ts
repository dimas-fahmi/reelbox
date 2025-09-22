import { NextRequest } from "next/server";

import { createResponse } from "@/src/lib/utils/createResponse";

const PATH = "API_DETAILS_MEDIATYPE_ID_GET";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ mediaType?: string; id?: string }> }
) {
  // Get Parameters
  const url = req.nextUrl;
  const { season_number, append_to_response } = Object.fromEntries(
    url.searchParams.entries()
  );
  const { id, mediaType } = await context.params;

  // Validate
  if (!id) {
    return createResponse(400, "bad_request", "Missing ID", undefined);
  }

  if (mediaType !== "movie" && mediaType !== "tv") {
    return createResponse(400, "bad_request", "Invalid mndia type", undefined);
  }

  // Extract ENV Variables
  const host = process.env.TMDB_HOST;
  const key = process.env.SECRET_TMDB_API_READ_ACCESS_TOKEN;

  // Validate ENV variables
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

  // Construct Query Options
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${key}`,
    },
    next: {
      revalidate: 86400 * 2, // Revalidate once every two days
    },
  };

  let aptr: string = "";
  if (append_to_response) {
    aptr = append_to_response;
  }

  // Construct URL
  let reqURL;
  if (mediaType === "movie") {
    reqURL = `${host}/${mediaType}/${id}?append_to_response=${aptr}`;
  } else {
    reqURL = `${host}/${mediaType}/${id}?append_to_response=${aptr}`;
    if (season_number) {
      reqURL = `${host}/${mediaType}/${id}/season/${season_number}&append_to_response=${aptr}`;
    }
  }

  // Execute
  try {
    const response = await fetch(reqURL, options);
    const result = await response.json();

    return createResponse(200, "success", "Fetched from TMDB", result);
  } catch (error) {
    return createResponse(
      500,
      "fatal_error",
      (error as Error)?.message ?? "Unknown error",
      undefined,
      true,
      `${PATH}:${error}`
    );
  }
}
