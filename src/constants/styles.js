import { css } from "styled-components";

export const align = {
  vertical: css`
    display: flex;
    align-items: center;
  `,
  center: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `
};

export const fontWeight = {
  light: css`
    font-weight: 300;
  `,
  bold: css`
    font-weight: 700;
  `
};

export const letterSpacing = {
  small: css`
    letter-spacing: 0.4px;
  `,
  large: css`
    letter-spacing: 1.4px;
  `
};

export const colors = {
  white: "#ffffff",
  grey1: "#f5f5f5",
  grey2: "#e6e6e6",
  grey3: "#cccccc",
  grey4: "#b3b3b3",
  grey5: "#999999",
  grey6: "#666666",
  green1: "#99cc33",
  green2: "#9fd533",
  green3: "#86b300",
  blue: "#2f3254"
};
