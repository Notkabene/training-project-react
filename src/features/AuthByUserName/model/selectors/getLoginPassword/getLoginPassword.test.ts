import { DeepPartial } from '@reduxjs/toolkit';
import { StateShema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.test', () => {
    test('should return true', () => {
        const state:DeepPartial<StateShema> = {
            loginForm: {
                password: '123',
            },
        };
        expect(getLoginPassword(state as StateShema)).toEqual('123');
    });

    test('should work with empty state', () => {
        const state:DeepPartial<StateShema> = {};
        expect(getLoginPassword(state as StateShema)).toEqual('');
    });
});
