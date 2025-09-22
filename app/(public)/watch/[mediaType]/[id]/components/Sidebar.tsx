import React from "react";
import {
  RecommendationsCard,
  RecommendationsCardSkeleton,
} from "./RecommendationsCard";
import { Movie, TVShow } from "@/src/lib/types/tmdb";

const Sidebar = ({
  isFetchingRecommendations,
  recommendations,
}: {
  isFetchingRecommendations: boolean;
  recommendations: (Movie[] & TVShow[]) | undefined;
}) => {
  return (
    <div className="lg:w-96 space-y-4">
      <h3 className="font-header font-bold text-2xl">Recommendations</h3>

      {isFetchingRecommendations
        ? Array(20)
            .fill("")
            .map((_item, index) => <RecommendationsCardSkeleton key={index} />)
        : Array.isArray(recommendations) &&
          recommendations.map((item) => (
            <RecommendationsCard key={item.id} data={item as Movie & TVShow} />
          ))}
    </div>
  );
};

export default Sidebar;
