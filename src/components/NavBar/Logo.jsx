import React from 'react';

import { useRedirect } from '../../hooks';

const Logo = () => {
  const { toMain } = useRedirect();

  return (
    <button
      onClick={toMain}
      className="cursor-pointer font-semibold text-xl tracking-tight"
    >
      TesoServers
    </button>
  );
};

export default Logo;
