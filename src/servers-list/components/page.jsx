import React from 'react';
import PropTypes from 'prop-types';

import enhance from '../enhancers/servers';

const ServersList = ({ serversList }) => (
    <div>
        Servers List
        { serversList.map(({ name, distance, key }) => (
            <div key={key}>
                <div>
                    Name:
                    {name}
                </div>
                <div>
                    Distance:
                    {distance}
                </div>
            </div>
        ))}
    </div>
);

ServersList.propTypes = {
    serversList: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        distance: PropTypes.number.isRequired,
        key: PropTypes.string.isRequired
    }))
};

export default enhance(ServersList);
