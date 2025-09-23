import { Rating } from "@/src/lib/utils/getContentRatings";
import { cn } from "@/src/shadcn/lib/utils";
import { CircleAlert } from "lucide-react";
import React from "react";

const AgeRating = ({
  ageRating,
  className,
}: {
  ageRating: Rating;
  className?: string;
}) => {
  const matureStyle = "bg-destructive/10 text-destructive";
  const generalStyle = "bg-secondary text-secondary-foreground";

  const examples = ageRating.examples.slice(0, 4);

  return (
    <div
      className={cn(
        `mt-6 p-4 ${
          ageRating.rating === "MATURE" ? matureStyle : generalStyle
        } rounded-md`,
        className
      )}
    >
      <h1 className="flex items-center gap-2 font-header text-2xl font-bold">
        <CircleAlert /> {ageRating.rating}
      </h1>

      <p className="mt-4 font-body text-sm font-light">
        {ageRating.description}
      </p>

      {examples?.length > 0 && (
        <div className="space-y-1 flex gap-4 mt-4 overflow-x-scroll scrollbar-none">
          {examples.map((item, index) => (
            <div
              key={index}
              className={`px-4 flex-1 h-10 py-2 text-xs flex items-center justify-center rounded-md border ${
                ageRating.rating === "MATURE" ? "border-destructive" : ""
              }`}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AgeRating;
