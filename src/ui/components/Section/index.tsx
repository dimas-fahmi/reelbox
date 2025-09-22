import { cn } from "@/src/shadcn/lib/utils";
import React from "react";

export interface SectionClasses {
  container?: string;
  header?: string;
  headerTitle?: string;
  content?: string;
}

export interface SectionProps {
  id: string;
  title: string;
  children?: React.ReactNode;
  classes?: SectionClasses;
}

const Section = ({ id, children, classes, title }: SectionProps) => {
  return (
    <section id={id} className={cn("mt-16", classes?.container)}>
      {/* Header */}
      <header className={cn("", classes?.header)}>
        <h1 className={cn("section-header", classes?.headerTitle)}>{title}</h1>
      </header>

      {/* Section Content */}
      <div className={cn("mt-6", classes?.content)}>{children}</div>
    </section>
  );
};

export default Section;
