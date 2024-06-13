import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';
import { StateShema, reduxStoreWithManager } from './config/StateShema';

export {
    StoreProvider,
    createReduxStore,
    StateShema,
    reduxStoreWithManager,
    AppDispatch,
};
