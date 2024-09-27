import React from "react";
import BentoGrid from "../ui/BentoGrid";
import BentoGridItem from "../ui/BentoGridItem";
import { gridItems } from "@/data";

const Grid = () => {
  const aboutSectionChilds = gridItems.map((item) => (
    <BentoGridItem key={item.title} {...item} />
  ));

  return (
    <section id="about">
      <BentoGrid className="w-full py-20">{aboutSectionChilds}</BentoGrid>
    </section>
  );
};

export default Grid;
