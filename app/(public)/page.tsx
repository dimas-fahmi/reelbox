import type { Metadata } from "next";
import HeroSection from "./components/Sections/Hero";

export const metadata: Metadata = {
  title: "The Best Escapism You Can Get | ReelBox",
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
    </>
  );
}
