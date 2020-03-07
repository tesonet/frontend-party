import React from 'react';

import { HeaderWrapper } from './atoms';

const defaultProps = {
  items: []
};

const Header = ({ items }) => {
  return (
    <HeaderWrapper>
      {items.map(item => (
        <div key={item.key} onClick={() => alert(item.key)}>
          {item.name}
        </div>
      ))}
    </HeaderWrapper>
  );
};

Header.defaultProps = defaultProps;

export default Header;
