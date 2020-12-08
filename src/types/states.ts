import { Server } from './common';
import { ErrorMessage } from './error';

export interface AuthState {
    loading: boolean,
    error: ErrorMessage | null,
    authenticated: boolean
}

export interface InventoryState {
    loading: boolean,
    error: ErrorMessage | null,
    servers: Server[],
    expirationTimestamp: number
}

export interface ModalState {
    confirmLogout: boolean,
    // More in the future
}


// All the items of the Redux store
export interface GlobalReduxState {
    authReducer: AuthState,
    inventoryReducer: InventoryState,
    modalReducer: ModalState,
    // .. to be continued ..
}