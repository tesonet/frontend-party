import React from 'react';

import { useRedirect } from '../../hooks';

const NavBar = () => {
  const { toMain, toLogin } = useRedirect();

  const items = [
    {
      label: 'Main',
      action: toMain,
    },
    {
      label: 'Login',
      action: toLogin,
    },
  ];

  return (
    <nav className="flex items-center justify-between text-white flex-wrap bg-black p-6">

        {///TODO : FIX THIS}
      <span
        onClick={toMain}
        className="tabular-nums- cursor-pointer font-semibold text-xl tracking-tight"
        role="banner"
        tabIndex="0"
      >
        TesoServers
      </span>
      <div className="w-full flex flex-grow justify-end mx-3">
        {
          items.map(({ label, action }) => (
            <button
              onClick={action}
              className="mx-4"
              type="button"
            >
              {label}
            </button>
          ))
        }
      </div>
      <div className="cursor-pointer visible md:invisible">
        <AiOutlineMenu color="white" size={20} />
      </div>
    </nav>
  );
};

export default NavBar;
