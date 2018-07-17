import React from 'react'
import PropTypes from 'prop-types';
import './SubmitButton.scss';

const propTypes = {
    children: PropTypes.string.isRequired,
};

const SubmitButton = ({ children }) => (
    <button type="submit" className="SubmitButton btn">{ children }</button>
);

SubmitButton.propTypes = propTypes;

export default SubmitButton;
