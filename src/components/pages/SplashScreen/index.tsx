/* eslint-disable react-hooks/exhaustive-deps */

import React from 'react';
import {Image, View} from 'react-native';
import {styles} from './style';
import {useSplashScreen} from './useSplashScreen';

const SplashScreen = () => {
  const {} = useSplashScreen();

  return (
    <View style={styles.container}>
      <Image
        source={require('@assets/images/splash.png')}
        style={{width: 344, height: 142.33}}
      />
    </View>
  );
};

export {SplashScreen};
