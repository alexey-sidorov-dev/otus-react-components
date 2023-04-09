import { Component, ErrorInfo, FC, ReactNode } from "react";
import { ErrorBoundaryProps, ErrorBoundaryState } from "../../types/types";

export const ErrorView: FC<{ error?: Error }> = ({ error }) => (
  <>
    <div data-testid="error-boundary">
      <h2>Something went wrong</h2>
      <details style={{ whiteSpace: "pre-wrap" }}>
        {error && error.toString()}
      </details>
    </div>
  </>
);

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state = {} as ErrorBoundaryState;

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state.hasError = false;
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(_: Error, errorInfo: ErrorInfo): void {
    console.error("Uncaught error:", this.state.error, errorInfo);
  }

  render(): ReactNode {
    const { error } = this.state;
    if (this.state.hasError) {
      return <ErrorView {...{ error }}></ErrorView>;
    }

    return this.props.children;
  }
}
