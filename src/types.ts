export type PromptedComponent = {
  componentName: string | null;
  componentProp: string | null;
};

export type HeaderProps = {
  level: HeaderLevel;
};
export type HeaderLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type BreakerProps = {
  number: number;
  defaultNumber: 1;
};

export type ParagraphProps = {
  style: "normal" | "italic" | "blockquote";
  defaultStyle: "normal";
};

export type ImageProps = {
  float: "left" | "right" | "both";
  defaultFolat: "left";
};

export type ColumnProps = { number: number; defaultNumber: 1 };

export type Parameter = { value: string; display: string };
