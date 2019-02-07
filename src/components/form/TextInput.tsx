import * as React from 'react';
import { ITextInputProps } from '../../interfaces';

class TextInput extends React.Component<ITextInputProps> {
  private TextInput = React.createRef<any>();

  constructor(props: ITextInputProps) {
    super(props);
    this.passValues = this.passValues.bind(this);
  }

  public render() {
    const { value, name, type, icon, placeholder, className } = this.props;
    return (
      <div className={`form-group ${className}`}>
        { icon ? icon : ''}
        <input
          ref={this.TextInput}
          className="form-control"
          name={name}
          type={type}
          value={value}placeholder={placeholder ? placeholder : ''}
          onChange={this.passValues}
        />
      </div>
    );
  }

  private passValues() {
    this.props.onChanged(this.TextInput.current.value, this.props.name);
  }
}

export default TextInput;
