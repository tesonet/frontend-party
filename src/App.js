import React, { Suspense } from 'react';
import { BrowserRouter , Route, Switch, Redirect } from 'react-router-dom';
// import './assets/css/main.css';
import LoginPage from './containers/LoginPage/LoginPage';
import Spinner from './components/UI/Spinner/Spinner';
import { connect } from 'react-redux';
import './App.scss';

const LogoutPage = React.lazy(() => import ('./containers/LogoutPage/LogoutPage'));

const App = props => {
    
    let routes = (
        <Switch>
            <Route path="/" exact component={LoginPage} />
            <Redirect to="/"/>
        </Switch>
    );

    if (props.isAuth){
        routes = (
            <Switch>
                <Route path="/" exact component={LoginPage} />
                <Route path="/servers" exact render={() => <Suspense fallback={<Spinner/>}><LogoutPage/></Suspense>}  />
                <Redirect to="/"/>
            </Switch>
        );
    };

    return (
        <BrowserRouter>   
            {routes}
        </BrowserRouter>
    );
      
} 

const mapStateToProps = state => {
    return {
        isAuth: state.auth.token !== null
    };
}

export default connect(mapStateToProps)(App);
