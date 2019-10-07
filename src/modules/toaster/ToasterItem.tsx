import { Optional } from '@components/Helpers/Optional';
import { Icon } from '@components/Icon';
import { Theme, keyframes, styled } from '@components/theme';
import * as React from 'react';
import { StyledComponent } from 'styled-components';

import { Toaster, ToasterType } from './duck/model';

type ToasterContainerProps = Theme & {
  toasterType?: ToasterType;
};

const getColor = ({ toasterType, theme }: ToasterContainerProps) => {
  const { colors } = theme;

  return {
    text: colors[toasterType],
    icon: colors[`${toasterType}Light`],
    bg: colors[`${toasterType}Bg`],
    border: colors[`${toasterType}Border`],
  };
};

const CloseIcon = styled(Icon)`
  font-size: 18px;
`;

const CloseContainer = styled.div`
  justify-content: center;
  display: flex;
  align-content: center;
  cursor: pointer;
`;

const Body = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  align-items: center;
`;

const Content = styled.div`
  flex-grow: 1;
  padding-right: 16px;
`;

const slideIn = keyframes`
  from {
    transform: translate3d(100%, 0, 0);
    opacity: 0;
  }

  60% {
    opacity: 1;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;

const ToasterContainer = styled.div`
  max-width: 500px;
  ${p => p.theme.media.sm.andUp} {
    min-width: 500px;
  }
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid ${p => getColor(p).border};
  color: ${p => getColor(p).text};
  background-color: ${p => getColor(p).bg};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  min-height: 48px;

  ${CloseIcon} {
    color: ${p => getColor(p).icon};

    &:hover {
      color: ${p => getColor(p).text};
    }
  }

  animation-name: ${slideIn};
  animation-duration: 1s;
  animation-timing-function: ease-out;
  transition: all 0.5s ease-out;

  & + & {
    margin-top: 16px;
  }
` as StyledComponent<'div', {}, ToasterContainerProps>;

type ToasterItemProps = Toaster & { onClose?: () => void; className?: string };

export const ToasterItem: React.FunctionComponent<ToasterItemProps> = ({
  text,
  toasterType = ToasterType.Success,
  onClose,
  className,
}) => (
  <ToasterContainer className={className} toasterType={toasterType}>
    <Body>
      <Content>{text}</Content>
      <Optional renderIf={!!onClose}>
        <CloseContainer onClick={onClose}>
          <CloseIcon name="close" />
        </CloseContainer>
      </Optional>
    </Body>
  </ToasterContainer>
);
