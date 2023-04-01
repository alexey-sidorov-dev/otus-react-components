import { render, screen } from "@testing-library/react";
import Picture from ".";

describe("Picture", () => {
  it("should find picture", () => {
    render(<Picture />);

    expect(screen.getByTestId("picture")).toBeInTheDocument();
  });
});
