import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import './styles/index.scss';
import {Login} from './pages/Login/Login';
import {ServersList} from './pages/ServersList/ServersList';
import {PrivateRoute} from './components/atoms/PrivateRoute/PrivateRoute';
import {Redirect, Router} from '@reach/router';
import {Loader} from './components/atoms/Loader/Loader';
import {DEFAULT, LOGIN, SERVERS} from './utils/routes';

const App = () => (
	<Provider store={store}>
		<Loader isLoading={store?.getState().isLoading}/>
		<Router>
			<PrivateRoute path={SERVERS} component={ServersList}/>
			<Login path={LOGIN}/>
			<Redirect default noThrow from={DEFAULT} to={LOGIN}/>
		</Router>
	</Provider>
);

ReactDOM.render(
	<App/>,
	document.getElementById('root')
);
