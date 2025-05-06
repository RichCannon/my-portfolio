import React, { memo } from "react";
import Timeline from "../ui/Timeline";
import { NAV_ITEMS_IDS, WORK_TIMELINE } from "@/data";
import { TimelineEntry } from "../ui/Timeline/Timeline.types";
import dynamic from "next/dynamic";
// import { Vortex } from "../ui/Vortex/Vortex";

const data: TimelineEntry[] = WORK_TIMELINE.map(
  ({ title, description, timeline, highlightTitle, list, afterList }) => {
    return {
      title: timeline,
      content: (
        <div className="flex flex-col gap-y-4 min-h-96">
          <h2 className="heading !text-left">
            {title}
            <span className="text-purple">{highlightTitle}</span>
          </h2>
          <p className="md:text-xl text-lg text-justify indent-10">
            {description}
          </p>
          {list && (
            <ul
              role="list"
              className="flex  flex-col gap-y-1 md:text-xl text-lg list-disc  md:ps-10 ps-0 text-justify marker:text-purple"
            >
              {list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          {afterList && (
            <p className="md:text-xl text-lg text-justify indent-10">
              {afterList}
            </p>
          )}
        </div>
      ),
    };
  }
);

const DynamicVortex = dynamic(() => import("../ui/Vortex/Vortex"), {
  ssr: true,
});

function WorkTimeline() {
  return (
    <section
      id={NAV_ITEMS_IDS.WORK_EXPERIENCE}
      className="md:py-20 py-10 px-3 md:px-0 relative flex flex-col justify-center"
    >
      <h1 className="heading">
        My
        <span className="text-purple"> work experience</span>
      </h1>
      <div className="absolute top-0 bottom-0 w-full">
        <DynamicVortex
          containerClassName="sticky top-0 h-screen"
          rangeY={800}
          particleCount={100}
          rangeSpeed={0.2}
          baseHue={204}
          rangeHue={10}
          backgroundColor="transparent"
        />
      </div>
      <Timeline data={data} />
    </section>
  );
}

export default memo(WorkTimeline);
