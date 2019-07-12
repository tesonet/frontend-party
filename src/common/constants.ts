export enum Icons {
    USER = 'USER',
    LOCK = 'LOCK',
    LOGOUT = 'LOGOUT',
}

export enum Sizes {
    XS = 'XS',
    SM = 'SM',
    MD = 'MD',
    LG = 'LG',
    XL = 'XL',
}

export const BREAKPOINTS = {
    [Sizes.XS]: '576px',
    [Sizes.SM]: '576px',
    [Sizes.MD]: '768px',
    [Sizes.LG]: '992px',
    [Sizes.XL]: '1200px',
};

export const SERVER_ERROR_MESSAGES = {
    INVALID: "Invalid credentials... 😓 Let's give it another try!",
    UNKNOWN: '🤫 Our servers are sleeping! Try again in a few seconds.',
};

export const API_URL = 'http://playground.tesonet.lt/v1';
