import { render, screen } from "@testing-library/react";
import Accordion from ".";

describe("Paragraph", () => {
  it("should find accordion", () => {
    render(<Accordion />);

    expect(screen.getByTestId("accordion")).toBeInTheDocument();
  });
});
