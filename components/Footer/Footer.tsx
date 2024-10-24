import {
  COPYRIGHT_YEAR,
  MY_EMAIL,
  MY_FULL_NAME,
  NAV_ITEMS_IDS,
  socialMedia,
} from "@/data";
import React from "react";
import ButtonBorderMagic from "../ui/ButtonBorderMagic";
import { FaLocationArrow } from "react-icons/fa";
import Image from "next/image";
import footerGridImg from "@/public/footer-grid.svg";

const Footer = () => {
  return (
    <footer
      id={NAV_ITEMS_IDS.CONTACT}
      className="w-full mb-[100px] md:mb-5 pb-10 px-3 md:px-0"
    >
      <Image
        src={footerGridImg}
        alt="grid"
        className="w-full absolute left-0 bottom-0 translate-y-72 min-h-96 opacity-50 pointer-events-none"
      />
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href={`mailto:${MY_EMAIL}`}>
          <ButtonBorderMagic icon={<FaLocationArrow />} position="right">
            Let&apos;s get in touch
          </ButtonBorderMagic>
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-6">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © {COPYRIGHT_YEAR} {MY_FULL_NAME}
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map(({ name, img, href }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-200"
            >
              <Image src={img} width={20} height={20} alt={name} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
