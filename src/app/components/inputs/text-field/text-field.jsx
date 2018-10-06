import * as React from 'react';
import PropTypes from 'prop-types';
import {
    InputGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    FormGroup,
    Label,
    FormFeedback,
} from 'reactstrap';
import { fieldPropTypes } from 'redux-form';

const TextField = (props) => {
    const {
        input,
        meta,
        placeholder,
        label,
        addon: Addon,
        type,
        disabled,
        name,
    } = props;

    const hasError = !!(meta.touched && meta.error);

    return (
        <FormGroup>
            { label && <Label for={ name }>{ label }</Label> }
            <InputGroup>
                { !!Addon && (
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                            <Addon />
                        </InputGroupText>
                    </InputGroupAddon>
                ) }
                <Input
                    { ...input }
                    id={ name }
                    type={ type }
                    placeholder={ placeholder }
                    disabled={ disabled }
                    invalid={ hasError }
                />
                { hasError && <FormFeedback>{ meta.error }</FormFeedback> }
            </InputGroup>
        </FormGroup>
    );
};

TextField.propTypes = {
    ...fieldPropTypes,
    placeholder: PropTypes.string,
    addon: PropTypes.func,
    type: PropTypes.oneOf(['text', 'password', 'number']),
    disabled: PropTypes.bool,
};

TextField.defaultProps = {
    addon: undefined,
    placeholder: undefined,
    type: 'text',
    disabled: false,
};

export default TextField;
