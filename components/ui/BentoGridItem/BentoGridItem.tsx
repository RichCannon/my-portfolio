import { cn } from "@/lib/utils";
import { memo } from "react";
import { BentoGridItemProps } from "./BentoGridItem.types";
import BGGradientAnimation from "../BGGradientAnimation";
import GridGlobe from "../GridGlobe/GridGlobe";
import Lottie from "react-lottie";
import EmailCopyButton from "../EmailCopyButton";

const GRADIENT_STYLES = {
  backgroundColor: "rgb(4,7,29)",
  background:
    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
};

const renderTechList = (
  techs: string[],
  spanPosition: "top" | "bot" = "bot"
) => {
  const emptySpan = (
    <span className="flex-1 py-4 px-3 rounded-lg text-center bg-[#10132e]" />
  );
  return (
    <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
      {spanPosition === "top" && emptySpan}
      {techs.map((item) => (
        <span
          key={item}
          className="flex-1 py-2 px-3 lg:py-4 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
        >
          {item}
        </span>
      ))}
      {spanPosition === "bot" && emptySpan}
    </div>
  );
};

const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  spareImg,
  titleClassName,
  id,
}: BentoGridItemProps) => {
  return (
    <div
      className={cn(
        `row-span-1 relative rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 overflow-hidden border-white/[0.1] border`,
        className
      )}
      style={GRADIENT_STYLES}
    >
      <div className={`${id === 6 ? "flex justify-center" : ""} h-full`}>
        {img && (
          <div className="w-full h-full absolute">
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          </div>
        )}
        {spareImg && (
          <div
            className={`absolute right-0 -bottom-5 ${
              id === 5 ? "w-full opacity-80" : ""
            }`}
          >
            <img
              src={spareImg}
              alt={spareImg}
              className={"object-cover object-center w-full h-full"}
            />
          </div>
        )}
        {id === 6 && (
          <BGGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl" />
          </BGGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          {description && (
            <div className="font-sans font-normal text-[#c1c2d3] text-sm md:text-x z-10">
              {description}
            </div>
          )}
          {title && (
            <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
              {title}
            </div>
          )}

          {id === 2 && <GridGlobe />}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              {renderTechList(["React", "Next.js", "TypeScript"])}
              {renderTechList(["VueJS", "AWS", "MongoDB"], "top")}
            </div>
          )}
          {id === 6 && (
            <div className="mt-5">
              <EmailCopyButton />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(BentoGridItem);
