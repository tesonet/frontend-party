import { ReactNode } from 'react';

export interface ILoginState {
  username: string;
  password: string;
}

export interface IClassName {
  className?: string;
}

export interface ITextInputProps extends IClassName {
  value: string;
  type: string;
  name: string;
  onChange: (value: any, name: string) => void;
  placeholder?: string;
  icon?: any;
}

export interface ILogoProps extends IClassName {
  light?: boolean;
}

export interface IIconProps extends IClassName {
  type: string;
}

export interface IAppState {
  isAuth: boolean;
}

export interface IServer {
  name: string;
  distance: number;
}

export interface IServersTableState {
  servers: IServer[];
}

export interface IRoute {
  component: ReactNode;
  exact: boolean;
  name: string;
  path: string;
  secured: boolean;
}

export interface ISortingOptions {
  array: any[];
  param?: string;
  alphabetical?: boolean;
}
