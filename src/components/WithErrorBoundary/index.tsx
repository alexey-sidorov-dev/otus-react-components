import { ComponentType } from "react";
import { ErrorBoundaryHOCProps } from "../../types/types";
import { ErrorBoundary, ErrorView } from "../ErrorBoundary";

export function withErrorBoundary(
  WrappedComponent: ComponentType<ErrorBoundaryHOCProps>
) {
  return class extends ErrorBoundary {
    render() {
      const { error } = this.state;
      if (error) {
        return <ErrorView {...{ error }} />;
      }
      return <WrappedComponent {...this.props} />;
    }
  };
}
