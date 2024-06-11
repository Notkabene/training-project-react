import { CounterShema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUserName';

export interface StateShema {
  counter: CounterShema;
  user: UserSchema;
  loginForm?: LoginSchema;
}
