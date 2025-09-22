import genres from "@/src/lib/configs/genres.json";

/**
 * Returns an array of genre names based on the provided genre IDs and media type.
 *
 * @param genreIds - An array of genre IDs to look up.
 * @param mediaType - The media type, either "movie" or "tv".
 * @param limit - Optional. Maximum number of genre names to return.
 *
 * @returns An array of genre names corresponding to the provided IDs and media type.
 *
 * @example
 * ```ts
 * getGenre([28, 12, 16], "movie"); // ["Action", "Adventure", "Animation"]
 * getGenre([10759, 35], "tv", 1);  // ["Action & Adventure"]
 * ```
 */
export const getGenre = (
  genreIds: number[],
  mediaType: "movie" | "tv",
  limit?: number
): string[] => {
  // Select the appropriate genre list based on mediaType
  const genreList = mediaType === "movie" ? genres.movies : genres.shows;

  // Map genre IDs to names
  const names = genreIds
    .map((id) => genreList.find((genre) => genre.id === id))
    .filter((genre): genre is { id: number; name: string } => !!genre)
    .map((genre) => genre.name);

  // Apply limit if provided
  return limit ? names.slice(0, limit) : names;
};
