import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from 'react-loader';

import enhance from './enhancer';
import ListItem from '../list-item';

const DITANCE_UNITS = 'km';

const getDistanceWithUnits = distance => `${distance} ${DITANCE_UNITS}`;

const LoaderWrapper = styled.div`
    position: relative;
    height: 60px;
`;

const ListContent = ({ serversList, loading }) => (
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

ListContent.propTypes = {
    serversList: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        distance: PropTypes.number.isRequired,
        key: PropTypes.string.isRequired
    })),
    loading: PropTypes.bool
};

export default enhance(ListContent);
