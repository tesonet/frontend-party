import React from 'react';
import PropTypes from 'prop-types';
import { FormControl } from 'react-bootstrap';
import { Group, Icon, Input } from './styled-components';

const InputField = ({
  className,
  input,
  placeholder,
  size,
  icon,
  type = 'text',
  meta: { error },
}) => (
  <Group bsSize={size} validationState={error ? 'error' : null}>
    {icon && <Icon $img={icon} />}
    <Input
      $icon={Boolean(icon)}
      type={type}
      className={className}
      placeholder={placeholder}
      {...input}
    />
    <FormControl.Feedback />
  </Group>
);

InputField.propTypes = {
  className: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object,
  placeholder: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.string,
  type: PropTypes.string,
};

export default InputField;
