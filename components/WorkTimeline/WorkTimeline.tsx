import React from "react";
import Timeline from "../ui/Timeline";
import { WORK_TIMELINE } from "@/data";
import { TimelineEntry } from "../ui/Timeline/Timeline.types";
import { Vortex } from "../ui/Vortex/Vortex";

const data: TimelineEntry[] = WORK_TIMELINE.map(
  ({ title, description, timeline, highlightTitle, list }) => {
    return {
      title: timeline,
      content: (
        <div className="flex flex-col gap-y-4 min-h-96">
          <h2 className="heading !text-left">
            {title}
            <span className="text-purple">{highlightTitle}</span>
          </h2>
          <p className="md:text-xl text-lg">{description}</p>
          {list && (
            <ul className="flex flex-col gap-y-1 md:text-xl text-lg list-disc md:ps-11 ps-0">
              {list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ),
    };
  }
);

function WorkTimeline() {
  return (
    <section className="md:py-20 py-10 px-3 md:px-0 relative flex flex-col justify-center">
      <h1 className="heading">
        My
        <span className="text-purple"> work experience</span>
      </h1>
      <div className="absolute top-0 bottom-0 w-full">
        <Vortex
          containerClassName="sticky top-0 h-screen"
          rangeY={800}
          particleCount={100}
          rangeSpeed={0.2}
          baseHue={204}
          rangeHue={10}
          backgroundColor="transparent"
        ></Vortex>
      </div>
      <Timeline data={data} />
    </section>
  );
}

export default WorkTimeline;
