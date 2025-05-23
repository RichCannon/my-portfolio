import React, { memo } from "react";
import BentoGrid from "../ui/BentoGrid";
import BentoGridItem from "../ui/BentoGridItem";
import { gridItems, NAV_ITEMS_IDS } from "@/data";

const aboutSectionChilds = gridItems.map((item) => (
  <BentoGridItem key={item.title} {...item} />
));

const Grid = () => {
  return (
    <section className="px-3 md:px-0" id={NAV_ITEMS_IDS.ABOUT}>
      <BentoGrid className="w-full py-20">{aboutSectionChilds}</BentoGrid>
    </section>
  );
};

export default memo(Grid);
