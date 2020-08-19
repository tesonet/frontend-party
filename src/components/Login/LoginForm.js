import React from "react";
import { useDispatch } from 'react-redux'
import { useForm } from "react-hook-form";
import LoginError from './LoginError';
import { loginToTestio } from '../../actions';

const LoginForm = () => {
  const { handleSubmit, register, errors } = useForm();
  const dispatch = useDispatch();
  const onSubmit = values => dispatch(loginToTestio(values));

  const isLogedIn = localStorage.getItem("myTokenLocal");

  if(isLogedIn){
    dispatch(loginToTestio(isLogedIn, true));
  }

  return(
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form__row">
        <input
          name="username"
          placeholder="Username"
          type="text"
          className="form__input form__input--username"
          ref={register({
            required: "Required",
            validate: value => value === "tesonet" || "Ussername is incorrect"
          })}
        />
        {errors.username && <LoginError errors={errors.username.message} />}
      </div>

      <div className="form__row">
        <input
          name="password"
          placeholder="Password"
          type="password"
          className="form__input form__input--password"
          ref={register({
            required: "Required",
            validate: value => value === "partyanimal" || "Password is incorrect"
          })}
        />
        {errors.password && <LoginError errors={errors.password.message} />}
      </div>

      <button type="submit" className="form__btn">Log In</button>
    </form>
  );
}

export default LoginForm;
