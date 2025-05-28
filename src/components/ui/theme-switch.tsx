import { useCallback, useId, useState } from "react";
import { MoonIcon, SunIcon } from "lucide-react";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import useDarkMode from "@/lib/hooks/useDarkMode";

export default function ThemeSwitch() {
  const id = useId();
  const [theme, setTheme] = useDarkMode();

  const onCheckedChange = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  return (
    <>
      <div className="relative inline-grid h-9 grid-cols-[1fr_1fr] items-center text-sm font-medium">
        <Switch
          id={id}
          checked={theme === "dark"}
          onCheckedChange={onCheckedChange}
          className="peer data-[state=unchecked]:bg-input/50 absolute inset-0 h-[inherit] w-auto [&_span]:z-10 [&_span]:h-full [&_span]:w-1/2 "
        />
        <span className="pointer-events-none relative ms-0.5 flex min-w-8 items-center justify-center text-center transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] peer-data-[state=checked]:invisible peer-data-[state=unchecked]:translate-x-full peer-data-[state=unchecked]:rtl:-translate-x-full">
          <MoonIcon size={16} aria-hidden="true" />
        </span>
        <span className="peer-data-[state=checked]:text-background pointer-events-none relative me-0.5 flex min-w-8 items-center justify-center text-center transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] peer-data-[state=checked]:-translate-x-full peer-data-[state=unchecked]:invisible peer-data-[state=checked]:rtl:translate-x-full">
          <SunIcon size={16} aria-hidden="true" />
        </span>
      </div>
      <Label htmlFor={id} className="sr-only">
        Labeled switch
      </Label>
    </>
  );
}
