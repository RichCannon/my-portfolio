import { SVGProps } from "react";

export type ButtonMovingBorderProps = {
  borderRadius?: string;
  children: React.ReactNode;
  as?: any;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
} & Record<string, any>;

export type MovingBorderProps = {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
} & SVGProps<SVGSVGElement>;
