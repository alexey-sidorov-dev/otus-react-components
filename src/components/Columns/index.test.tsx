import { render, screen } from "@testing-library/react";
import Columns from ".";

describe("Columns", () => {
  it("should find columns", () => {
    render(<Columns />);

    expect(screen.getByTestId("columns")).toBeInTheDocument();
  });
});
