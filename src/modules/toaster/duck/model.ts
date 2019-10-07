import { GetActionTypes } from '@redux/createAction';

import { toasterManagerActions } from './actions';

export enum ToasterType {
  Success = 'success',
  Warning = 'warning',
  Error = 'error',
  Info = 'info',
}

export interface ToasterOptions {
  ttl?: number;
  autoClose?: boolean;
}

export interface Toaster {
  id?: string;
  text: React.ReactNode;
  title?: string;
  toasterType?: ToasterType;
  options?: ToasterOptions;
}

export interface ToasterManagerState {
  toasters: Toaster[];
}

type Required<T> = {
  [P in keyof T]-?: T[P];
};

export type State = Required<{ toasterManager: ToasterManagerState }>;

export type ToasterAction = GetActionTypes<typeof toasterManagerActions>;
export type ToastrActions = typeof toasterManagerActions;
export type GetToastrActions<
  T extends keyof typeof toasterManagerActions
> = ReturnType<typeof toasterManagerActions[T]>;
