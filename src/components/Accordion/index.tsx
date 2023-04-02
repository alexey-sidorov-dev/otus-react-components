import { useState, FC } from "react";
import { header } from "../../constants";
import { AccordionProps } from "../../types";

export const Accordion: FC<AccordionProps> = ({ text, visible }) => {
  const [collapsed, setCollapsed] = useState(!visible);

  function clickHandler() {
    setCollapsed(!collapsed);
  }

  return (
    <div
      className="accordion"
      data-testid="accordion"
      style={{ margin: "0 1rem" }}
      onClick={clickHandler}
    >
      <div data-testid="accordion-header">
        {[header, collapsed ? "+" : "-"].join(" ")}
      </div>
      <div
        data-testid="accordion-body"
        hidden={collapsed}
        onClick={clickHandler}
      >
        {text}
      </div>
    </div>
  );
};
