import { VideoResult } from "../types/tmdb";

export function getTrailer(videos: VideoResult[]) {
  const includeTrailer = videos.filter(
    (item) =>
      item.name.toLocaleLowerCase().includes("trailer") ||
      item.name.toLocaleLowerCase().includes("teaser")
  );

  console.log(includeTrailer, videos);

  return includeTrailer.length > 0 ? includeTrailer[0] : videos[0];
}
