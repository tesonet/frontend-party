export interface IAction<T> {
    type: string;
    payload?: T;
    meta?: any;
}

export const updateSimpleValue = (state: any, { payload }: any) => payload;

export const addByUid = <TState, TItem extends { uid: string }>(
    state: TState,
    { payload = [] }: IAction<TItem[]>
): TState =>
    payload.reduce(
        (result, item) => ({
            ...(result as any),
            [item.uid]: item
        }),
        state
    );

export const addUids = <TItem extends { uid: string }>(
    state: string[],
    { payload = [] }: IAction<TItem[]>
): string[] => [...state, ...payload.map(({ uid }) => uid)];