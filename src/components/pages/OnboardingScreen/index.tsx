import {Button} from '@components/atoms';
import Divider from '@components/atoms/Divider';
import {Image, Text, View} from 'react-native';
import {styles} from './styles';
import useOnboarding from './useOnboardingScreen';

const OnboardingScreen = () => {
  const {handleNavigateAs} = useOnboarding();

  return (
    <View>
      <Image
        source={require('@assets/images/onboard.png')}
        style={styles.img}
      />
      <View style={styles.containerTitle}>
        <Text style={styles.title}>
          Find your dream{'\n'}
          <Text style={styles.titleBlue}>Spot</Text> now!
        </Text>
      </View>
      <View style={styles.containerBottom}>
        <Text style={styles.bottomTitle}>
          Explore, rent, or buy your{'\n'}perfect space
        </Text>
        <Text style={styles.bottomSubtitle}>Your journey starts here!</Text>

        <Button
          style={styles.btn}
          label="Sign In or Sign Up"
          action={() => handleNavigateAs('user')}
        />
        <Divider text="or" />
        <Button
          style={styles.btn}
          outline
          label="Explore as Guest"
          action={() => handleNavigateAs('guest')}
        />
      </View>
    </View>
  );
};

export {OnboardingScreen};
