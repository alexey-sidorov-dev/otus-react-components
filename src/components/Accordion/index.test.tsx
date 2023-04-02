import { render, screen } from "@testing-library/react";
import { Accordion } from ".";
import { text } from "../../constants";

describe("Accordion", () => {
  it("should render accordion", () => {
    const collapsed = true;
    render(<Accordion visible={collapsed} text={text} />);

    expect(screen.getByTestId("accordion")).toBeInTheDocument();
  });
});
