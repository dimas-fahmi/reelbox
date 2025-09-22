"use client";

import { FetchTrending, fetchTrending } from "@/src/lib/fetchers/fetchTrending";
import { MovieResult, TVShowResult } from "@/src/lib/types/tmdb";
import Collections from "@/src/ui/components/Collections";
import {
  CollectionsCard,
  CollectionsCardSkeleton,
} from "@/src/ui/components/Collections/CollectionsCard";
import Section from "@/src/ui/components/Section";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const TrendingSections = ({
  filter,
  title,
  id,
}: {
  filter: FetchTrending["filter"];
  title: string;
  id: string;
}) => {
  // Query
  const { data, isFetching } = useQuery({
    queryKey: ["trending", filter],
    queryFn: () =>
      fetchTrending<TVShowResult | MovieResult>({
        filter: filter,
        time: "day",
      }),
    refetchOnWindowFocus: false,
  });

  const results = data?.result?.results;

  return (
    <Section id={id} title={title}>
      <Collections>
        {isFetching &&
          Array(20)
            .fill("")
            .map((_item, index) => <CollectionsCardSkeleton key={index} />)}
        {!isFetching &&
          Array.isArray(results) &&
          results.map((item) => <CollectionsCard key={item.id} data={item} />)}
      </Collections>
    </Section>
  );
};

export default TrendingSections;
