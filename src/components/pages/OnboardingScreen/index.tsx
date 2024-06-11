import {Text, View} from 'react-native';
import useOnboarding from './useOnboardingScreen';

const OnboardingScreen = () => {
  const {handleDone} = useOnboarding();

  return (
    <View>
      <Text>Onboarding Screen</Text>
    </View>
  );
};

export {OnboardingScreen};
