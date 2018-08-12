import Logo from 'common/assets/logo.svg';
import SignInForm from 'common/components/sign-in-form';
import { noop } from 'common/utils/noop';
import * as React from 'react';
import * as styles from './styles.scss';

interface IProps {
  onDidMount?: () => any;
}

class SignIn extends React.Component<IProps> {
  public static defaultProps: Partial<IProps> = { onDidMount: noop };

  public componentDidMount() {
    this.props.onDidMount!();
  }
  public render() {
    return (
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.logoContainer}>
            <Logo />
          </div>
          <SignInForm />
        </div>
      </div>
    );
  }
}

export default SignIn;
