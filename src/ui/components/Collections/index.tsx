"use client";

import React, { RefObject, useRef } from "react";
import { cn } from "@/src/shadcn/lib/utils";
import { useDraggable } from "react-use-draggable-scroll";

const Collections = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { events } = useDraggable(containerRef as RefObject<HTMLDivElement>);

  return (
    <div
      ref={containerRef}
      {...events}
      className={cn(
        "flex gap-3 overflow-y-hidden overflow-x-scroll scrollbar-none cursor-grab",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Collections;
