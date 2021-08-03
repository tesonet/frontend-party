import React, { useState } from 'react';

import Items from './Items/Items';
import Expander from './Expander';
import Logo from './Logo';

const NavBar = () => {
  const [isMobileExpanded, setMobileExpanded] = useState(false);

  return (
    <nav className="flex items-center justify-between text-white flex-wrap bg-black p-6">
      <Logo />
      <Expander setIsExpanded={setMobileExpanded} isExpanded={isMobileExpanded} />
      <Items isMobileExpanded={isMobileExpanded} />
    </nav>
  );
};

export default NavBar;
