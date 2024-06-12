import { DeepPartial } from '@reduxjs/toolkit';
import { StateShema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
    test('should return true', () => {
        const state:DeepPartial<StateShema> = {
            loginForm: {
                username: 'username',
            },
        };
        expect(getLoginUsername(state as StateShema)).toEqual('username');
    });

    test('should work with empty state', () => {
        const state:DeepPartial<StateShema> = {};
        expect(getLoginUsername(state as StateShema)).toEqual('');
    });
});
