import { CounterShema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { ProfileSchema } from 'entities/Profile';
import { LoginSchema } from 'features/AuthByUserName';
import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';

export interface StateShema {
  counter: CounterShema;
  user: UserSchema;

  // Асинхронные редюсеры
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
}

export type StateSchemaKey = keyof StateShema;

export interface ReducerManager {
  getReducerMap: ()=> ReducersMapObject<StateShema>;
  reduce: (state:StateShema, action:AnyAction) => CombinedState<StateShema>;
  add: (key: StateSchemaKey, reducer:Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface reduxStoreWithManager extends EnhancedStore<StateShema> {
  reducerManager:ReducerManager
}
