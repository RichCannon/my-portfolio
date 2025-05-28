"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        [
          "peer focus-visible:ring-ring/50 inline-flex h-6 w-10 shrink-0 items-center rounded-full border-2 border-transparent transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
          "data-[state=checked]:bg-primary",
          "data-[state=unchecked]:bg-input",
          `before:content-[""] before:data-[state=checked]:flex-1 before:data-[state=unchecked]:flex-0 before:transition-[flex] before:duration-300 before:ease-[cubic-bezier(0.16,1,0.3,1)]`,
        ],
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn([
          "bg-background pointer-events-none block size-5 rounded-full shadow-xs ring-0",
        ])}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
