import { render, screen } from "@testing-library/react";
import Paragraph from ".";

describe("Paragraph", () => {
  it("should find paragraph", () => {
    render(<Paragraph />);

    expect(screen.getByTestId("paragraph")).toBeInTheDocument();
  });
});
