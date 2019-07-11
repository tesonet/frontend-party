export enum Icons {
    USER = 'USER',
    LOCK = 'LOCK',
    LOGOUT = 'LOGOUT',
}

export enum Breakpoints {
    XS = 'XS',
    SM = 'SM',
    MD = 'MD',
    LG = 'LG',
    XL = 'XL',
}

export const BREAKPOINTS = {
    [Breakpoints.XS]: '480px',
    [Breakpoints.SM]: '768px',
    [Breakpoints.MD]: '992px',
    [Breakpoints.LG]: '1200px',
    [Breakpoints.XL]: '1400px',
};

export const SERVER_ERROR_MESSAGES = {
    INVALID: "Invalid credentials... 😓 Let's give it another try!",
    UNKNOWN: '🤫 Our servers are sleeping! Try again in a few seconds.',
};

export const API_URL = 'http://playground.tesonet.lt/v1';
