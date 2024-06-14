import Colors from '@constants/colors';
import {screenWidth} from '@constants/utils';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  scrollView: {flexGrow: 1},
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  logoImg: {
    width: 70,
    height: 20,
    objectFit: 'contain',
  },
  title: {
    marginTop: 30,
    marginBottom: 16,
    fontSize: 30,
    fontWeight: '700',
    color: Colors.primary.base,
  },
  subtitle: {
    color: Colors.dark.gray1,
  },
  formWrapper: {marginTop: 40, gap: 20},
  footer: {
    position: 'absolute',
    bottom: 40,
    alignItems: 'center',
  },
  btn: {
    width: screenWidth - 32,
  },
  signInRow: {
    flexDirection: 'row',
    gap: 4,
    marginVertical: 12,
  },
  signInBtn: {
    color: Colors.primary.link,
    fontWeight: '600',
  },
});
