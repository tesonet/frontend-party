import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import SignInPage from "./SignInPage/SignInPage";
import HomePage from "./HomePage/HomePage";
import GenericNotFound from "./GenericNotFound/GenericNotFound";
import {localStorageKey} from "./constants/auth.constants";

// @ts-ignore
const LoggedInRoute = ({ component: Component, ...rest }) => {
    const token = localStorage.getItem(localStorageKey);

    return (
        <Route {...rest} render={(props) => (
            token
                ? <Component {...props} />
                : <Redirect to='/sign-in' />
        )} />
    )
};

// @ts-ignore
const SignInRoute = ({ component: Component, ...rest }) => {
    const token = localStorage.getItem(localStorageKey);

    return (
        <Route {...rest} render={(props) => (
            token
                ? <Redirect to='/' />
                : <Component {...props} />
        )} />
    )
};


const App = () => (
    <div className="app-routes">
        <Switch>
            <SignInRoute exact path="/sign-in" component={SignInPage}/>
            <LoggedInRoute exact path="/" component={HomePage}/>
            <Route component={GenericNotFound}/>
        </Switch>
    </div>
);

export default App;