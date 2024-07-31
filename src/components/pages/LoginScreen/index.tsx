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
  const {
    navigation,
    popAndNavigateScreen,
    control,
    handleSubmit,
    onSubmit,
    isLoginError,
    errorMessage,
  } = useLogin();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => <Header withCloseIcon />,
    });
  }, []);

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <Image
          source={require('@assets/images/splash.png')}
          style={styles.logoImg}
        />
        <Text style={styles.title}>Log In</Text>
        <Text style={styles.subtitle}>
          Sign in and find your dream spots now
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
                error={isLoginError}
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
                error={isLoginError}
              />
            )}
          />

          <Text style={styles.forgetPassword}>Forget Password?</Text>
        </View>

        <View style={styles.footer}>
          {errorMessage && <Text>{errorMessage}</Text>}
          <Button
            label="Log in"
            style={styles.btn}
            action={handleSubmit(onSubmit)}
          />
          <View style={styles.signUpRow}>
            <Text>Didn’t have account?</Text>
            <TouchableOpacity
              onPress={() => popAndNavigateScreen('RegisterScreen')}>
              <Text style={styles.signUpBtn}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};
export {LoginScreen};
