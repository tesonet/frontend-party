import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {store} from './store'
import {BrowserRouter} from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import App from './app'

import 'sanitize.css/sanitize.css'
import './index.css'

const targetNode = document.querySelector('#root')

store.subscribe(() => localStorage.setItem('token', store.getState().authReducer.token))

render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    targetNode
)

serviceWorker.unregister()