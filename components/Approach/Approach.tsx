"use client";
import React, { memo } from "react";
import CanvasRevealEffect from "../ui/CanvasRevealEffect";
import { AnimatePresence, motion } from "framer-motion";
import ButtonBorderMagic from "../ui/ButtonBorderMagic";
import { APPROACH } from "@/data";

const Approach = () => {
  return (
    <section className="w-full md:py-20 py-10 px-3 md:px-0">
      <h1 className="heading">
        My
        <span className="text-purple"> approach</span>
      </h1>
      <div className="md:py-20 py-0 grid my-20  grid-cols-1 lg:grid-cols-3 items-center justify-center gap-4">
        {APPROACH.map(
          ({
            animationSpeed,
            containerClassName,
            description,
            order,
            title,
            colors,
            dotSize,
          }) => (
            <CardMemo
              key={order}
              title={title}
              icon={<AceternityIcon order={order} />}
              description={description}
            >
              <CanvasRevealEffect
                animationSpeed={animationSpeed}
                containerClassName={containerClassName}
                colors={colors}
                dotSize={dotSize}
              />
            </CardMemo>
          )
        )}
      </div>
    </section>
  );
};

const Card = ({
  title,
  icon,
  children,
  description,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className=" z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-center  text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>

        <p className="dark:text-white/800 text-center  text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {description}
        </p>
      </div>
    </div>
  );
};

const CardMemo = memo(Card);

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div className="flex">
      <ButtonBorderMagic disabled>{order}</ButtonBorderMagic>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default memo(Approach);
