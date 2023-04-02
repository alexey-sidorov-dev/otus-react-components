import { FC } from "react";
import { BreakerProps } from "../../types";

export const Breaker: FC<BreakerProps> = ({ number, text }) => {
  const hrs = [];
  for (let i = 0; i < number; i++) {
    hrs.push(<hr key={i} />);
  }
  return (
    <>
      <div className="breaker" data-testid="breaker">
        {hrs}
        {text}
      </div>
    </>
  );
};
