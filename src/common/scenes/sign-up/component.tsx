import Logo from 'common/assets/logo.svg';
import Input, { IconType } from 'common/components/input/component';
import * as React from 'react';
import * as styles from './styles.scss';

const SignUp: React.SFC = () => (
  <div className={styles.container}>
    <div className={styles.box}>
      <div className={styles.logoContainer}>
        <Logo />
      </div>
      <form>
        <Input type="text" placeholder="Username" icon={IconType.User} />
        <Input type="password" placeholder="Password" icon={IconType.Lock} />
        <button type="submit">Log in</button>
      </form>
    </div>
  </div>
);

export default SignUp;
