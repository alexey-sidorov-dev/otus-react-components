import { render, screen } from "@testing-library/react";
import Header from ".";

describe("Header", () => {
  it("should find header", () => {
    render(<Header level="h1" />);

    expect(screen.getByTestId("header")).toBeInTheDocument();
  });
});
