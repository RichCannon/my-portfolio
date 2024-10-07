import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export type ButtonBorderMagicIconPosition = "left" | "right";

export type ButtonBorderMagicProps = {
  position?: ButtonBorderMagicIconPosition;
  icon?: ReactNode;
  buttonClassName?: string;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
