import { render, screen } from "@testing-library/react";
import { FC } from "react";
import { ErrorBoundary } from ".";

describe("ErrorBoundary", () => {
  const Child: FC = () => {
    throw new Error();
  };

  it(`should render error boundary component`, () => {
    render(
      <ErrorBoundary>
        <Child />
      </ErrorBoundary>
    );
    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
    expect(screen.getByTestId("error-boundary")).toBeInTheDocument();
  });
});
