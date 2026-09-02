import React from "react";
import { birthdayContent } from "@/data/birthday";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between px-6 md:px-12 lg:px-24 py-12 md:py-20 max-w-400 mx-auto w-full">
      {/* Top Metadata */}
      <div className="flex flex-wrap items-center justify-between gap-4 text-[10px] md:text-xs font-semibold tracking-[0.15em] text-secondary uppercase animate-fade-in">
        <span>{birthdayContent.heroMetadata.date}</span>
        <span className="hidden sm:inline-block w-8 h-px bg-border"></span>
        <span>{birthdayContent.heroMetadata.edition}</span>
        <span className="hidden sm:inline-block w-8 h-px bg-border"></span>
        <span>{birthdayContent.heroMetadata.location}</span>
      </div>

      {/* Main Title Area */}
      <div className="flex flex-col mt-32 md:mt-0 max-w-5xl">
        <h1 className="font-serif text-6xl sm:text-7xl md:text-[9rem] lg:text-[11rem] leading-[0.9] tracking-tight text-primary animate-rise-1">
          {birthdayContent.recipient.toUpperCase()}
        </h1>
        <div className="flex items-center gap-4 md:gap-8 mt-4 md:mt-8 ml-2 md:ml-4 animate-rise-2">
          <div className="w-12 md:w-24 h-px bg-primary"></div>
          <p className="font-serif italic text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-primary">
            {birthdayContent.heroSubtitle}
          </p>
        </div>
      </div>
      
      {/* Subtle indicator to scroll */}
      <div className="absolute bottom-8 right-6 md:right-12 lg:right-24 animate-fade-in-late">
        <span className="text-[10px] font-semibold tracking-widest text-secondary vertical-text rotate-90 origin-right inline-block">
          SCROLL
        </span>
      </div>
    </section>
  );
}
