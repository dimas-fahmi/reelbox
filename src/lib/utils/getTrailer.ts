import { VideoResult } from "../types/tmdb";

export function getTrailer(videos: VideoResult[]) {
  if (!videos || videos.length === 0) return undefined;

  // Score each video
  const scored = videos.map((video) => {
    let score = 0;

    // TMDB type field is reliable
    if (video.type?.toLowerCase() === "trailer") score += 3;
    if (video.type?.toLowerCase() === "teaser") score += 2;

    // Official flag is best
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    if ((video as any).official) score += 5;

    // Name hints
    const name = video.name.toLowerCase();
    if (name.includes("official trailer")) score += 4;
    else if (name.includes("trailer")) score += 3;
    else if (name.includes("teaser")) score += 2;

    return { video, score };
  });

  // Sort by score descending
  scored.sort((a, b) => b.score - a.score);

  // Pick the highest score or fallback to first video
  return scored[0]?.video ?? videos[0];
}
