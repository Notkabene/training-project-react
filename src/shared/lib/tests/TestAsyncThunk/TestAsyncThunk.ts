import { StateShema } from 'app/providers/StoreProvider';
import { AsyncThunk, AsyncThunkAction } from '@reduxjs/toolkit';
import { loginByUsername } from 'features/AuthByUserName/model/services/loginByUserName/loginByUserName';

type ActionCreatorType<Return, Arg, RejectedValue>
    = (arg:Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: jest.MockedFn<any>;

    getState: () => StateShema;

    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

    constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn();
    }

    async callThank(arg:Arg) {
        const action = this.actionCreator(arg);
        const result = await action(this.dispatch, this.getState, undefined);

        return result;
    }
}
