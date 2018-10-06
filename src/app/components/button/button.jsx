import React from 'react';
import PropTypes from 'prop-types';
import { Button as ButtonStrapButton } from 'reactstrap';

const Button = (props) => {
    const {
        title,
        onClick,
        type,
        color,
        disabled,
        size,
        block,
    } = props;

    return (
        <ButtonStrapButton
            type={ type }
            onClick={ onClick }
            color={ color }
            disabled={ disabled }
            size={ size }
            block={ block }
        >
            { title }
        </ButtonStrapButton>
    );
};

Button.propTypes = {
    type: PropTypes.oneOf(['button', 'submit']),
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    color: PropTypes.oneOf(['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'link']),
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    block: PropTypes.bool,
};

Button.defaultProps = {
    type: 'button',
    color: 'primary',
    onClick: undefined,
    disabled: false,
    size: 'md',
    block: false,
};

export default Button;
