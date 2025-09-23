"use client";

import React from "react";
import HeroSection from "./components/sections/HeroSection";
import { useSearchStore } from "@/src/lib/stores/search";
import { CollectionsCard } from "@/src/ui/components/Collections/CollectionsCard";

const DiscoverPageIndex = () => {
  const { data } = useSearchStore();
  const result = data?.results;

  return (
    <div>
      {/* Hero */}
      <HeroSection />

      {/* Result */}
      {!result && (
        <span className="font-light block mt-6 text-center">
          Search results will shown here
        </span>
      )}

      <div className="grid grid-cols-2 min-h-40 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-12">
        {result &&
          Array.isArray(result) &&
          result.map((item) => <CollectionsCard key={item.id} data={item} />)}
      </div>
    </div>
  );
};

export default DiscoverPageIndex;
