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

export default function LoginView(props) {
  return (
    <div>
      <div>
        { props.showErrors && props.globalError }
      </div>

      <form onSubmit={ props.onSubmit }>
        <input
          type="text"
          name="username"
          value={ props.username }
          onChange={ props.onChange }
        />

        { props.showErrors && props.errors && props.errors.username }

        <input
          type="password"
          name="password"
          value={ props.password }
          onChange={ props.onChange }
        />

        { props.showErrors && props.errors && props.errors.password }

        <button type="submit" disabled={ props.disabled }>Submit</button>
      </form>
    </div>
  );
}

LoginView.defaultProps = defaultProps;
