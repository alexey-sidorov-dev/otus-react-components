import { render, screen } from "@testing-library/react";
import { Columns } from ".";
import { text } from "../../constants";

describe("Columns", () => {
  it("should render columns", () => {
    const number = 2;
    render(<Columns number={number} text={text} />);

    expect(screen.getByTestId("columns")).toBeInTheDocument();
  });
});
