import {Button, TextField} from '@components/atoms';
import {Header} from '@components/molecules';
import Colors from '@constants/colors';
import React, {useLayoutEffect} from 'react';
import {Controller} from 'react-hook-form';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import useLogin from './useLogin';

const LoginScreen = () => {
  const {navigation, control, handleSubmit} = useLogin();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => <Header />,
    });
  }, []);

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <Image
          source={require('@assets/images/splash.png')}
          style={styles.logoImg}
        />
        <Text style={styles.title}>Sign In</Text>
        <Text style={styles.subtitle}>
          Sign in and find your dream spot now
        </Text>

        <View style={styles.formWrapper}>
          <Controller
            control={control}
            name={'email'}
            render={({
              field: {value, onChange, onBlur},
              fieldState: {error},
            }) => (
              <TextField
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Email"
                leftIcon={'email'}
                leftIconColor={Colors.primary.base}
                keyboardType="email-address"
                errorMessage={error?.message}
              />
            )}
          />

          <Controller
            control={control}
            name={'password'}
            render={({
              field: {value, onChange, onBlur},
              fieldState: {error},
            }) => (
              <TextField
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Password"
                leftIcon={'lock'}
                leftIconColor={Colors.primary.base}
                secure
                errorMessage={error?.message}
              />
            )}
          />

          <Text style={styles.forgetPassword}>Forget Password?</Text>
        </View>

        <View style={styles.footer}>
          <Button label="Sign in" style={styles.btn} action={() => {}} />
          <View style={styles.signUpRow}>
            <Text>Didn’t have account?</Text>
            <TouchableOpacity onPress={() => {}}>
              <Text style={styles.signUpBtn}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};
export {LoginScreen};
