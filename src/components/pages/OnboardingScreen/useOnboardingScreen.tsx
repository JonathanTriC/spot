import {useNavigate} from '@hooks/useNavigate';

const useOnboarding = () => {
  const {resetNavigate} = useNavigate();
  const handleDone = async (auth: 'login' | 'signup') => {
    // await _handlerSetItem(Keys.onboarded, 'true');
    if (auth === 'login') {
    } else {
    }
  };
  return {handleDone};
};

export default useOnboarding;
