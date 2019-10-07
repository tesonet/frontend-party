import * as React from 'react';

import { Button, ButtonProps } from './Button';
import { Icon, IconName } from './Icon';
import { styled } from './theme';

interface ButtonWithIconProps extends ButtonProps {
  iconName: IconName;
}

const ButtonIcon = styled(Icon)`
  margin-right: 8px;
  font-size: 20px;
`;

export const ButtonWithIcon: React.FunctionComponent<
  ButtonWithIconProps
> = props => {
  const { children, iconName } = props;

  return (
    <Button {...props}>
      <ButtonIcon name={iconName} />
      {children}
    </Button>
  );
};
