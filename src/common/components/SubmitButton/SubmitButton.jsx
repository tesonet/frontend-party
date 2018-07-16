import React from 'react'
import './SubmitButton.scss';

const SubmitButton = ({ children }) => (
    <button type="submit" className="SubmitButton btn">{ children }</button>
);

export default SubmitButton;
