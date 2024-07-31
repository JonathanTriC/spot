import Colors from '@constants/colors';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Navigator} from './components/Navigator';
import {styles} from './style';
import {Provider} from 'react-redux';
import {store} from '@store/store';
import Toast from 'react-native-toast-message';
import {ToastContainer} from '../ToastContainer';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.white,
  },
};

export const toastConfig = {
  success: (props: any) => <ToastContainer {...props} />,
  error: (props: any) => <ToastContainer {...props} type="error" />,
  warning: (props: any) => <ToastContainer {...props} type="warning" />,
};

export const RouteApp = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container} edges={['left', 'right']}>
          <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />

          <GestureHandlerRootView style={{flex: 1}}>
            <NavigationContainer theme={MyTheme}>
              <Navigator />

              <Toast
                config={toastConfig}
                position={'bottom'}
                visibilityTime={5000}
              />
            </NavigationContainer>
          </GestureHandlerRootView>
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
};
