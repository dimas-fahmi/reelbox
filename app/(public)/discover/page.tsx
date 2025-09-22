import { generateMetadata } from "@/src/lib/utils/generateMetadata";
import { Metadata } from "next";
import React from "react";
import DiscoverPageIndex from "./DiscoverPageIndex";

export const metadata: Metadata = generateMetadata({
  title: "Discover | ReelBox",
});

const DiscoverPage = () => {
  return <DiscoverPageIndex />;
};

export default DiscoverPage;
