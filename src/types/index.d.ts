declare interface NodeModule {
  hot: {
    accept(path?: string, fn?: () => void, callback?: () => void): void;
  };
}

declare module '*.png';
declare module '*.jpg';
