import React, { PropTypes } from 'react';
import {
  Glyphicon,
} from 'react-bootstrap';
import './FlatButton.scss';

const FlatButton = ({ icon, children, onClick }) => (
  <button className="flat-button" onClick={onClick}>
    {icon && <Glyphicon glyph={icon} />}
    {children}
  </button>
);

FlatButton.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FlatButton;
