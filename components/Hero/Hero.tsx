import { FC, memo } from "react";
import Spotlight from "../ui/Spotlight";
import TextGenerateEffect from "../ui/TextGenerateEffect";
import { TextGenerateEffectWordsType } from "../ui/TextGenerateEffect/TextGenerateEffect.types";
import ButtonBorderMagic from "../ui/ButtonBorderMagic";
import { FaLocationArrow } from "react-icons/fa";
import FlipWords from "../ui/FlipWords";

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
    <section className="md:pb-20 pb-10 md:pt-36 pt-28 px-3 md:px-0">
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
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Animated web portfolio
          </h2>
          <TextGenerateEffect
            className="text-center text-4xl md:text-5xl lg:text-6xl"
            words={textGenerateText}
          />
          <div className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-blue-100">
            <p className="inline-block">Hi, I&apos;m Volodymyr, a </p>
            <div className="md:w-48 w-32 inline-block border border-purple border-dashed rounded-md mx-1.5 px-0.5">
              <FlipWords
                words={["Next.js", "React", "Svelte", "React Native"]}
              />
            </div>
            <p className="inline-block">developer</p>
          </div>
          <a href="#about">
            <ButtonBorderMagic
              position="right"
              icon={<FaLocationArrow />}
              buttonClassName="md:mt-10"
            >
              Show My Work
            </ButtonBorderMagic>
          </a>
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);
