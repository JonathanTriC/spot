import {_handlerGetItem} from '@constants/functional';
import {Keys} from '@constants/keys';
import {useEffect} from 'react';

const useSplashScreen = (navigation: any) => {
  const handleNavigationAfterSplash = () => {
    const boot = async () => {
      return await _handlerGetItem(Keys.onboarded);
    };

    const timeout = setTimeout(() => {
      boot().then(val => {
        if (val) {
          // Mark: Checking if user is loged in
        } else {
          // Mark: Navigate to Onboarding Screen
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
