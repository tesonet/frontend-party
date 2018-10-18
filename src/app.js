import React from 'react'
import {connect} from 'react-redux'
import {NavLink, Route} from 'react-router-dom'
import logo from './assets/images/logo-dark.png'
import {logOut} from './pages/AuthPage/authActions'
import {withRouter} from 'react-router-dom'
import AuthPage from './pages/AuthPage/authContainer'
import Countries from './pages/protected/Servers/serversContainer'
import FavoriteServers from './pages/protected/FavoriteServers/favoriteServersContainer'
import ProtectedRouter from "./Hoc/ProtectedRoute";

const App = (props) => {
    return (
        <React.Fragment>
            {props.withAuth && (
                <header className="top-header">
                    <img className="top-header_logo" src={logo} alt="logo"/>
                    <nav className="main-navigation">
                        <NavLink to="/servers">Servers</NavLink>
                        <NavLink to="/favorite-server">Favorite servers</NavLink>
                    </nav>
                    <button
                        className="top-header_btn-logout btn"
                        type="button"
                        onClick={() => {
                            props.dispatch(logOut())
                            props.history.push('/')
                        }}
                    >
                        Logout
                    </button>
                </header>
            )}
            <main>
                <Route
                    path="/"
                    exact
                    render={(props) => <AuthPage {...props} history={props.history}/>}
                />
                <ProtectedRouter path="/servers" component={Countries}/>
                <ProtectedRouter path='/favorite-server' component={FavoriteServers}/>
            </main>
        </React.Fragment>
    )
}

export default withRouter(connect((state) => ({withAuth: state.authReducer.withAuth}))(App))
