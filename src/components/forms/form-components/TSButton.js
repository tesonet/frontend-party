import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

class TSButton extends React.Component {

    render() {
        const { buttonClass, color, loading, buttonText } = this.props;
        return (
            <Button
                id="tes-submit"
                disabled={!!loading}
                color={color}
                className={buttonClass}
            >
                {buttonText}
            </Button>
        );
    }
}

TSButton.propTypes = {
    loading: PropTypes.bool.isRequired,
    color: PropTypes.string.isRequired,
    buttonClass: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired
}

export default TSButton;