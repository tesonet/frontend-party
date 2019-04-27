// react and react dependencies
import * as React from 'react';

const icoUsername = require("../svg/ico-username.svg") as string;
const icoLock = require("../svg/ico-lock.svg") as string;

class LoginForm extends React.Component {
  render() {
    return (
      <form className="form">
        <div className="form__row">
          <input type="text" value="username" placeholder="Username" className="form__input" />
          <img src={icoUsername} className="form__ico form__ico--username" alt=""/>
        </div>
        <div className="form__row">
          <input type="password" value="password" placeholder="Password" className="form__input" />
          <img src={icoLock} className="form__ico form__ico--lock" alt=""/>
        </div>
        <button type="submit" className="form__submit">Log In</button>
      </form>
    )
  }
}

export default LoginForm;
