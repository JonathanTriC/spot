import AsyncStorage from '@react-native-async-storage/async-storage';

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
