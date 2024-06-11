import Colors from '@constants/colors';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Navigator} from './components/Navigator';
import {styles} from './style';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.white,
  },
};

export const RouteApp = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['left', 'right']}>
        <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />

        <GestureHandlerRootView style={{flex: 1}}>
          <NavigationContainer theme={MyTheme}>
            <Navigator />
          </NavigationContainer>
        </GestureHandlerRootView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
