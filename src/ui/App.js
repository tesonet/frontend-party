import React from 'react';

// React router
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';

// Pages
import Home from './pages/home';
import Login from './pages/login';
import NotFound from './pages/404';
import Dashboard from './pages/dashboard';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path='/login' component={Login}/>
                        <Route path='/dashboard' component={Dashboard}/>
                        <Route exact path='/' component={Home}/>
                        <Route path='/' component={NotFound}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
