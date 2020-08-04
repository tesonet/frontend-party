export type BreakpointMap = {
  sm: number;
  md: number;
  lg: number;
};

export type Breakpoint = keyof BreakpointMap;

export const breakpointsMap: BreakpointMap = {
  sm: 480,
  md: 768,
  lg: 1200,
};

export const breakpoints = [breakpointsMap.sm, breakpointsMap.md];
