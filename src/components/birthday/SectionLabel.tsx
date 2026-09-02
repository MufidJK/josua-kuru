import React from "react";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-accent">
        {children}
      </span>
      <div className="h-[1px] w-12 md:w-24 bg-border" />
    </div>
  );
}
