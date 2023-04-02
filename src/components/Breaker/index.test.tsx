import { render, screen } from "@testing-library/react";
import { Breaker } from ".";
import { text } from "../../constants";

describe("Breake", () => {
  it("should render breaker", () => {
    const number = 1;
    render(<Breaker number={number} text={text} />);

    expect(screen.getByTestId("breaker")).toBeInTheDocument();
  });
});
