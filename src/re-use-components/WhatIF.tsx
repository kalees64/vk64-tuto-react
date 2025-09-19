import type { JSX } from "react";

const WhatIF = (probs: WhatIFProbs) => {
  if (probs.check) {
    return probs.if;
  } else {
    if (probs.else) {
      return probs.else;
    }
  }
};

export default WhatIF;

interface WhatIFProbs {
  check: boolean;
  if: JSX.Element;
  else?: JSX.Element;
}
