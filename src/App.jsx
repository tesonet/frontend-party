import React from "react";
import { useSelector } from "react-redux";
import { Router, navigate } from "@reach/router";
import NotFound from "./components/NotFound/NotFound";
import Login from "./containers/Login/Login";
import Servers from "./containers/Servers/Servers";
import Spinner from "./components/Spinner/Spinner";

const App = () => {
    const token = useSelector(state => state.auth.token) || localStorage.getItem("token");
    const loading = useSelector(state => state.servers.loading);

    if (!token) {
        navigate("/");
    }

    return (
        <>
            <Router>
                <NotFound default />
                <Login path="/" />
                <Servers path="/servers" />
            </Router>
            {loading && <Spinner />}
        </>
    );
};

export default App;
