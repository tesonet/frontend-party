import React, {
    Fragment, useRef, useEffect, memo,
} from 'react';
import ReactTooltip from 'react-tooltip';
import { fieldPropTypes } from 'redux-form';
import PropTypes from 'prop-types';

const FormTextField = ({
    input, label, meta: { touched, error }, type,
}) => {
    const inputRef = useRef(null);
    const errorRef = useRef(null);

    useEffect(() => {
        errorRef.current = error;
        if (touched && error) {
            ReactTooltip.show(inputRef.current);
        } else {
            ReactTooltip.hide(inputRef.current);
        }
    });

    return (
        <Fragment>
            <input
                {...input}
                placeholder={label}
                type={type}
                className="text-input"
                data-tip={errorRef.current}
                ref={inputRef}
                data-event="no-event"
                data-for={label}
                autoComplete="on"
            />
            <ReactTooltip
                effect="solid"
                place="left"
                id={label}
                offset={{ left: 4 }}
            />
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
