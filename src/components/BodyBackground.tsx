import * as React from 'react';

import { createGlobalStyle } from './theme';

interface Props {
  background: string;
}

const Background = createGlobalStyle<Props>`
  body {
    background: url(${p => p.background}) no-repeat center center fixed;
    background-size: cover;
    overflow: hidden;
  }
`;

const BodyBackground: React.FunctionComponent<Props> = ({ background }) => {
  return <Background background={background} />;
};

export { BodyBackground };
