import { getProfileFirstName } from 'entities/Profile/model/selectors/getProfileFirstName/getProfileFirstName';
import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
import { profileReducer, profileActions } from './model/slice/profileSlice';
import { ProfileSchema, Profile } from './model/types/profile';
import { ProfileCard } from './ui/ProfileCard';

export {
    profileReducer,
    Profile,
    ProfileSchema,
    profileActions,
    getProfileFirstName,
    fetchProfileData,
    ProfileCard,
};
