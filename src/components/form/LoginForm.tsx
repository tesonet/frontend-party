import * as React from 'react';
import Icon from '../common/Icon';
import Logo from '../common/Logo';
import TextInput from './TextInput';
import { ILoginState } from '../../interfaces';
import history from '../../utils/history';
import { apiLogin } from '../../api/index';

class LoginForm extends React.Component<any, ILoginState> {
  private currentForm = React.createRef<any>();

  constructor(props: any) {
    super(props);

    this.state = {
      formData: null,
      values: {
        username: '',
        password: ''
      }
    };

    this.formChange = this.formChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public render() {
    const { values } = this.state;
    return (
      <form className="row form" ref={this.currentForm} onSubmit={this.handleSubmit}>
        <div className="col-10 offset-1 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4">
          <Logo className="form__logo" light={true} />
          <TextInput
            className="form__input"
            type="text"
            name="username"
            value={values.username}
            onChange={this.formChange}
            placeholder="Username"
            icon={<Icon className="form__icon" type="user"/>}
          />
          <TextInput
            className="form__input"
            type="password"
            name="password"
            value={values.password}
            onChange={this.formChange}
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

  private formChange(value: any, name: string) {
    this.setState({
      formData: new FormData(this.currentForm.current),
      values: {
        ...this.state.values,
        [name]: value
      },
    });
  }

  private async handleSubmit(e: any) {
    e.preventDefault();
    const response = await apiLogin(this.state.values);

    if (response.response) {
      alert(`Error ${response.response.status}: ${response.response.data.message}`);
    } else {
      localStorage.setItem('apitoken', response.data.token);
      history.push('/list');
    }
  }
}

export default LoginForm;
