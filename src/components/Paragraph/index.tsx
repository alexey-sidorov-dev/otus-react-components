import { FC } from "react";
import { ParagraphProps } from "../../types";

export const Paragraph: FC<ParagraphProps> = ({ style: fontStyle, text }) =>
  fontStyle === "blockquote" ? (
    <blockquote
      className="paragraph"
      data-testid="blockquote"
      style={{ display: "inline-block", backgroundColor: "ghostwhite" }}
    >
      <p style={{ fontStyle, margin: "0 1rem" }}>{text}</p>
    </blockquote>
  ) : (
    <div className="paragraph" data-testid="paragraph">
      <p style={{ fontStyle, margin: "0 1rem" }}>{text}</p>
    </div>
  );
