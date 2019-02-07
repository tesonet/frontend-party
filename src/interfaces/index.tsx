import { ReactNode, HTMLProps } from 'react';

export interface ILoginState {
  username: string;
  password: string;
}

export interface ITextInputProps extends HTMLProps<HTMLInputElement> {
  onChanged: (value: any, name: string) => void;
  icon?: any;
}

export interface ILogoProps extends HTMLProps<HTMLElement> {
  light?: boolean;
}

export interface IIconProps extends HTMLProps<HTMLElement> {
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
