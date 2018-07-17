export type LocalStorageMiddleware = (eventMap: IEventMap) => any;

interface IEventMap {
    [action: string]: (state: any, payload: any) => void;
}

export const createLocalStorageMiddleware: LocalStorageMiddleware = (eventMap) => {
    return (store: any) => (next: any) => (action: any) => {
        const result = next(action);
        const options = eventMap[action.type];

        if (options === undefined) {
            return result;
        }

        options(action, store.getState());
    };
};
