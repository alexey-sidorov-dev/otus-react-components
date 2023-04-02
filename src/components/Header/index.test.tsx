import { render, screen } from "@testing-library/react";
import { Header } from ".";
import { text } from "../../constants";

describe("Header", () => {
  it("should render header", () => {
    const level = 1;
    render(<Header level={level} text={text} />);

    expect(screen.getByTestId("header")).toBeInTheDocument();
  });
});
