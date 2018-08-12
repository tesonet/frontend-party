export enum Status {
  Idle = 'idle',
  Loading = 'loading',
  Error = 'error'
}

export interface IState {
  isAuthenticated: boolean;
  status: Status;
}
