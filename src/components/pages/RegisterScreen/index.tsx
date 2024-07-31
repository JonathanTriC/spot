import {Button, TextField} from '@components/atoms';
import {Header} from '@components/molecules';
import Colors from '@constants/colors';
import React, {useLayoutEffect} from 'react';
import {Controller} from 'react-hook-form';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import useRegister from './useRegister';

const RegisterScreen = () => {
  const {
    navigation,
    popAndNavigateScreen,
    control,
    handleSubmit,
    onSubmit,
    isRegisterError,
    errorMessage,
  } = useRegister();

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
        <Text style={styles.title}>Register</Text>
        <Text style={styles.subtitle}>
          Register and start exploring your favorite spots now
        </Text>

        <View style={styles.formWrapper}>
          <Controller
            control={control}
            name={'full_name'}
            render={({
              field: {value, onChange, onBlur},
              fieldState: {error},
            }) => (
              <TextField
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Full Name"
                leftIcon={'account'}
                leftIconColor={Colors.primary.base}
                errorMessage={error?.message}
                error={isRegisterError}
              />
            )}
          />

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
                error={isRegisterError}
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
                error={isRegisterError}
              />
            )}
          />

          <Controller
            control={control}
            name={'confirm_password'}
            render={({
              field: {value, onChange, onBlur},
              fieldState: {error},
            }) => (
              <TextField
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Confirm Password"
                leftIcon={'lock'}
                leftIconColor={Colors.primary.base}
                secure
                errorMessage={error?.message}
                error={isRegisterError}
              />
            )}
          />
        </View>

        <View style={styles.footer}>
          <Button
            label="Register"
            style={styles.btn}
            action={handleSubmit(onSubmit)}
          />
          <View style={styles.signInRow}>
            <Text>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => popAndNavigateScreen('LoginScreen')}>
              <Text style={styles.signInBtn}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};
export {RegisterScreen};
