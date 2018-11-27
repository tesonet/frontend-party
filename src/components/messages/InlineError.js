import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

const InlineError = ({ text }) => <Alert color="danger" className="text-center">{text}</Alert>;

InlineError.propTypes = {
    text: PropTypes.string.isRequired
};

export default InlineError;
