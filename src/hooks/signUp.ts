import {
  loginLoadingSelector,
  loginDataSelector,
  userProfileSelector,
  loginFailSelector,
} from '@redux/reqres/selectors';
import { UserLoginSuccess, UserProfileSuccess } from '@redux/reqres/types';
import { useSelector } from 'react-redux';

type SignUpHook = {
  data: UserLoginSuccess;
  loading: boolean;
  loginFail: boolean;
  userProfile: UserProfileSuccess | undefined;
};

export const useSignUp = (): SignUpHook => {
  const data = useSelector(loginDataSelector);
  const loading = useSelector(loginLoadingSelector);
  const loginFail = useSelector(loginFailSelector);
  const userProfile = useSelector(userProfileSelector);
  return {
    data,
    loading,
    loginFail,
    userProfile,
  };
};
