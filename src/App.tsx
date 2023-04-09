import { FC } from "react";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { Main } from "./components/Main";

export const App: FC = () => (
  <>
    <ErrorBoundary>
      <Main />
    </ErrorBoundary>
  </>
);
