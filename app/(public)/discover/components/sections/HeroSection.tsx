"use client";

import UseFetchSearch from "@/src/lib/hooks/queries/UseFetchSearch";
import { useSearchStore } from "@/src/lib/stores/search";
import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const [search, setSearch] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [searchKey, setSearchKey] = useState<string | null>(null);

  // Debouncer
  useEffect(() => {
    if (search.length < 1) return;
    setIsTyping(true);
    const debouncer = setTimeout(() => {
      setSearchKey(search);
      setIsTyping(false);
    }, 700);

    return () => clearTimeout(debouncer);
  }, [search, setSearchKey, setIsTyping]);

  const { data, isFetching } = UseFetchSearch("multi", searchKey);

  const { setData } = useSearchStore();

  useEffect(() => {
    setData(data?.result);
  }, [data, setData]);

  return (
    <div
      className={`${
        isTyping || isFetching ? "glowing" : "border"
      } relative min-h-60 flex-col items-center rounded-2xl`}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background rounded-2xl" />

      {/* Wrapper */}
      <div className="absolute inset-0 flex items-center justify-center text-center min-h-60">
        <div>
          <h1 className="font-header font-bold text-2xl">
            {`Look for something you'd like to watch`}
          </h1>
          <span className="font-light">
            We offer a vast selection of movies and shows available for you to
            enjoy at no cost.
          </span>

          <div className="mt-6 min-w-72 md:min-w-xl">
            <input
              type="text"
              placeholder="Search something"
              className="mt-4 block px-4 py-2 rounded-2xl text-center outline-0 border-1 w-full"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              suppressHydrationWarning
            />
          </div>

          <small className="mt-4 block text-sm font-light">
            {isTyping && "Waiting for you to stop typing"}
            {!isTyping && isFetching && `Searching for ${searchKey}`}
            {data &&
              !isFetching &&
              !isTyping &&
              `Fetched and found ${data?.result?.total_results} records`}
          </small>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
