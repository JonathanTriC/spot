import Colors from '@constants/colors';
import {windowHeight, windowWidth} from '@constants/utils';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  img: {
    height: windowHeight,
    width: windowWidth,
  },
  containerTitle: {
    width: windowWidth,
    position: 'absolute',
    alignItems: 'center',
    top: 120,
  },
  title: {
    color: Colors.white,
    fontWeight: '600',
    fontSize: 40,
    textAlign: 'center',
  },
  titleBlue: {
    color: Colors.primary.base,
    fontWeight: '700',
    fontSize: 40,
  },
  containerBottom: {
    width: windowWidth - 32,
    position: 'absolute',
    alignItems: 'center',
    backgroundColor: Colors.white,
    bottom: 40,
    left: 16,
    right: 16,
    padding: 16,
    borderRadius: 20,
  },
  bottomTitle: {
    color: Colors.primary.base,
    fontWeight: '600',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
  bottomSubtitle: {
    color: Colors.primary.base,
    fontSize: 16,
    marginBottom: 26,
  },
  btnWrapper: {
    flexDirection: 'row',
    gap: 8,
  },
  btn: {
    flex: 1,
  },
});
