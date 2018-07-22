import * as React from 'react';

interface IProps {
  value: string;
  placeholder: string;
  onChange: (value: string) => any;
}

class FormInput extends React.Component<IProps> {
  constructor(props: any) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  public render() {
    const { value, placeholder } = this.props;

    return (
      <div className="col-12">
        <input
          className="col-12"
          onChange={this.onChange}
          value={value}
          placeholder={placeholder}
        />
      </div>
    );
  }

  private onChange(event: any) {
    this.props.onChange(event.target.value);
  }
}

export default FormInput;
