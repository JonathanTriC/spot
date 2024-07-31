import {_handlerSetItem} from '@constants/functional';
import {Keys} from '@constants/keys';
import {useLoginGuestMutation} from '@features/auth';
import {setCredentials} from '@features/auth/authSlice';
import {useNavigate} from '@hooks/useNavigate';
import {useDispatch} from 'react-redux';

const useOnboarding = () => {
  const dispatch = useDispatch();
  const {navigateScreen, resetNavigate} = useNavigate();
  const [loginGuest] = useLoginGuestMutation();

  const handleGuestLogin = async () => {
    try {
      const result = await loginGuest({}).unwrap();
      dispatch(
        setCredentials({user: result.data.user, token: result.data.token}),
      );
      resetNavigate('HomeScreen');
    } catch (err) {}
  };

  const handleNavigateAs = async (role: 'user' | 'guest') => {
    await _handlerSetItem(Keys.onboarded, 'true');
    if (role === 'user') {
      navigateScreen('LoginScreen');
    } else {
      handleGuestLogin();
    }
  };

  return {handleNavigateAs};
};

export default useOnboarding;
