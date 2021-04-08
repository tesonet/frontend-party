import React from "react";
import * as Enzyme from "enzyme";
import {Provider} from "react-redux";
import {IntlProvider} from "react-intl";

import { MOCK_LOCALE, MOCK_MESSAGES } from "../App";

export const mockWindowProperty = (property, value) => {
  const { [property]: originalProperty } = window;
  delete window[property];
  beforeAll(() => {
    Object.defineProperty(window, property, {
      configurable: true,
      writable: true,
      value,
    });
  });
  afterAll(() => {
    window[property] = originalProperty;
  });
};

export const mountWithIntl = (node, store) => Enzyme.mount((
  <Provider store={store}>
    <IntlProvider
      locale={MOCK_LOCALE}
      defaultLocale={MOCK_LOCALE}
      messages={MOCK_MESSAGES}
    >
      {node}
    </IntlProvider>
  </Provider>
));