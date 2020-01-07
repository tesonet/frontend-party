const breakpoints = ['320px', '411px', '1024px', '1440px'];

// aliases
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

export default {
  colors: {
    greenButton: '#9fd533',
    hoveredGreenButton: '#86b300',
    hoveredButton: '#99cc33',
    inactiveText: '#b3b3b3',
    activeText: '#999',
    normalText: '#666',
    listHeading: '#f5f5f5',
    white: '#fff',
  },
  breakpoints,
  space: ['5px', '10px', '15px', '20px', '25px'],
  sizes: ['56px'],
  fontSizes: ['14px', '16px'],
  lineHeights: [2.14, 1.88],
  letterSpacings: [1.4, 0.4],
  radii: ['5px'],
  fonts: ['Roboto'],
};
