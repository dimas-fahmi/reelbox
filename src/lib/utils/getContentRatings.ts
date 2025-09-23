export interface Rating {
  rating: "MATURE" | "GENERAL";
  description: string;
  examples: string[];
}

const ratings = {
  MATURE:
    "This content may include offensive language, explicit sexual material, and graphic violence.",
  GENERAL:
    "It is safer to view than mature content; please refer to the detailed sections.",
};

const matureRatins = ["TV-MA", "18", "18+", "MA", "D"];
const generalRatings = ["G", "ALL", "PG-13", "PG"];

export const getContentRatings = (items?: string[]) => {
  if (!items || !Array.isArray(items) || items.length < 1) return undefined;

  // Scores
  const maturityScores: string[] = [];
  const generalScores: string[] = [];

  items.map((item) => {
    if (matureRatins.includes(item)) {
      maturityScores.push(item);
    }

    if (generalRatings.includes(item)) {
      generalScores.push(item);
    }
  });

  // Construct Rating
  const finalRating =
    maturityScores.length > generalScores.length ? "MATURE" : "GENERAL";
  const rating: Rating = {
    rating: finalRating,
    description: ratings[finalRating],
    examples:
      finalRating === "MATURE"
        ? [...new Set(maturityScores)]
        : [...new Set(generalScores)],
  };

  return rating;
};
