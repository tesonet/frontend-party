export interface IField {
  value: string | null;
  isValid: boolean;
  error: string | null;
}

export interface IFields {
  username: IField;
  password: IField;
}

export enum Status {
  Idle = 'idle',
  Loading = 'loading',
  Error = 'error'
}

export interface IState {
  fields: IFields;
  status: Status;
}

export interface ISetValuePayload {
  key: keyof IFields;
  value: string | null;
}

export interface ISetIsValidPayload {
  key: keyof IFields;
  value: boolean;
}

export type SetErrorPayload = ISetValuePayload;
