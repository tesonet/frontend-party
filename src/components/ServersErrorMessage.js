import React from 'react';
import PropTypes from 'prop-types';

import { SERVER_ERROR_MESSAGES } from '../constants/messages';
import { SERVER_ERROR_TYPES } from '../constants/types';
import './ServersErrorMessage.scss';

const serverErrorsMap = {
    [SERVER_ERROR_TYPES.UNKNOWN]: SERVER_ERROR_MESSAGES.UNKNOWN
};

const ServersErrorMessage = ({ errors }) => {
    const serverError = errors.find(error => serverErrorsMap[error]);

    const message = serverError && serverErrorsMap[serverError];

    return <div className="server-error">{message}</div>;
};

ServersErrorMessage.propTypes = {
    errors: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ServersErrorMessage;
