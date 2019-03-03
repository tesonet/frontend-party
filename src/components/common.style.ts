import { injectGlobal } from "emotion";

export const commonStyles = {
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    padding: "15px",
    flexDirection: "column"
  }
};

injectGlobal`
  html, body, .app {
    height: 100%;
    width: 100%;
    font-family: Roboto Light;
    letter-spacing: 0.1em;
  }
  .table {
    color: #666666;
  }
  .table thead th {
    border-color: #e6e6e6;
    border-width: 1px;
    font-weight: normal;
    color: #999999;
  }`;
