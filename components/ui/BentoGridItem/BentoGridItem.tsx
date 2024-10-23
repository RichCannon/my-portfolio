import { cn } from "@/lib/utils";
import { memo } from "react";
import { BentoGridItemProps } from "./BentoGridItem.types";
import BGGradientAnimation from "../BGGradientAnimation";
import GridGlobe from "../GridGlobe/GridGlobe";
import EmailCopyButton from "../EmailCopyButton";
import { TECH_STACK_1, TECH_STACK_2 } from "@/data";
import Compare from "../Compare";
import Image from "next/image";
import badCodeImg from "@/public/bad-code.png";
import goodCodeImg from "@/public/good-code.png";

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
          className="flex items-center flex-1 py-2 px-3 lg:px-4 lg:py-6 text-xs lg:text-lg opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
        >
          {item}
        </span>
      ))}
      {spanPosition === "bot" && emptySpan}
    </div>
  );
};

const BentoGridItem = ({
  title,
  description,
  img,
  spareImg,
  className = "",
  imgClassName = "",
  spareImgClassName = "",
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
            <Image
              src={img}
              alt={img.src}
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
            <Image
              src={spareImg}
              alt={spareImg.src}
              className={cn(
                spareImgClassName,
                "object-cover object-center inset-0"
              )}
            />
          </div>
        )}
        {id === 6 && <BGGradientAnimation />}
        <div
          className={cn(
            titleClassName,
            " transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 z-10",
            {
              ["group-hover/bento:translate-x-2"]: id !== 5,
            }
          )}
        >
          <div
            className={cn({
              ["group-hover/bento:-translate-x-[120%] md:group-hover/bento:-translate-x-full z-[60] pointer-events-none transition-[transform] duration-200"]:
                id === 5,
            })}
          >
            {description && (
              <div
                className={
                  "font-sans font-normal text-[#c1c2d3] text-sm md:text-x"
                }
              >
                {description}
              </div>
            )}
            {title && (
              <div
                className={"font-sans font-bold text-lg lg:text-3xl max-w-96"}
              >
                {title}
              </div>
            )}
          </div>
          {id === 5 && (
            <div className="backdrop-blur-sm bg-black/30 absolute inset-0 group-hover/bento:opacity-0 z-50 pointer-events-none transition-[opacity] duration-200" />
          )}
          {id === 2 && <GridGlobe />}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2 h-full ">
              {renderTechList(TECH_STACK_1)}
              {renderTechList(TECH_STACK_2, "top")}
            </div>
          )}
          {id === 5 && (
            <div className="absolute inset-0">
              <Compare
                firstImage={badCodeImg}
                secondImage={goodCodeImg}
                firstImageClassName="object-cover object-left-top"
                secondImageClassname="object-cover object-left-top"
                className="h-full w-full"
                slideMode="hover"
              />
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
