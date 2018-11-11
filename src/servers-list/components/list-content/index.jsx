import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from 'react-loader';
import { FormattedMessage } from 'react-intl';

import enhance from './enhancer';
import ListItem from '../list-item';
import translations from './index.lang';

const DITANCE_UNITS = 'km';

const getDistanceWithUnits = distance => `${distance} ${DITANCE_UNITS}`;

const LoaderWrapper = styled.div`
    position: relative;
    height: 60px;
`;

const ErrorBox = styled.div`
    text-align: center;
`;

export const ListContent = ({ serversList, loading, failedToLoad }) => {
    if (failedToLoad) {
        return (
            <ErrorBox className="alert alert-danger">
                <FormattedMessage {...translations.failedToLoadServersList} />
            </ErrorBox>);
    }

    if (loading) {
        return (
            <LoaderWrapper>
                <Loader loaded={!loading} />
            </LoaderWrapper>
        );
    }

    return serversList.map(({ key, name, distance }) => (
        <ListItem key={key} className="list-group-item">
            <span>{ name }</span>
            <span>{ getDistanceWithUnits(distance) }</span>
        </ListItem>
    ));
};

ListContent.propTypes = {
    serversList: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        distance: PropTypes.number.isRequired,
        key: PropTypes.string.isRequired
    })).isRequired,
    loading: PropTypes.bool,
    failedToLoad: PropTypes.bool
};

export default enhance(ListContent);
