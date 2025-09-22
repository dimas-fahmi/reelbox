import { Button } from "@/src/shadcn/components/ui/button";
import { Play } from "lucide-react";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section id="hero" className="relative">
      {/* Backdrop */}
      <div>
        <Image
          width={1360}
          height={768}
          src="https://image.tmdb.org/t/p/original/vgnoBSVzWAV9sNQUORaDGvDp7wx.jpg"
          alt="Interstellar movie poster"
          priority
          className="w-screen rounded-lg h-dvh max-h-[480px] object-cover brightness-50"
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-end pb-6 md:pb-12">
        {/* Start */}
        <div className="flex max-w-xl items-center p-4 md:px-12">
          {/* Content Wrapper */}
          <div>
            {/* Title */}
            <h1
              className="font-header text-4xl font-bold"
              aria-label="Movie Title"
            >
              Interstellar
            </h1>

            {/* Information Bar */}
            <div
              className="flex gap-1"
              role="list"
              aria-label="Movie Information"
            >
              {/* Age Rating */}
              <span
                className="p-1 text-xs font-body font-extralight border rounded-md"
                role="listitem"
                aria-label="Age Rating"
              >
                PG-13
              </span>

              {/* Rating */}
              <span
                className="p-1 text-xs font-body font-extralight border rounded-md"
                role="listitem"
                aria-label="IMDb Rating"
              >
                8.7
              </span>

              {/* Genre */}
              <span
                className="p-1 text-xs font-body font-extralight border rounded-md"
                role="listitem"
                aria-label="Genre"
              >
                Sci-Fi/Adventure
              </span>
            </div>

            {/* Overview */}
            <p
              className="mt-4 font-body font-extralight"
              aria-label="Movie Overview"
            >
              {`In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole.`}
            </p>

            <div className="mt-4 flex items-center gap-3">
              {/* Play Button */}
              <Button
                className="rounded-full w-10 h-10"
                aria-label="Play Movie"
              >
                <Play />
              </Button>

              {/* Trailer Button */}
              <Button variant={"outline"} aria-label="Watch Trailer">
                Trailer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
