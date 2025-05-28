import { COPYRIGHT_YEAR } from "@/constants/data";
import { memo } from "react";

export const Footer = memo(() => {
  return (
    <footer className="bg-background border-t py-8">
      <div className="container px-4 text-center">
        <p className="text-muted-foreground">
          © {COPYRIGHT_YEAR} Portfolio. Built with React, TypeScript, and
          Tailwind CSS.
        </p>
      </div>
    </footer>
  );
});
