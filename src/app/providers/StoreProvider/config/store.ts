import { configureStore } from '@reduxjs/toolkit';
import { StateShema } from 'app/providers/StoreProvider/config/StateShema';
import { counterReducer } from 'entities/Counter';

export function createReduxStore(InitialState?: StateShema) {
    return configureStore<StateShema>({
        reducer: { counter: counterReducer },
        devTools: __IS_DEV__,
        preloadedState: InitialState,
    });
}
