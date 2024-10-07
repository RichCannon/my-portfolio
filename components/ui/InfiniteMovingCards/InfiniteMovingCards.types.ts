export type InfiniteMovingCardsItems = {
  quote: string;
  name: string;
  title: string;
};

export type InfiniteMovingCardsDirection = "left" | "right";
export type InfiniteMovingCardsSpeed = "fast" | "normal" | "slow";

export type InfiniteMovingCardsProps = {
  items: InfiniteMovingCardsItems[];
  direction?: InfiniteMovingCardsDirection;
  speed?: InfiniteMovingCardsSpeed;
  pauseOnHover?: boolean;
  className?: string;
};
