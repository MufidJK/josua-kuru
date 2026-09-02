import React from "react";
import { birthdayContent } from "@/data/birthday";
import { SectionLabel } from "./SectionLabel";

export function MessageSection() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32 max-w-[1200px] mx-auto w-full">
      <SectionLabel className="mb-12 md:mb-20">{birthdayContent.message.sectionLabel}</SectionLabel>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
        <div className="col-span-1 md:col-span-3 lg:col-span-4">
          {/* Empty space for editorial asymmetry, or a subtle accent element */}
          <div className="hidden md:block w-8 h-8 rounded-full border border-border mt-2" />
        </div>
        
        <div className="col-span-1 md:col-span-9 lg:col-span-8 flex flex-col gap-8 md:gap-10 text-lg md:text-xl lg:text-2xl leading-relaxed text-primary">
          {birthdayContent.message.paragraphs.map((paragraph, index) => (
            <p 
              key={index} 
              className={`font-medium ${index === 0 ? "text-2xl md:text-3xl lg:text-4xl font-serif italic text-accent" : ""}`}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
