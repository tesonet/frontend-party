import storage from 'redux-persist/lib/storage'; // defaults to localStorage
import authReducer from './auth.reducer';
import inventoryReducer from './inventory.reducer';
import modalReducer from './modal.reducer';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

// Loading state in auth and inventory will not be persisted as it may cause UI issues while reloading page upon errors

const authPersistConfig = {
    key: 'authReducer',
    storage: storage,
    blacklist: ['loading']
}

const inventoryPersistConfig = {
    key: 'inventoryReducer',
    storage: storage,
    blacklist: ['loading']
}

const rootReducer = combineReducers({
    authReducer: persistReducer(authPersistConfig, authReducer),
    inventoryReducer: persistReducer(inventoryPersistConfig, inventoryReducer),
    modalReducer: modalReducer,
});

export default rootReducer;