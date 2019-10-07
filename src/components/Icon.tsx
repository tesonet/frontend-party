import * as React from 'react';

import { styled } from './theme';

interface IconTypes {
  [key: string]: string;
}

const icons: IconTypes = {
  user: 'person',
  lock: 'lock',
  close: 'close',
  exit: 'exit_to_app',
};

const mapToIcon = (name: string) => icons[name];

export type IconName = 'user' | 'lock' | 'close' | 'exit';

interface OwnProps {
  name: IconName;
  className?: string;
}

const I = styled.i`
  font-family: 'Material Icons';
`;

export const Icon: React.FunctionComponent<OwnProps> = ({
  name,
  className,
}) => {
  return <I className={`material-icons ${className}`}>{mapToIcon(name)}</I>;
};
