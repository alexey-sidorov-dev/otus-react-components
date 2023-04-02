import { FC } from "react";
import { PictureProps } from "../../types";
import picture from "../../../assets/images/fine.png";

export const Picture: FC<PictureProps> = ({ float: floatProp, text }) => (
  <div data-testid="picture">
    <img
      src={picture}
      alt="picture"
      className="picture"
      style={{
        float: floatProp,
        height: "auto",
        width: "auto",
        maxWidth: "500px",
        margin: "0 1rem",
      }}
    />
    <div>{text}</div>
  </div>
);
