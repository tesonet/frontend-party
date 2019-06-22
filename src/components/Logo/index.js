// @flow
import * as React from 'react';

import LogoImage from './images/logo.png';
import LogoSmallImage from './images/logo-small.png';

type PropsT = {
    isSmall?: boolean
};

const Logo = ({
    isSmall,
}: PropsT) => (
    <img
        src={isSmall ? LogoSmallImage : LogoImage}
        alt="Logo"
    />
);

Logo.defaultProps = {
    isSmall: false,
};

export default Logo;
