export type TextGenerateEffectWordsType = (
  | { dark: string; white: string; word: string }
  | string
)[];

export type TextGenerateEffectProps = {
  words: TextGenerateEffectWordsType;
  className?: string;
  filter?: boolean;
  duration?: number;
};
