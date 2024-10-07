import { FC, memo } from "react";
import { ButtonBorderMagicProps } from "./ButtonBorderMagic.types";

const ButtonBorderMagic: FC<ButtonBorderMagicProps> = ({
  children,
  className,
  position = "left",
  icon = null,
  buttonClassName,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`relative w-full inline-flex h-12 overflow-hidden rounded-lg p-[1px] md:w-60  ${buttonClassName}`}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${className}`}
      >
        {position === "left" && icon}
        {children}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default memo(ButtonBorderMagic);
