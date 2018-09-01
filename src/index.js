import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk  from 'redux-thunk';
import 'semantic-ui-css/semantic.min.css';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';



const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
<BrowserRouter>
    <Provider store = {store} > 
        <App /> 
    </Provider>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
