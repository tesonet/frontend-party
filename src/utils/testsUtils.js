import React from "react";
import * as Enzyme from "enzyme";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";

import { MOCK_LOCALE, MOCK_MESSAGES } from "../App";
import { getStore } from "../app/store";

export const mountWithIntl = (
  node,
  store = getStore()
) => Enzyme.mount((
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