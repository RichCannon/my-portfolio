import { companies, NAV_ITEMS_IDS, testimonials } from "@/data";
import React from "react";
import InfiniteMovingCards from "../ui/InfiniteMovingCards";

const Testimonials = () => {
  return (
    <section id={NAV_ITEMS_IDS.TESTIMONIALS} className="md:py-20 py-10">
      <h1 className="heading">
        Kind words from
        <span className="text-purple"> satisfied clients</span>
      </h1>
      <div className="flex flex-col items-center mt-5 lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 lg:mt-10">
          {companies.map(({ id, img, name, nameImg }) => {
            return (
              <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
                <img src={img} alt={name} className="md:w-10 w-5" />
                <img src={nameImg} alt={name} className="md:w-24 w-20" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
