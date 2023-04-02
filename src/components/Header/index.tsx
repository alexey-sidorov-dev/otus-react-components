import { FC } from "react";
import { HeaderProps } from "../../types";

export const Header: FC<HeaderProps> = ({ level, text }) => {
  const Tag = `h${level}` as `h${typeof level}`;

  return (
    <>
      <div className="header" data-testid="header">
        <Tag>{text}</Tag>
      </div>
    </>
  );
};
