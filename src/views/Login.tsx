import * as React from 'react';

class Login extends React.Component {
  login: string;
  password: string;

  constructor(props: any) {
    super(props);

    this.login = '';
    this.password = '';
  }

  public render() {
    return (
      <div>
        Login
      </div>
    );
  }
}

export default Login;
