import {_handlerSetItem} from '@constants/functional';
import {Keys} from '@constants/keys';
import {useNavigate} from '@hooks/useNavigate';

const useOnboarding = () => {
  const {resetNavigate} = useNavigate();
  const handleDone = async () => {
    await _handlerSetItem(Keys.onboarded, 'true');
  };
  return {handleDone};
};

export default useOnboarding;
