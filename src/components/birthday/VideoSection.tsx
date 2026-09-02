import React from "react";
import { birthdayContent } from "@/data/birthday";
import { SectionLabel } from "./SectionLabel";

export function VideoSection() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32 max-w-[1400px] mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Editorial Text & Context */}
        <div className="lg:col-span-6 flex flex-col gap-6 lg:pr-8">
          <SectionLabel>{birthdayContent.video.sectionLabel}</SectionLabel>
          <p className="text-2xl sm:text-3xl md:text-4xl font-serif text-primary leading-snug">
            &ldquo;{birthdayContent.video.subtitle}&rdquo;
          </p>
          <p className="text-secondary text-base leading-relaxed max-w-md">
            Rekaman saat Josua sedang menjelaskan kalkulasi dan data science — ekspresif, ambisius, dan selalu siap seolah-olah sedang sesi keynote.
          </p>
          <div className="hidden lg:flex items-center gap-3 text-xs tracking-widest uppercase font-semibold text-secondary/70 pt-2">
            <span className="w-8 h-[1px] bg-border" />
            <span>09:16 Portrait Archive</span>
          </div>
        </div>
        
        {/* 9:16 Portrait Video Frame */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[400px] aspect-[9/16] relative bg-[#EDE8DF] border border-border p-2 md:p-3">
            <video 
              controls 
              playsInline
              poster={birthdayContent.video.poster}
              className="w-full h-full object-cover bg-[#E2DCCE]"
              preload="metadata"
            >
              <source src={birthdayContent.video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
