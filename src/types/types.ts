import { ErrorInfo, PropsWithChildren, ReactNode } from "react";

export interface HeaderProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  text: string;
}

export interface BreakerProps {
  number: 1 | 2;
  text: string;
}

export interface ParagraphProps {
  style: "normal" | "italic" | "blockquote";
  text: string;
}

export interface PictureProps {
  float: "left" | "right" | "none";
  text: string;
}

export interface ColumnsProps {
  number: number;
  text: string;
}

export interface AccordionProps {
  visible: boolean;
  text: string;
}

export interface Parameter {
  value: string | number;
  display: string;
}

export interface ErrorBoundaryProps {
  children?: ReactNode;
  hasError?: boolean;
  error?: Error;
}

export type ErrorBoundaryHOCProps = PropsWithChildren<{
  children?: ReactNode;
  hasError?: boolean;
  error?: Error;
}>;

export interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}
