import { cn } from "@/lib/utils";
import { memo } from "react";
import { BentoGridProps } from "./BentoGrid.types";

export const BentoGrid = ({ className, children }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export default memo(BentoGrid);
