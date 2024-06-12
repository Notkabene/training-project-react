import { DeepPartial } from '@reduxjs/toolkit';
import { StateShema } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading.test', () => {
    test('should return true', () => {
        const state:DeepPartial<StateShema> = {
            loginForm: {
                isLoading: true,
            },
        };
        expect(getLoginIsLoading(state as StateShema)).toEqual(true);
    });

    test('should work with empty state', () => {
        const state:DeepPartial<StateShema> = {};
        expect(getLoginIsLoading(state as StateShema)).toEqual(false);
    });
});
