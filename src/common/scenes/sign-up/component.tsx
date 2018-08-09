import Input from 'common/components/input';
import * as React from 'react';
import * as styles from './styles.scss';

const SignUp: React.SFC = () => (
  <div className={styles.container}>
    <div className={styles.box}>
      <form>
        <Input type="text" placeholder="Username" />
        <Input type="text" placeholder="Password" />
        <button type="submit" />
      </form>
    </div>
  </div>
);

export default SignUp;
