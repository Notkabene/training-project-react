import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { profileReducer, profileActions } from './model/slice/profileSlice';
import { ProfileSchema, Profile } from './model/types/profile';

export {
    profileReducer,
    Profile,
    ProfileSchema,
    profileActions,
    getUserAuthData,
};
