import {RouteApp} from '@components/atoms/RouteApp';
import React, {useEffect} from 'react';
import {Platform} from 'react-native';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import {BASE_URL} from '@env';

function App(): JSX.Element {
  useEffect(() => {
    console.log('BASE_URL:', BASE_URL);
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }
  }, []);

  return <RouteApp />;
}

export default App;
