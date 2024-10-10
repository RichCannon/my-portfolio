import { NAV_ITEMS_IDS, projects } from "@/data";
import React from "react";
import PinContainer from "../ui/PinContainer";
import { FaLocationArrow } from "react-icons/fa";
import Spotlight from "../ui/Spotlight";

const RecentProjects = () => {
  return (
    <section
      id={NAV_ITEMS_IDS.PROJECTS}
      className="md:py-20 py-10 px-3 md:px-0"
    >
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(({ title, des, iconLists, id, img, link }) => {
          return (
            <PinContainer
              key={id}
              containerClassName="flex items-center justify-center w-[80vw] sm:w-[570px]"
              title={link}
              href={link}
            >
              <div className="bg-[#13162D] lg:rounded-3xl rounded-xl">
                <div className="w-[80vw] sm:w-[570px] h-[20vh] lg:h-[30vh] overflow-hidden relative flex items-center justify-center  mb-10">
                  <div className="relative overflow-hidden w-full h-full lg-rounder-3xl bg=[#13162d]">
                    {/* <img src="/bg.png" alt={"bg-img"} /> */}
                    <Spotlight
                      className="top-0 left-10 h-full w-full"
                      fill="purple"
                    />
                    <Spotlight
                      className="top-10 left-full h-full w-full"
                      fill="white"
                    />
                  </div>
                  <img
                    src={img}
                    alt={`Porfolio project: ${title}`}
                    className="z-10 absolute bottom-0"
                  />
                </div>
                <div className="pb-4 px-4">
                  <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 ">
                    {title}
                  </h1>
                  <p className="lg:text-xl lg:font-normal font-light text-sm text-balance line-clamp-2">
                    {des}
                  </p>
                  <div className="flex items-center justify-between mt-7 mb-3">
                    <div className="flex items-center">
                      {iconLists.map((icon, idx) => {
                        return (
                          <div
                            key={icon}
                            className="border border-white/[0.2] rounded-full bg-black-100 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                            style={{
                              transform: `translateX(-${5 * idx * 2}px)`,
                            }}
                          >
                            <img src={icon} alt={icon} className="p-2" />
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex justify-center items-center text-purple">
                      <p className="flex lg:text-xl ms:text-xs text-sm text-purple">
                        Check live site
                      </p>
                      <FaLocationArrow className="ms-3" color="currentColor" />
                    </div>
                  </div>
                </div>
              </div>
            </PinContainer>
          );
        })}
      </div>
    </section>
  );
};

export default RecentProjects;
