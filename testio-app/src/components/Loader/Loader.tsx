import * as React from 'react';
import ReactLoading from 'react-loading';

export enum LOADER_SIZE {
  SMALL = 25,
  MEDIUM = 50
}

export enum LOADER_COLOR {
  BLACK = '#000000',
  WHITE = '#ffffff'
}

interface IProps {
  size: LOADER_SIZE;
  color: LOADER_COLOR;
}

const Loader: React.SFC<IProps> = ({ size, color }) => (
  <ReactLoading type={'spin'} color={color} height={size} width={size} />
);

export default Loader;
