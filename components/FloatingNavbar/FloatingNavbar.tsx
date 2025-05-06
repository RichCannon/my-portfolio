"use client";
import { memo, useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FloatingNavbarProps } from "./FloatingNavbar.types";

const FloatingNavbar = ({ navItems, className }: FloatingNavbarProps) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;

    const scrollTopDetectFunction = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        setOpen(false);
      } else if (st < lastScrollTop) {
        setOpen(true);
      }
      lastScrollTop = st <= 0 ? 0 : st;
    };

    document.addEventListener("scroll", scrollTopDetectFunction, false);

    return () => {
      document.removeEventListener("scroll", scrollTopDetectFunction, false);
    };
  }, []);

  const navLinks = useMemo(() => {
    return navItems.map((navItem) => (
      <Link
        key={navItem.name}
        href={navItem.link}
        className={cn(
          "relative dark:text-neutral-50 items-center flex space-x-1 md:py-5 py-4 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
        )}
      >
        <span className="text-sm !cursor-pointer">{navItem.name}</span>
      </Link>
    ));
  }, [navItems]);

  return (
    <div
      data-state={open ? "open" : "closed"}
      className={cn(
        [
          "flex max-w-fit  fixed top-10 inset-x-0 mx-auto border  rounded-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] md:px-10  px-4  items-center justify-center space-x-4 border-white/[0.2] bg-black-100 transition-transform",
          "data-[state=closed]:-translate-y-28",
          "data-[state=open]:translate-y-0",
        ],
        className
      )}
    >
      {navLinks}
    </div>
  );
};

export default memo(FloatingNavbar);
