
import React from "react";
import { cn } from "../../lib/utils";

/**
 * Props for the FlippingCard component.
 */
interface FlippingCardProps {
  className?: string;
  height?: number | string;
  width?: number | string;
  frontContent?: React.ReactNode;
  backContent?: React.ReactNode;
  // Added optional key property to satisfy TypeScript when the component is used in a list/map, 
  // though React handles this property internally.
  key?: React.Key;
}

/**
 * A component that displays a card with a 3D flip animation on hover.
 */
// Added key to FlippingCardProps to resolve the TypeScript error in App.tsx line 128
export function FlippingCard({
  className,
  frontContent,
  backContent,
  height = "300px",
  width = "100%",
}: FlippingCardProps) {
  return (
    <div
      className="group/flipping-card [perspective:1000px] w-full"
      style={
        {
          "--height": typeof height === "number" ? `${height}px` : height,
          "--width": typeof width === "number" ? `${width}px` : width,
        } as React.CSSProperties
      }
    >
      <div
        className={cn(
          "relative rounded-[2rem] border border-slate-100 bg-white shadow-sm transition-all duration-700 [transform-style:preserve-3d] group-hover/flipping-card:[transform:rotateY(180deg)] h-[var(--height)] w-full",
          className
        )}
      >
        {/* Front Face */}
        <div className="absolute inset-0 h-full w-full rounded-[inherit] bg-white text-slate-900 [transform-style:preserve-3d] [backface-visibility:hidden] [transform:rotateY(0deg)]">
          <div className="[transform:translateZ(50px)_scale(1)] h-full w-full">
            {frontContent}
          </div>
        </div>
        {/* Back Face */}
        <div className="absolute inset-0 h-full w-full rounded-[inherit] bg-primary text-white [transform-style:preserve-3d] [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="[transform:translateZ(50px)_scale(1)] h-full w-full">
            {backContent}
          </div>
        </div>
      </div>
    </div>
  );
}
