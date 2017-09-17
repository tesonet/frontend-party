import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';
import styles from '../../styles';

export type IChangeEvent = React.ChangeEvent<HTMLInputElement>;
export interface IFormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  addon?: (focused: boolean) => React.ReactElement<any>;
}

interface IFormInputState {
  focused: boolean;
}

export interface IInputIconProps {
  focused: boolean;
  name: string;
}

export const InputIcon = (props: IInputIconProps) => (
  <FontAwesomeContainer {...props}>
    <i className={`fa fa-${props.name}`} />
  </FontAwesomeContainer>
);

export default class FormInput extends React.Component<IFormInputProps, IFormInputState> {
  state: IFormInputState = {
    focused: false,
  };

  handleFocusIn = () => {
    this.setState({ focused: true });
  }

  handleFocusOut = () => {
    this.setState({ focused: false });
  }

  render() {
    return (
      <InputContainer>
        {this.props.addon && (
          <InputAddonContainer>
            {this.props.addon(this.state.focused)}
          </InputAddonContainer>
        )}
        <Input
          {...this.props}
          withAddon={!!this.props.addon}
          onFocus={this.handleFocusIn}
          onBlur={this.handleFocusOut}
        />
      </InputContainer>
    );
  }
}

const inputPaddingVerticalFn = (plus: number = 0) => styles.spacing(4, plus);
const inputPaddingVertical = inputPaddingVerticalFn();
const inputPaddingHorizontal = styles.spacing(4);

const inputFocusedInColor = styles.colors.gray5;
const inputFocusedOutColor = styles.colors.gray3;

const InputContainer = styled.div`
  position: relative;
  margin-bottom: ${styles.spacing(3)};
  display: flex;
  width: 100%;
`;

const container: StyledFunction<IInputIconProps & React.HTMLProps<HTMLDivElement>> = styled.div;
const FontAwesomeContainer = container`
  transition: color ${styles.animation.duration.m};
  color: ${(props: IInputIconProps) =>
    props.focused
      ? inputFocusedInColor
      : inputFocusedOutColor};
`;

const InputAddonContainer = styled.div`
  align-items: center;
  bottom: 0;
  display: flex;
  flex: 1;
  justify-content: center;
  left: ${inputPaddingHorizontal};
  position: absolute;
  pointer-events: none;
  top: 0;
`;

interface IInputProps {
  withAddon: boolean;
}

const input: StyledFunction<IInputProps & React.HTMLProps<HTMLInputElement>> = styled.input;
const Input = input`
  align-items: center;
  border-radius: ${styles.borderRadius.m};
  border: 0;
  background-color: ${styles.colors.white};
  color: ${styles.colors.gray5};
  display: flex;
  padding: ${inputPaddingVertical} ${inputPaddingHorizontal};
  padding-left: ${(props: IInputProps) =>
    props.withAddon
      ? inputPaddingVerticalFn(25)
      : inputPaddingVertical};
  outline: 0;
  flex: 1 1 auto;
  font-size: ${styles.fontSize.m};
  width: 1%;
  &::placeholder {
    color: ${inputFocusedOutColor};
    transition: color ${styles.animation.duration.m};
  }
  &:focus {
    &::placeholder {
      color: ${inputFocusedInColor};
    }
  }
`;
