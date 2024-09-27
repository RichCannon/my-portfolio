import { FC, memo } from "react";
import Spotlight from "../ui/Spotlight";
import TextGenerateEffect from "../ui/TextGenerateEffect";
import { TextGenerateEffectWordsType } from "../ui/TextGenerateEffect/TextGenerateEffect.types";
import ButtonBorderMagic from "../ui/ButtonBorderMagic";
import { FaLocationArrow } from "react-icons/fa";

export const Hero: FC = ({}) => {
  const textGenerateText: TextGenerateEffectWordsType = [
    "Transforming",
    "Concepts",
    "into",
    "Seamless",
    { word: "User", dark: "text-purple", white: "text-purple" },
    { word: "Experinces", dark: "text-purple", white: "text-purple" },
  ];

  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80  h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div>
        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60wv] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic web magic with next.js
          </h2>
          <TextGenerateEffect
            className="text-center text-4xl md:text-5xl lg:text-6xl"
            words={textGenerateText}
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-blue-100">
            Hi, I&apos;m Volodymyr, a Next.js developer
          </p>
          <a href="#about">
            <ButtonBorderMagic position="right" icon={<FaLocationArrow />}>
              Show My Work
            </ButtonBorderMagic>
          </a>
        </div>
      </div>
    </div>
  );
};

export default memo(Hero);
