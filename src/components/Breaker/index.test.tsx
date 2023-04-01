import { render, screen } from "@testing-library/react";
import Breaker from ".";

describe("Breake", () => {
  it("should find breaker", () => {
    render(<Breaker />);

    expect(screen.getByTestId("breaker")).toBeInTheDocument();
  });
});
