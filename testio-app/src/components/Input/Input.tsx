import * as React from 'react';
import 'scss/input.scss';

interface IProps {
  // google react input type;
  props: any;
  onChange: (value: string) => string;
}

class FormInput extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  public render() {
    const { props } = this.props;

    return (
      <div className="col-12 input local-padding">
        <button type="button col-1" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <input
          className="w-100 fz16 lh30 col-11"
          onChange={this.onChange}
          {...props}
        />
      </div>
    );
  }

  private onChange(event: any) {
    this.props.onChange(event.target.value);
  }
}

export default FormInput;
