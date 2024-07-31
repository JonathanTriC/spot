import {_handlerGetItem} from '@constants/functional';
import {Keys} from '@constants/keys';
import {setCredentials} from '@features/auth/authSlice';
import {useGetUserProfileQuery} from '@features/user';
import {useNavigate} from '@hooks/useNavigate';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

const useSplashScreen = () => {
  const dispatch = useDispatch();
  const {resetNavigate} = useNavigate();

  const checkAuthStatus = async () => {
    try {
      const token = await _handlerGetItem(Keys.token);

      if (token) {
        dispatch(setCredentials({user: null, token}));

        resetNavigate('HomeScreen');
      } else {
        resetNavigate('LoginScreen');
      }
    } catch (error) {
      console.error('Error fetching user profile or token:', error);
      resetNavigate('LoginScreen');
    }
  };

  const handleNavigationAfterSplash = () => {
    const boot = async () => {
      return await _handlerGetItem(Keys.onboarded);
    };

    const timeout = setTimeout(() => {
      boot()
        .then(async val => {
          if (val) {
            // Mark: Checking if user is logged in
            checkAuthStatus();
          } else {
            // Mark: Navigate to Onboarding Screen
            resetNavigate('OnboardingScreen');
          }
        })
        .catch(error => {
          console.error('Error during boot check:', error);
          resetNavigate('LoginScreen');
        });
    }, 3000);

    return () => clearTimeout(timeout);
  };

  useEffect(() => {
    handleNavigationAfterSplash();
  }, []);

  return {};
};

export {useSplashScreen};
