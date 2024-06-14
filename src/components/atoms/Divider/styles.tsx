import Colors from '@constants/colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center', marginVertical: 8},
  line: {flex: 1, height: 1, backgroundColor: Colors.dark.disabled},
  text: {textAlign: 'center', color: Colors.dark.disabled, marginHorizontal: 6},
});
