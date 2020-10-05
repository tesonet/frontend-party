import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/login';
import ServerList from './pages/serverList';
import NoMatch from './pages/page404';
import PrivateRoute from './components/PrivateRoute';
import './assets/css/style.css';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Login} />
				<PrivateRoute path="/servers" component={ServerList} />
				<Route path="*" component={NoMatch} />
			</Switch>
		</Router>
	);
}

export default App;
