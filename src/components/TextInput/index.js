import * as React from 'react';
import { Input, InputGroupAddon, InputGroup } from 'reactstrap';

import './index.scss';
import { Icon } from '../Icon';

export class TextInput extends React.Component {
  render() {
    const { icon, ...inputProps } = this.props;

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
}
