import React from 'react';
import Input from '../styled/Input';
import Box from '../styled/Box';
import styled from 'styled-components';

const Wrapper = styled(Box)`
  position: relative;
`;

const Icon = styled.img`
  position: absolute;
  left: 25px;
  top: 20px;
  width: 14px;
`;

type InputWithIconTypes = {
  iconSrc: string;
};

export default function InputWithIcon({
  iconSrc,
  ...rest
}: InputWithIconTypes & any) {
  return (
    <Wrapper>
      <Icon src={iconSrc} alt="icon" />
      <Input {...rest} pl="54px" />
    </Wrapper>
  );
}
