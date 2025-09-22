import type { Metadata } from "next";
import HeroSection from "./components/Sections/Hero";
import TrendingSections from "./components/Sections/TrendingSections";

export const metadata: Metadata = {
  title: "The Best Escapism You Can Get | ReelBox",
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Trending Section */}
      <TrendingSections
        filter="movie"
        id="trendingMovie"
        title="Trending Movie"
      />
      <TrendingSections filter="tv" id="trendingTV" title="Trending Shows" />

      <span className="block h-[4800px]"></span>
    </>
  );
}
