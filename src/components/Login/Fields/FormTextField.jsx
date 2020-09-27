import React, {
    Fragment, useRef, memo,
} from 'react';
import { Overlay, Tooltip } from 'react-bootstrap';
import { fieldPropTypes } from 'redux-form';
import PropTypes from 'prop-types';

const FormTextField = ({
    input, label, meta: { touched, error }, type,
}) => {
    const inputRef = useRef(null);

    return (
        <Fragment>
            <input
                {...input}
                placeholder={label}
                type={type}
                className="text-input"
                ref={inputRef}
                autoComplete="on"
            />
            <Overlay target={inputRef.current} show={error && touched} placement="left">
                {(tooltipProps) => (
                    <Tooltip id="button-tooltip" {...tooltipProps}>
                        {error}
                    </Tooltip>
                )}
            </Overlay>
        </Fragment>
    );
};

FormTextField.defaultProps = {
    type: 'text',
};

FormTextField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    ...fieldPropTypes,
};

export default memo(FormTextField);
