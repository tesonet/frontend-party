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

  onChange = (event) => {
    const { onChange } = this.props;
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
    const { type, placeholder, value, icon, invalid } = this.props;
    const state = this.state;
    const { focus } = state;
    const showIcon = icon && icon !== '' && state.value === '' && !focus;
    let className = ['input'];
    showIcon && className.push('icon');
    invalid && className.push('invalid');

    return (
      <div className={'input-wrapper'}>
        {showIcon && this.renderIcon()}
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={this.onChange}
          className={className.join(' ')}
          onFocus={() => this.toggleFocus()}
          onBlur={() => this.toggleFocus()}
        />
      </div>
    );
  }
}

export default Input;
