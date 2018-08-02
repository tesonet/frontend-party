import React from 'react';

const defaultProps = {
  showErrors: false,
  globalError: null,
  errors: null,
  isDisabled: false,
  username: '',
  password: '',
  onSubmit: () => {},
  onChange: () => {}
};

export default function LoginView() {
  return (
    <div>
      <div>
        { this.props.showErrors && this.props.globalError }
      </div>

      <form onSubmit={ this.props.onSubmit }>
        <input
          type="text"
          value={ this.props.username }
          onChange={ this.props.onChange }
          data-testid="username"
        />

        { this.props.showErrors && this.props.errors && this.props.errors.username }

        <input
          type="password"
          value={ this.props.password }
          onChange={ this.props.onChange }
          data-testid="password"
        />

        { this.props.showErrors && this.props.errors && this.props.errors.password }

        <button type="submit" disabled={ this.props.disabled }>Submit</button>
      </form>
    </div>
  );
}

LoginView.defaultProps = defaultProps;
