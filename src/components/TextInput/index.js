import * as React from 'react';
import { Input, InputGroupAddon, InputGroup } from 'reactstrap';

import './index.scss';
import { OptionalRender } from '../OptionalRender';
import { Icon } from '../Icon';

export class TextInput extends React.Component {
  render() {
    const { icon, ...inputProps } = this.props;

    return (
      <InputGroup className="text-input">
        <OptionalRender shouldRender={!!icon}>
          <InputGroupAddon className="text-input__addon">
            <Icon name={icon} />
          </InputGroupAddon>
        </OptionalRender>
        <Input
          {...inputProps}
          className="text-input__field"
        />
      </InputGroup>
    );
  }
}
