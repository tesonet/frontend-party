import * as React from 'react';
import { Input, InputGroupAddon, InputGroup } from 'reactstrap';
import './index.scss';
import classnames from 'classnames';
import {OptionalRender} from '../OptionalRender'

export class TextInput extends React.Component {

  render() {
    const {icon, ...inputProps} = this.props;

    const addonClass = classnames({
      "text-input__addon": true,
      "text-input--active": false
    })
    
    return (
      <InputGroup className="text-input">
        <OptionalRender shouldRender={!!icon}>
          <InputGroupAddon className={addonClass}>
            <i className={`fa fa-${icon}`}></i>
          </InputGroupAddon>
        </OptionalRender>
        <Input 
          {...inputProps}
          className="text-input__field" />
      </InputGroup>
    );
  }
}
