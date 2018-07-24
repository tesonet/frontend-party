import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as classnames from 'classnames';
import * as React from 'react';
import 'scss/input.scss';

interface IProps {
  props?: any;
  icon: IconProp;
  hasError: boolean;
  onChange: (value: string) => string;
}

class FormInput extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  public render() {
    const { props, icon, hasError } = this.props;

    return (
      <div
        className={classnames('col-12 input local-padding d-flex', {
          error: hasError
        })}
      >
        <div className="button col-1 d-flex justify-content-center align-items-center flex-wrap">
          <FontAwesomeIcon icon={icon} color={'#b3b3b3'} size={'sm'} />
        </div>
        <input
          className="fz16 lh30 col-11"
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
