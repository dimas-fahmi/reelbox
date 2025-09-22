import { TMDB_IMAGE_HOST } from "@/src/lib/configs";
import { CastMember, CrewMember } from "@/src/lib/types/tmdb";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/src/shadcn/components/ui/avatar";
import { Skeleton } from "@/src/shadcn/components/ui/skeleton";
import React from "react";

const CollectionsCreditCardSkeleton = () => {
  return (
    <div className="select-none drag-none">
      {/* Profile */}
      <div>
        <Skeleton className="w-[154px] h-[154px] rounded-full" />
      </div>

      {/* Information */}
      <h1 className="text-center mt-4 flex items-center justify-center gap-2 flex-col select-none">
        <Skeleton className="w-14 h-4" />
        <Skeleton className="w-24 h-4" />
      </h1>
    </div>
  );
};

const CollectionsCreditCard = ({
  crewMember,
}: {
  crewMember: CrewMember | CastMember;
}) => {
  // Construct path
  const path = `${TMDB_IMAGE_HOST}/w154${crewMember?.profile_path}`;

  // Construct Name
  const names = crewMember?.name?.split(" ");
  const firstName = names[0];
  const lastName = names[names.length - 1];

  return (
    <div className="select-none drag-none">
      {/* Profile */}
      <div>
        <Avatar className="w-[154px] h-[154px]">
          <AvatarImage
            src={path}
            alt={`${crewMember?.original_name}'s Profile Path`}
            className="object-cover drag-none"
          />
          <AvatarFallback>
            {firstName[0]}
            {lastName[0]}
          </AvatarFallback>
        </Avatar>
      </div>

      {/* Information */}
      <h1 className="text-center mt-4 flex flex-col select-none">
        <span className="font-header font-extralight">{firstName}</span>
        <span className="font-header font-bold">{lastName}</span>
      </h1>
    </div>
  );
};

export { CollectionsCreditCard, CollectionsCreditCardSkeleton };
