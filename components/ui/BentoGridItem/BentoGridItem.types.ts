import { StaticImageData } from "next/image";

export type BentoGridItemProps = {
  id: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: StaticImageData;
  titleClassName?: string;
  imgClassName?: string;
  spareImgClassName?: string;
  spareImg?: StaticImageData;
};
