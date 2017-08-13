import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputStyle } from './style';

class Input extends Component {
  static propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    icon: PropTypes.string,
    onChange: PropTypes.func
  };

  static defaultProps = {
    type: 'text',
    placeholder: '',
    icon: '',
    onChange: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      focus: false
    }
  }

  onChange(event) {
    const { onChange, type } = this.props;
    const { value } = event.target;

    onChange(value);
    this.setState({ value });
  }

  toggleFocus() {
    const { focus } = this.state;
    this.setState({ focus: !focus });
  }

  renderIcon() {
    const { icon } = this.props;

    return (
      <i className={`fa fa-${icon}`}></i>
    );
  }

  render() {
    const { type, placeholder, value, icon } = this.props;
    const state = this.state;
    const { focus } = state;
    const showIcon = icon && icon !== '' && state.value === '' && !focus;

    return (
      <div className={'input-wrapper'}>
        {showIcon && this.renderIcon()}
        <input
          type={type}
          value={value || state.value}
          placeholder={placeholder}
          onChange={(val) => this.onChange(val)}
          className={`input icon-${showIcon}`}
          onFocus={() => this.toggleFocus()}
          onBlur={() => this.toggleFocus()}
        />
      </div>
    );
  }
}

export default Input;
