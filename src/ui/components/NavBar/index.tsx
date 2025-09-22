"use client";

import { useSidebarStore } from "@/src/lib/stores/sidebar";
import { Film, Menu, Newspaper, TvMinimal } from "lucide-react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const { toggleOpen } = useSidebarStore();

  return (
    <nav className="">
      {/* container */}
      <div className="layout-width flex justify-between">
        {/* Logo Section */}
        <div className="flex gap-2">
          {/* Logo */}
          <Link
            href={"/"}
            className="text-3xl font-header font-bold text-yellow-400 flex items-center gap-2"
          >
            <span className="mt-2">ReelBox</span>
          </Link>

          {/* Navigation */}
          <ul className="hidden md:flex font-body text-xs">
            <li className="px-4 flex items-center justify-center">
              <Link href={"/movies"} className="flex items-center gap-2">
                <Film className="w-5 h-5" />
                Movies
              </Link>
            </li>
            <li className="px-4 flex items-center justify-center">
              <Link href={"/shows"} className="flex items-center gap-2">
                <TvMinimal className="w-5 h-5" />
                Shows
              </Link>
            </li>
            <li className="px-4 flex items-center justify-center">
              <Link href={"/news"} className="flex items-center gap-2">
                <Newspaper className="w-5 h-5" />
                News
              </Link>
            </li>
          </ul>
        </div>

        {/* End Section */}
        <div className="flex items-center">
          <button className="cursor-pointer" onClick={() => toggleOpen()}>
            <Menu />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
