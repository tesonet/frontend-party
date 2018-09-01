import React from 'react';
import PropTypes from 'prop-types';
import {Label} from 'semantic-ui-react';    


const ErrorMessage = ({text}) => (

<Label  color='red' pointing> {text} </Label>


);

ErrorMessage.propTypes = {
    text : PropTypes.string.isRequired
}


export default ErrorMessage;   