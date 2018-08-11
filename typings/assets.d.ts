declare module '*.scss';

declare module '*.svg' {
  import * as React from 'react';

  const Icon: React.SFC<React.SVGAttributes<any>>;

  export default Icon;
}

declare module '*.png';
