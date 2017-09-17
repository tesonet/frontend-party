import * as React from 'react';
import en_US from '../../locates/en-US';
import styled, { StyledComponentClass, ThemeProviderProps } from 'styled-components';
import Alert from '../Alert';
import Form from '../form/Form';
import FormButton from '../form/FormButton';
import FormInput, {
  InputIcon,
  IChangeEvent,
  IFormInputProps,
} from '../form/FormInput';

export interface ILoginRouteFormSubmitData {
  username: string;
  password: string;
}

interface ILoginRouteFormProps {
  disabled: boolean;
  error: boolean;
  onSubmit: (state: ILoginRouteFormSubmitData) => any;
}

interface ILoginRouteFormState {
  username: string;
  password: string;
}

export default class LoginRouteForm extends React.Component<ILoginRouteFormProps, ILoginRouteFormState> {
  state: ILoginRouteFormState = {
    password: '',
    username: '',
  };

  handleUsernameChange = (
    event: IChangeEvent,
  ) => {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange = (
    event: IChangeEvent,
  ) => {
    this.setState({ password: event.target.value });
  }

  handleFormSubmit = (
    event: React.SyntheticEvent<any>,
  ) => {
    event.preventDefault();
    this.props.onSubmit({
      password: this.state.password,
      username: this.state.username,
    });
  }

  renderInputs = () => (
    <div>
      <SFormInput
        addon={(focused) => <InputIcon name='user' focused={focused} />}
        placeholder={en_US.username}
        required
        onChange={this.handleUsernameChange}
        type='text'
        value={this.state.username}
      />
      <SFormInput
        addon={(focused) => <InputIcon name='lock' focused={focused} />}
        placeholder={en_US.password}
        required
        onChange={this.handlePasswordChange}
        type='password'
        value={this.state.password}
      />
    </div>
  )

  renderErrorAlert = () => (
    this.props.error ? (
      <Alert center>
        {en_US.logInError}
      </Alert>
    ) : (
      <div />
    )
  )

  renderSubmit = () => (
    <FormButton disabled={this.props.disabled}>
      {en_US.logIn}
    </FormButton>
  )

  render() {
    return (
      <Form onSubmit={this.handleFormSubmit}>
        {this.renderInputs()}
        {this.renderErrorAlert()}
        {this.renderSubmit()}
      </Form>
    );
  }
}

type SFromInputProps = ThemeProviderProps<any> & IFormInputProps;
const SFormInput: StyledComponentClass<SFromInputProps, any> = styled(FormInput)`
  border: 0;
`;
