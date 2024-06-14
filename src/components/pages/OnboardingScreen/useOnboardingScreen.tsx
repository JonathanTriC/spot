import {useNavigate} from '@hooks/useNavigate';

const useOnboarding = () => {
  const {navigateScreen} = useNavigate();
  const handleNavigateAs = async (role: 'user' | 'guest') => {
    // await _handlerSetItem(Keys.onboarded, 'true');
    if (role === 'user') {
      navigateScreen('LoginScreen');
    } else {
    }
  };
  return {handleNavigateAs};
};

export default useOnboarding;
