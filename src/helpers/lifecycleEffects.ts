import * as React from 'react';

export const useMountEffect = (fun: () => void) => React.useEffect(fun, []);

export const useUnmountEffect = (fun: () => void) =>
  React.useEffect(() => fun, []);
