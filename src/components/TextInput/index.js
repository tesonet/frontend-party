import * as React from 'react';
import { Input, InputGroupAddon, InputGroup } from 'reactstrap';

import './index.scss';
import { Icon } from '../Icon';

export const TextInput = props => {
  const { icon, ...inputProps } = props;
  return (
    <InputGroup className="text-input">
      <InputGroupAddon className="text-input__addon">
        <Icon name={icon} />
      </InputGroupAddon>
      <Input
        {...inputProps}
        className="text-input__field"
      />
    </InputGroup>
  );
}
