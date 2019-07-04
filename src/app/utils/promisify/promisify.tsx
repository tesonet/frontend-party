export function promisify<T>(executor: (resolve: (value?: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void, timeout: number) {
  return new Promise<T>((resolve, reject) => setTimeout(() => executor(resolve, reject), timeout));
}
