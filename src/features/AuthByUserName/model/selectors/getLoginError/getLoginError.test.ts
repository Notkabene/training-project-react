import { DeepPartial } from '@reduxjs/toolkit';
import { StateShema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError.test', () => {
    test('should return an error', () => {
        const state:DeepPartial<StateShema> = {
            loginForm: {
                error: 'error',
            },
        };
        expect(getLoginError(state as StateShema)).toEqual('error');
    });

    test('should work with empty state', () => {
        const state:DeepPartial<StateShema> = {};
        expect(getLoginError(state as StateShema)).toEqual(undefined);
    });
});
