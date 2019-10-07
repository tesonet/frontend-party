type LocalStorageService = typeof localStorageService;

const localStorageService = {
  get: (key: string) => window.localStorage.getItem(key),

  add: (key: string, value: string) => window.localStorage.setItem(key, value),

  remove: (key: string) => window.localStorage.removeItem(key),
};

export { localStorageService, LocalStorageService };
