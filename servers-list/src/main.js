import React from 'react';
import Login from './routes/login';
import ServerList from './routes/serverList';
import './main.scss';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import ProtectedRoute from './routes/protectedRoute';

class Main extends React.Component {
    render(){
        return(
            <Router>
                    {localStorage.getItem('logged') ?
                    <Switch>
                        <Route path='/' exact>
                            <Redirect to='/servers' />
                        </Route>
                        <ProtectedRoute path='/servers'  component={ServerList} exact />
                    </Switch> :
                    <Switch>
                        <Route path='/' component={Login} exact />
                        <ProtectedRoute path='/servers'  component={ServerList} exact />
                    </Switch>}
            </Router>
        )
    }
}

export default Main;