import React from 'react';
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import CircularProgress from "@material-ui/core/CircularProgress";
import styles from "./styles";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import actionList from "./common/actionList";

function App() {
    const classes = styles();
    const preloader = useSelector(state => state.generalReducer.preloader);
    const isLoggedIn = useSelector(state => state.generalReducer.isLoggedIn);
    const dispatch = useDispatch()
    dispatch(actionList.setIsLoggedIn(localStorage.getItem('token')))
    return (
        <Router>
            <Switch>
                <Route >
                    { isLoggedIn ? <Home/> :  <Login/> }
                </Route>
            </Switch>
            <div hidden={!preloader} className={classes.overlay}>
                <CircularProgress className={classes.preloader}/>
            </div>
        </Router>
    );
}

export default App;
