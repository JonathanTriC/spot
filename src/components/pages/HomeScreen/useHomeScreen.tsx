import {_handlerClearItem, _handlerRemoveItem} from '@constants/functional';
import {clearCredentials, setCredentials} from '@features/auth/authSlice';
import {useGetUserProfileQuery} from '@features/user';
import {useNavigate} from '@hooks/useNavigate';
import {RootState} from '@store/store';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const useHomeScreen = () => {
  const dispatch = useDispatch();
  const {resetNavigate} = useNavigate();
  const {user, token, isAuthenticated} = useSelector(
    (state: RootState) => state.auth,
  );
  const {data: userProfile} = useGetUserProfileQuery({});

  const logout = async () => {
    dispatch(clearCredentials());
    await _handlerClearItem();
    resetNavigate('OnboardingScreen');
  };

  useEffect(() => {
    if (!user) {
      dispatch(setCredentials({user: userProfile?.data, token: token ?? ''}));
    }
  }, [user, userProfile]);

  return {
    user,
    token,
    logout,
  };
};

export default useHomeScreen;
