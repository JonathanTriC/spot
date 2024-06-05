/* eslint-disable react-hooks/exhaustive-deps */

import React, {FC} from 'react';
import {Image, View} from 'react-native';
import {styles} from './style';
import {useSplashScreen} from './useSplashScreen';

type Props = {
  navigation: any;
};

const SplashScreen: FC<Props> = ({navigation}) => {
  const {} = useSplashScreen(navigation);

  return (
    <View style={styles.container}>
      <Image source={require('@assets/images/splash.png')} />
    </View>
  );
};

export {SplashScreen};
