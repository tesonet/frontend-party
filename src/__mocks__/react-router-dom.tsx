import React, { ReactChildren } from "react";
import * as rrd from "react-router-dom";

const MockBrowserRouter: React.FC<{ children: ReactChildren }> = ({
  children
}) => <div>{children}</div>;

/* eslint-disable @typescript-eslint/no-explicit-any */
(rrd as any).BrowserRouter = MockBrowserRouter;

module.exports = rrd;
