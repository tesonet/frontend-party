export type ActionCreator<T extends string> = (...args: any[]) => { type: T };
export type ActionCreatorMap<T> = { [K in keyof T]: ActionType<T[K]> };

export type ActionType<ActionCreatorOrMap> = ActionCreatorOrMap extends ActionCreator<string>
    ? ReturnType<ActionCreatorOrMap>
    : ActionCreatorOrMap extends object
    ? ActionCreatorMap<ActionCreatorOrMap>[keyof ActionCreatorOrMap]
    : never;

type EmptyAction<T extends string> = { type: T };
type PayloadAction<T extends string, P> = { type: T, payload: P };

export function action<T extends string>(type: T): EmptyAction<T>;
export function action<T extends string, P = undefined>(type: T, payload: P): PayloadAction<T, P>;
export function action<T extends string, P = undefined>(type: T, payload?: P) {
    return { type, payload } as any;
}
