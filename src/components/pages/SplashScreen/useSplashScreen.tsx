import {_handlerGetItem} from '@constants/functional';
import {Keys} from '@constants/keys';
import {useNavigate} from '@hooks/useNavigate';
import {useEffect} from 'react';

const useSplashScreen = () => {
  const {resetNavigate} = useNavigate();
  const handleNavigationAfterSplash = () => {
    const boot = async () => {
      return await _handlerGetItem(Keys.onboarded);
    };

    const timeout = setTimeout(() => {
      boot().then(async val => {
        if (val) {
          // Mark: Checking if user is loged
        } else {
          // Mark: Navigate to Onboarding Screen
          resetNavigate('OnboardingScreen');
        }
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
