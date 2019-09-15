import React from 'react';
import PropTypes from 'prop-types';

export default class Warning extends React.Component {
    constructor(props) {
        super(props);
    }
        render(){
            return (
                <div className="alert alert-warning text-center" role="alert">
                    { this.props.bodyText }
                </div>
            )
        }
    }

Warning.propTypes = {
   bodyText: PropTypes.string
}

