import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import {Route, Router} from 'react-router-dom';
import './styles/index.scss';
import {Login} from './pages/Login/Login';
import {ServersList} from './pages/ServersList/ServersList';
import {createBrowserHistory} from 'history';
import {PrivateRoute} from './components/molecules/PrivateRoute/PrivateRoute';

export const routerHistory = createBrowserHistory();

const App = () => (
	<Provider store={store}>
		<Router history={routerHistory}>
			<PrivateRoute exact path="/" component={ServersList}/>
			<Route path="/login" component={Login}/>
		</Router>
	</Provider>
);

ReactDOM.render(
	<App/>,
	document.getElementById('root')
);
