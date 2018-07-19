interface IAction<T> {
    type: string;
    payload?: T;
    meta?: any;
}
