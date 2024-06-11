import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateShema } from 'app/providers/StoreProvider/config/StateShema';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUserName';

export function createReduxStore(InitialState?: StateShema) {
    const rootReducer: ReducersMapObject<StateShema> = {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer,
    };

    return configureStore<StateShema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: InitialState,
    });
}
