import React from "react";
import { birthdayContent } from "@/data/birthday";
import { SectionLabel } from "./SectionLabel";

export function SignatureSection() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32 max-w-[1200px] mx-auto w-full text-center flex flex-col items-center">
      <SectionLabel className="mb-12 md:mb-16 justify-center">
        {birthdayContent.signature.sectionLabel}
      </SectionLabel>
      
      <div className="max-w-2xl flex flex-col gap-8 md:gap-10">
        <p className="text-lg md:text-xl lg:text-2xl font-serif italic text-primary leading-relaxed">
          &ldquo;{birthdayContent.signature.content}&rdquo;
        </p>
        
        <p className="text-base md:text-lg font-medium text-secondary leading-relaxed">
          {birthdayContent.signature.closing}
        </p>
        
        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="w-[1px] h-16 bg-border"></div>
          <p className="font-serif italic text-2xl md:text-3xl text-primary mt-4">
            {birthdayContent.signature.name}
          </p>
          <p className="text-[10px] uppercase tracking-widest text-secondary mt-12 opacity-60">
            {birthdayContent.signature.footnote}
          </p>
        </div>
      </div>
    </section>
  );
}
