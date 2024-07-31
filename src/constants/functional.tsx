import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast, {ToastShowParams} from 'react-native-toast-message';

export const _handlerGetItem = (params: any) => {
  try {
    return AsyncStorage?.getItem(params);
  } catch (error) {}
};

export const _handlerSetItem = async (key: any, value: any, callback?: any) => {
  try {
    await AsyncStorage.setItem(key, value, callback);
  } catch (error) {}
};

export const _handlerRemoveItem = async (params: any) => {
  try {
    await AsyncStorage.removeItem(params);
  } catch (error) {}
};

export const _handlerClearItem = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {}
};

export const showErrorToast = (message: string, params?: ToastShowParams) => {
  Toast.show({
    ...params,
    type: 'error',
    text1: message || 'Terjadi Kesalahan',
  });
};

export const showSuccessToast = (message: string, params?: ToastShowParams) => {
  Toast.show({
    ...params,
    type: 'success',
    text1: message,
  });
};

export const showWarningToast = (message: string, params?: ToastShowParams) => {
  Toast.show({
    ...params,
    type: 'warning',
    text1: message || 'Terjadi Kesalahan',
  });
};
