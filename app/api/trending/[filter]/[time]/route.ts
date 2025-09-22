import { NextRequest } from "next/server";
import { createResponse } from "@/src/lib/utils/createResponse";

const PATH = "API_TRENDING_FILTER_TIME_GET";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ filter: string; time: string }> }
) {
  // Get Query Params
  const url = request.nextUrl;
  let { language } = Object.fromEntries(url.searchParams.entries());

  // Get Filters
  const { filter, time } = await context.params;

  // Validate
  if (!language) {
    language = "en-US";
  }

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

  // Construct Query Options
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${key}`,
    },
    next: {
      revalidate: 86400, // Revalidate once everyday
    },
  };

  // Construct URL
  const reqURL = `${host}/trending/${filter}/${time}?language=${language}`;

  // Execution
  try {
    const response = await fetch(reqURL, options); // cache this

    const result = await response.json();

    return createResponse(200, "success", "Fetched data from TMDB", result);
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
