import {StyleSheet} from 'react-native';
import {lightGrey, primary, secondary} from '../common_styles';

export const prevIcon = require('../../assets/icons/goback.png');

export const otpStyles = StyleSheet.create({
  aligncenter: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  phPrompt: {
    color: secondary,
    fontSize: 16,
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: '500',
    marginTop: 12,
  },
  ph: {
    color: secondary,
    fontSize: 14,
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    marginVertical: 36,
  },
  tile: {
    width: 50,
    height: 50,
    borderRadius: 6,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: lightGrey,
    borderWidth: 1,
  },
  tileText: {
    width: 50,
    height: 50,
    borderRadius: 6,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: lightGrey,
    borderWidth: 1,
  },
  altLogMeth: {
    color: primary,
    fontWeight: '500',
    marginVertical: 20,
  },
  prevScr: {
    position: 'absolute',
    top: 36,
    left: 12,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  prevScrIcon: {
    width: 28,
    height: 28,
    alignSelf: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },
  prevScrText: {
    textAlignVertical: 'center',
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 1,
    color: secondary,
  },
  btn: {
    marginVertical: 16,
    width: '42%',
    height: 46,
    borderColor: primary,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: primary,
    fontWeight: '500',
    letterSpacing: 0.6,
  },
});
