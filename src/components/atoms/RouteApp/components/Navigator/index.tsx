import {
  HomeScreen,
  LoginScreen,
  OnboardingScreen,
  RegisterScreen,
  SplashScreen,
} from '@components/pages';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {useNavigator} from './useNavigator';

const Stack = createStackNavigator<ParamList>();
type NavigatorProps = {};

export const Navigator: React.FC<NavigatorProps> = () => {
  const {screenListeners} = useNavigator();

  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenListeners={screenListeners}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'SplashScreen'} component={SplashScreen} />
      <Stack.Screen name={'OnboardingScreen'} component={OnboardingScreen} />
      <Stack.Screen
        name={'LoginScreen'}
        component={LoginScreen}
        options={{
          presentation: 'modal',
        }}
      />
      <Stack.Screen
        name={'RegisterScreen'}
        component={RegisterScreen}
        options={{
          presentation: 'modal',
        }}
      />
      <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
    </Stack.Navigator>
  );
};
