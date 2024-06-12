import { Story } from '@storybook/react';
import { StateShema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateShema>> = {
    loginForm: loginReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateShema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateShema>>,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
