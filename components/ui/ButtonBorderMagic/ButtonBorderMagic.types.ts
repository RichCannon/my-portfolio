import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export type ButtonBorderMagicIconPosition = "left" | "right";

export type ButtonBorderMagicProps = {
  position?: ButtonBorderMagicIconPosition;
  icon?: ReactNode;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
