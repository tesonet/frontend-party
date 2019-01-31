import * as React from 'react';

interface ITextInputProps {
  value: string;
  type: string;
  className?: string;
  placeholder?: string;
  icon?: any;
}

class TextInput extends React.Component<ITextInputProps> {
  public render() {
    const { value, type, icon, placeholder, className } = this.props;
    return (
      <div className={`form-group ${className}`}>
        { icon ? icon : ''}
        <input className="form-control" type={type} value={value} placeholder={placeholder ? placeholder : ''}/>
      </div>
    );
  }
}

export default TextInput;
