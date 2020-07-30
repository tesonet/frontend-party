import { css, ThemedCssFunction } from "styled-components";

import { breakpointsMap, Breakpoint } from "./breakpoints";

type BreakpointMap = { [key in Breakpoint]: ThemedCssFunction<any> };

const mq = (n: number) => `@media screen and (min-width: ${n}px)`;

const mediaQuery = (label: string) => {
  return mq(breakpointsMap[label as Breakpoint]);
};

export const media = Object.keys(breakpointsMap).reduce(
  (accumulator: BreakpointMap, label: string) => {
    accumulator[label as Breakpoint] = (
      strings: TemplateStringsArray,
      ...args: any[]
    ) =>
      css`
        ${mediaQuery(label)} {
          ${css(strings, ...args)};
        }
      `;
    return accumulator;
  },
  {} as BreakpointMap
);
