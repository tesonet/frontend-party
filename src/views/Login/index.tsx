import * as React from 'react';
import {useState} from 'react';
import * as css from './styles/Login.scss';
import logo from './styles/assets/logo.png';
import {authService} from '../../services/authService';
import {routerHistory} from '../../store';
import {ROUTES} from '../../routes';
import {classNames} from '../../utils/utils';

enum UserFormFields {
  Username = 'username',
  Password = 'password'
}

export const Login: React.FC = () => {
  const [errorText, setErrorText] = useState<string>();

  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // We don't want to get redirected, so prevent default behavior
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const username = formData.get(UserFormFields.Username) as string;
    const password = formData.get(UserFormFields.Password) as string;

    try {
      await authService.login(username, password);
      routerHistory.push(ROUTES.SERVERS);
    } catch (e) {
      setErrorText(e.message);
    }
  };

  return (
    <div className={css['container']} >
      <img
        src={logo}
        alt='Testio logo'
        className={css['logo']}
      />
      <div className={css['error-message']}>
        {!!errorText && `Error: ${errorText}`}
      </div>
      <form
        className={css['form']}
        onSubmit={onFormSubmit}
      >
        <input
          type='text'
          required={true}
          name={UserFormFields.Username}
          placeholder='Username'
          className={classNames(
            css['form__input'],
            css['form__input--username']
          )}
        />
        <input
          type='password'
          required={true}
          name={UserFormFields.Password}
          placeholder='Password'
          className={classNames(
            css['form__input'],
            css['form__input--password']
          )}
        />
        <button
          type='submit'
          className={css['form__button']}
        >
          Log In
        </button>
      </form>
    </div>
  );
};
