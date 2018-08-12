import Logo from 'common/assets/logo.svg';
import SignInForm from 'common/components/sign-in-form';
import * as React from 'react';
import * as styles from './styles.scss';

const SignIn: React.SFC = () => (
  <div className={styles.container}>
    <div className={styles.box}>
      <div className={styles.logoContainer}>
        <Logo />
      </div>
      <SignInForm />
    </div>
  </div>
);

export default SignIn;
