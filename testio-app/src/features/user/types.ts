export interface IUser {
    isLoggedIn: boolean;
    token: string | null;
}

export interface ITokenAPI {
    token: string;
}