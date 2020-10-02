import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/login';
import ServerList from './pages/serverList';
import { PrivateRoute } from './components/PrivateRoute';
import './assets/sass/main.scss';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Login} />
				<PrivateRoute path="/servers" component={ServerList} />
			</Switch>
		</Router>
	);
}

export default App;

// {
// 	/* <Suspense fallback={<div>Loading...</div>}>
// </Suspense> */
// }
