import React from 'react';
import PropTypes from 'prop-types';

import { FORM_ERROR_MESSAGES, SERVER_ERROR_MESSAGES } from '../../constants/messages';
import { SERVER_ERROR_TYPES } from '../../constants/types';
import './FormErrorMessage.scss';

const serverErrorsMap = {
    [SERVER_ERROR_TYPES.UNKNOWN]: SERVER_ERROR_MESSAGES.UNKNOWN,
    [SERVER_ERROR_TYPES.INVALID_CREDENTIALS]: SERVER_ERROR_MESSAGES.INVALID_CREDENTIALS
};

const getErrorMessage = errors => {
    const serverError = errors.find(error => serverErrorsMap[error]);

    if (serverError) return serverErrorsMap[serverError];

    if (errors.includes('noUsername') && errors.includes('noPassword')) {
        return FORM_ERROR_MESSAGES.NO_CREDENTIALS;
    }

    return errors.includes('noUsername')
        ? FORM_ERROR_MESSAGES.NO_USERNAME
        : FORM_ERROR_MESSAGES.NO_PASSWORD;
};

const FormErrorMessage = ({ errors }) => {
    const message = getErrorMessage(errors);

    return <div className="form-error">{message}</div>;
};

FormErrorMessage.propTypes = {
    errors: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default FormErrorMessage;
