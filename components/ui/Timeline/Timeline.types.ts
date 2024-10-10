export type TimelineEntry = {
  title: string;
  content: React.ReactNode;
};

export type TimelineProps = {
  data: TimelineEntry[];
};
