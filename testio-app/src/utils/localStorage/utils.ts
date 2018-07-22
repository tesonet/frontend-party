type GetLocalStorageData = (key: string) => any;
type SetLocalStorageData = <T>(key: string, data: T) => void;
type RemoveLocalStorageData = (key: string) => void;

export const getLocalStorageData: GetLocalStorageData = key => {
  try {
    const serializedState = localStorage.getItem(key);

    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const setLocalStorageData: SetLocalStorageData = (key, data) => {
  const serializedState = JSON.stringify(data);
  localStorage.setItem(key, serializedState);
};

export const clearLocalStorageData: RemoveLocalStorageData = (key: string) =>
  localStorage.removeItem(key);
