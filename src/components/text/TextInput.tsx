import { Optional } from '@components/Helpers/Optional';
import { Icon, IconName } from '@components/Icon';
import { Theme, styled } from '@components/theme';
import { Field, FieldConfig } from 'formik';
import * as React from 'react';

export const TextInputContainer = styled.div`
  position: relative;
`;

export const TextInputIcon = styled(Icon)`
  position: absolute;
  left: 16px;
  top: 18px;
  font-size: 22px;
  user-select: none;
  color: ${p => p.theme.colors.gray};
`;

export const StyledField = styled(Field)`
  font-family: ${p => p.theme.fonts.family};
  color: ${p => p.theme.colors.darkGray};
  display: block;
  box-sizing: border-box;
  font-size: 18px;
  height: 56px;
  width: 100%;
  border-radius: 8px;
  padding-left: 48px;
  outline: none;

  &::placeholder {
    color: ${p => p.theme.colors.gray};
  }
`;

type TextInputErrorProps = Theme & {
  hasError: boolean;
};

export const TextInputError = styled.div`
  font-family: ${(p: TextInputErrorProps) => p.theme.fonts.family};
  font-weight: ${(p: TextInputErrorProps) => p.theme.fonts.weight.semiBold};
  font-size: ${(p: TextInputErrorProps) => p.theme.fonts.sizes.small};
  visibility: ${(p: TextInputErrorProps) => (p.hasError ? '' : 'hidden')};
  color: ${(p: TextInputErrorProps) => p.theme.colors.error};
  height: 24px;
`;

type Props = FieldConfig & {
  name: string;
  type?: 'text' | 'password' | 'number';
  placeholder?: string;
  iconName?: IconName;
  error?: string;
};

export const TextInput: React.FunctionComponent<Props> = ({
  iconName,
  error,
  type = 'text',
  ...fieldProps
}) => {
  return (
    <React.Fragment>
      <TextInputContainer>
        <StyledField type={type} {...fieldProps} />

        <Optional renderIf={!!iconName}>
          <TextInputIcon name={iconName} />
        </Optional>
      </TextInputContainer>

      <TextInputError hasError={!!error}>{error}</TextInputError>
    </React.Fragment>
  );
};
