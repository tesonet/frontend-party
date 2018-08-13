import Button from 'common/components/button/component';
import Input, { IconType } from 'common/components/input/component';
import Spacer from 'common/components/spacer';
import { noop } from 'common/utils/noop';
import * as React from 'react';
import Notification from './notification';

export interface IProps {
  usernameValue: string;
  passwordValue: string;
  usernameError: string | null;
  passwordError: string | null;
  onUsernameChange?: (value: string) => any;
  onUsernameBlur?: () => any;
  onPasswordChange?: (value: string) => any;
  onPasswordBlur?: () => any;
  onSubmit?: () => any;
  isSubmitDisabled?: boolean;
}

class SignInForm extends React.Component<IProps> {
  public static defaultProps: Partial<IProps> = {
    onUsernameChange: noop,
    onPasswordChange: noop,
    onSubmit: noop,
    onPasswordBlur: noop,
    onUsernameBlur: noop,
    passwordError: null,
    usernameError: null,
    isSubmitDisabled: false
  };

  constructor(props: IProps) {
    super(props);

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public render() {
    const {
      onUsernameBlur,
      onPasswordBlur,
      passwordError,
      usernameError,
      passwordValue,
      usernameValue,
      isSubmitDisabled
    } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <Notification />
        <Input
          type="text"
          placeholder="Username"
          icon={IconType.User}
          onChange={this.handleUsernameChange}
          onBlur={onUsernameBlur}
          error={usernameError}
          value={usernameValue}
        />
        <Spacer top="1em" />
        <Input
          type="password"
          placeholder="Password"
          icon={IconType.Lock}
          onChange={this.handlePasswordChange}
          onBlur={onPasswordBlur}
          error={passwordError}
          value={passwordValue}
        />
        <Spacer top="1em" />
        <Button disabled={isSubmitDisabled}>Log in</Button>
      </form>
    );
  }

  private handleUsernameChange(e: React.ChangeEvent<HTMLInputElement>): void {
    this.props.onUsernameChange!(e.target.value);
  }

  private handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>): void {
    this.props.onPasswordChange!(e.target.value);
  }

  private handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    this.props.onSubmit!();
  }
}

export default SignInForm;
