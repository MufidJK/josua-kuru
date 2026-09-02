"use client";

import React, { useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { birthdayContent } from "@/data/birthday";
import { SectionLabel } from "./SectionLabel";

export function PhotoGallery() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  const updateIndicator = useCallback(() => {
    const container = scrollContainerRef.current;
    const track = trackRef.current;
    const thumb = thumbRef.current;
    if (!container || !track || !thumb) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    const maxScroll = scrollWidth - clientWidth;

    if (maxScroll <= 1) {
      track.style.opacity = "0";
      track.style.pointerEvents = "none";
      return;
    }

    track.style.opacity = "1";
    track.style.pointerEvents = "auto";

    const trackWidth = track.clientWidth;
    const visibleRatio = clientWidth / scrollWidth;
    const thumbWidth = Math.max(trackWidth * visibleRatio, 40);
    const maxThumbTranslate = trackWidth - thumbWidth;
    const scrollRatio = Math.max(0, Math.min(1, scrollLeft / maxScroll));
    const thumbTranslate = scrollRatio * maxThumbTranslate;

    thumb.style.width = `${thumbWidth}px`;
    thumb.style.transform = `translateX(${thumbTranslate}px)`;
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    let rafId: number;
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateIndicator);
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    const resizeObserver = new ResizeObserver(() => {
      updateIndicator();
    });
    resizeObserver.observe(container);
    resizeObserver.observe(track);

    // Initial update after DOM layout
    updateIndicator();
    const timeoutId = setTimeout(updateIndicator, 200);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
      container.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      resizeObserver.disconnect();
    };
  }, [updateIndicator]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const container = scrollContainerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    track.setPointerCapture(e.pointerId);

    const updateScrollFromPointer = (clientX: number) => {
      const rect = track.getBoundingClientRect();
      const pos = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      const maxScroll = container.scrollWidth - container.clientWidth;
      container.scrollLeft = pos * maxScroll;
    };

    updateScrollFromPointer(e.clientX);

    const onPointerMove = (moveEvent: PointerEvent) => {
      updateScrollFromPointer(moveEvent.clientX);
    };

    const onPointerUp = (upEvent: PointerEvent) => {
      try {
        track.releasePointerCapture(upEvent.pointerId);
      } catch {
        // Pointer might already be released
      }
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
  };

  return (
    <section className="py-24 md:py-32 w-full overflow-hidden">
      <div className="px-6 md:px-12 lg:px-24 mb-12 md:mb-20 max-w-400 mx-auto">
        <SectionLabel>{birthdayContent.gallery.sectionLabel}</SectionLabel>
      </div>

      {/* Horizontal scrollable gallery container */}
      <div
        id="gallery-scroll-container"
        ref={scrollContainerRef}
        tabIndex={0}
        aria-label="Photo gallery"
        className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory px-6 md:px-12 lg:px-24 pb-12 gap-6 md:gap-10 items-center focus:outline-none focus-visible:ring-1 focus-visible:ring-accent"
      >
        {birthdayContent.gallery.images.map((image, index) => (
          <div
            key={image.id}
            className={`relative shrink-0 snap-center md:snap-start group ${image.aspectRatio} w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[30vw] max-h-[75vh]`}
          >
            <div className="w-full h-full relative overflow-hidden bg-[#e5e1d8]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 85vw, (max-width: 1024px) 45vw, 30vw"
                className="object-cover object-center"
              />
            </div>

            {/* Minimalist Caption / Metadata */}
            <div className="absolute -bottom-8 left-0 flex justify-between w-full text-[10px] uppercase tracking-widest font-semibold text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span>{image.caption}</span>
              <span>
                {String(index + 1).padStart(2, "0")} / {String(birthdayContent.gallery.images.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Subtle Editorial Horizontal Scrollbar Indicator */}
      <div className="px-6 md:px-12 lg:px-24 max-w-400 mx-auto mt-4 md:mt-6">
        <div
          ref={trackRef}
          role="scrollbar"
          aria-label="Photo gallery scrollbar"
          aria-controls="gallery-scroll-container"
          aria-valuenow={0}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-orientation="horizontal"
          onPointerDown={handlePointerDown}
          className="relative w-full h-0.75 bg-border cursor-pointer rounded-full overflow-hidden transition-opacity duration-300 select-none"
        >
          <div
            ref={thumbRef}
            className="absolute top-0 bottom-0 left-0 bg-secondary hover:bg-primary active:bg-accent rounded-full transition-colors duration-200 pointer-events-none"
            style={{ width: "20%", transform: "translateX(0px)" }}
          />
        </div>
      </div>
    </section>
  );
}
