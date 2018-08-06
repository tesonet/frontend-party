declare interface Window {
  __REDUX_DEVTOOLS_EXTENSION__?: () => <T>(createStore: T) => T;
}

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV?: 'development' | 'production';
    PORT?: number;
    HOST?: string;
  }
}
