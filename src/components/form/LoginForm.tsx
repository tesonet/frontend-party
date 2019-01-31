import * as React from 'react';
import Icon from '../common/Icon';
import Logo from '../common/Logo';
import TextInput from './TextInput';

class LoginForm extends React.Component {
  username: string;
  password: string;

  constructor(props: any) {
    super(props);

    this.username = '';
    this.password = '';
  }

  public render() {
    return (
      <form className="row form">
        <div className="col-10 offset-1 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4">
          <Logo className="form__logo" light={true} />
          <TextInput
            className="form__input"
            type="text"
            value={this.username}
            placeholder="Username"
            icon={<Icon className="form__icon" type="user"/>}
          />
          <TextInput
            className="form__input"
            type="password"
            value={this.password}
            placeholder="Password"
            icon={<Icon className="form__icon" type="lock"/>}
          />
          <div className="form__submit">
            <button className="btn btn-primary btn-block" type="submit">Log In</button>
          </div>
        </div>
      </form>
    );
  }
}

export default LoginForm;
