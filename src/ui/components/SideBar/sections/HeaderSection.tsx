"use client";

import { useSidebarStore } from "@/src/lib/stores/sidebar";
import { AspectRatio } from "@/src/shadcn/components/ui/aspect-ratio";
import { PanelLeftClose } from "lucide-react";
import Image from "next/image";
import React from "react";

const HeaderSection = () => {
  const { setOpen } = useSidebarStore();

  return (
    <header className="p-4">
      {/* Controller */}
      <div className="flex justify-between items-center">
        <h1 className="font-header text-2xl font-bold">ReelBox</h1>
        <button
          onClick={() => setOpen(false)}
          className="cursor-pointer"
          suppressHydrationWarning
        >
          <PanelLeftClose />
        </button>
      </div>
      {/* Announcement */}
      <AspectRatio ratio={16 / 9} className="mt-4">
        <div className="relative group/card cursor-pointer">
          {/* Thumbnail */}
          <div className="rounded-md overflow-hidden">
            <Image
              width={280}
              height={280}
              src={
                "https://image.tmdb.org/t/p/original/fQGrzO0Iwo7CO4b2zVdJLkcnhwK.jpg"
              }
              alt="Silo's Backdrop"
              className="w-full h-full object-cover brightness-50"
            />
          </div>

          {/* Information */}
          <div className="absolute inset-0 p-4 flex items-end group-hover/card:items-center group-hover/card:justify-center">
            <h1 className="group-hover/card:hidden font-body text-sm font-light">
              {`Here's everything you need to know about Silo season 3`}
            </h1>
            <button className="hidden group-hover/card:block font-body text-sm font-light p-1 border">
              Read More
            </button>
          </div>
        </div>
      </AspectRatio>
    </header>
  );
};

export default HeaderSection;
