import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import {render} from "react-dom";
import {createGlobalStyle} from "styled-components";
import {Provider} from "react-redux";

import store from "./redux/store";
import RouterOutlet from "./pages/router-outlet";


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body, #root {
     height: 100%;
     font-family: 'Roboto', sans-serif;
  }
`;

export default function App() {
    return (
        <Provider store={store}>
            <GlobalStyle/>
            <RouterOutlet/>
        </Provider>
    )
}

render(<App/>, document.getElementById("root"));
