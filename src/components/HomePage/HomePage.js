import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getHttpRequest } from "../../utils/fetchApi";

const HomePage = ({ token }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getHttpRequest(`https://playground.tesonet.lt/v1/servers`, token).then(
            (response) => {
                const ordered = response.sort((a, b) => {
                    return a.distance - b.distance;
                });
                setData(ordered);
            }
        );
    }, []);
    return (
        <div>
            Welcome to the homepage!
            <div>Server</div>
            <div>
                {data.map((element, i) => {
                    return <div key={i}>{i}-number</div>;
                })}
            </div>
        </div>
    );
};

export default HomePage;

HomePage.propTypes = {
    token: PropTypes.string
};
