import {Text, View} from 'react-native';
import useHomeScreen from './useHomeScreen';
import {Button} from '@components/atoms';

const HomeScreen = () => {
  const {user, token, logout} = useHomeScreen();

  return (
    <View>
      <Text>{user?.full_name}</Text>
      <Text>{token}</Text>

      <Button label="Clear Credentials" action={logout} />
    </View>
  );
};

export {HomeScreen};
