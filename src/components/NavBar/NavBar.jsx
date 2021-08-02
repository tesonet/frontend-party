import React from 'react';

import { useRedirect } from '../../hooks';
import Items from './Items';

const NavBar = () => {
  const { toMain } = useRedirect();

  return (
    <nav className="flex items-center justify-between text-white flex-wrap bg-black p-6">
      <span
        onClick={toMain}
        className="tabular-nums- cursor-pointer font-semibold text-xl tracking-tight"
      >
        TesoServers
      </span>
      <div className="w-full flex flex-grow justify-end mx-3">
        <Items />
      </div>
      <div className="cursor-pointer visible md:invisible">
        {/* <AiOutlineMenu color="white" size={20} /> */}
      </div>
    </nav>
  );
};

export default NavBar;
