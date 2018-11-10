import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from 'react-loader';

import enhance from '../enhancers/servers';

const DITANCE_UNITS = 'km';

const getDistanceWithUnits = distance => `${distance} ${DITANCE_UNITS}`;

const ListItem = styled.li`
    background-color: ${props => props.header ? '#f5f5f5' : '#ffffff'};
    text-transform: ${props => props.header ? 'uppercase' : 'initial'};
    color: #666666;
    display: flex;
    justify-content: space-between;
    height: 60px;
    line-height: 36px;
`;

const LoaderWrapper = styled.div`
    position: relative;
    height: 60px;
`;

const ServersList = ({ serversList, loading }) => (
    <React.Fragment>
        { loading && (
            <LoaderWrapper>
                <Loader loaded={!loading} />
            </LoaderWrapper>)
        }

        { serversList.map(({ key, name, distance }) => (
            <ListItem key={key} className="list-group-item">
                <span>{ name }</span>
                <span>{ getDistanceWithUnits(distance) }</span>
            </ListItem>
        ))}
    </React.Fragment>
);

ServersList.propTypes = {
    serversList: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        distance: PropTypes.number.isRequired,
        key: PropTypes.string.isRequired
    })),
    loading: PropTypes.bool
};

export default enhance(ServersList);
