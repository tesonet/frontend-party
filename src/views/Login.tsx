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
      <div className="login">
        <div className="login__wrap">
          <div className="container">
            <form className="row form">
              <div className="col-10 offset-1 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                <div className="form__logo logo logo--light"></div>
                <div className="from__input form-group">
                  <div className="form__icon"></div>
                  <input className="form-control" type="text" value={this.login}/>
                </div>
                <div className="from__input form-group">
                  <div className="form__icon"></div>
                  <input className="form-control" type="password" value={this.password}/>
                </div>
                <div className="form__submit">
                  <button className="btn btn-primary btn-block" type="submit">Log In</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
