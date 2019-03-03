import React from "react";
import { createMemoryHistory } from "history";
import { render } from "react-testing-library";
import { BrowserRouter as Router } from "react-router-dom";

export const renderWithRouter = (
  ui: React.ReactNode,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) => {
  return {
    ...render(<Router>{ui}</Router>),
    history
  };
};
