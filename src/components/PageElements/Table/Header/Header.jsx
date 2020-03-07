import React from 'react';

import { BodyText } from 'components/Typography';

import { HeaderWrapper } from './atoms';

const defaultProps = {
  items: []
};

const Header = ({ items }) => {
  return (
    <HeaderWrapper p={20}>
      {items.map(item => (
        <div key={item.key} onClick={() => alert(item.key)}>
          <BodyText color='darkGrey'>{item.name}</BodyText>
        </div>
      ))}
    </HeaderWrapper>
  );
};

Header.defaultProps = defaultProps;

export default Header;
