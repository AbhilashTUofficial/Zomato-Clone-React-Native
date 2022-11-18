import {StyleSheet} from 'react-native';
import {darkGrey, lightGrey, primary, secondary} from '../common_styles';

export const headerImg = require('../../assets/img/zomato_auth_img.png');
export const flagImg = require('../../assets/flags/india_flag.png');
export const googleLogo = require('../../assets/icons/google_logo.png');
export const viewmoreIcon = require('../../assets/icons/viewmore.png');
export const dropdownIcon = require('../../assets/icons/dropdown.png');
export const languageIcon = require('../../assets/icons/languagewhite.png');

export const authStyles = StyleSheet.create({
  header: {
    flex: 4,
  },

  title: {
    color: secondary,
    margin: 4,
    fontSize: 22,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    width: '90%',
    alignSelf: 'center',
    textAlign: 'center',
  },

  body: {
    flex: 5,
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 28,
  },

  divider: {
    color: darkGrey,
    fontSize: 12,
  },

  phinput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  ccContainer: {
    borderColor: lightGrey,
    height: 46,
    width: 56,
    borderWidth: 1.4,
    borderRadius: 6,
    flexDirection: 'row',
    marginVertical: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  phContainer: {
    borderColor: lightGrey,
    height: 46,
    borderWidth: 1.4,
    borderRadius: 6,
    paddingHorizontal: 6,
    flexDirection: 'row',
    marginLeft: 4,
    marginVertical: 4,
    flex: 1,
  },

  flag: {
    height: 18,
    width: 26,
    alignSelf: 'center',
  },

  dropdown: {
    height: 16,
    width: 16,
    marginLeft: 2,
    alignSelf: 'center',
  },
  ccText: {
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: '500',
    color: secondary,
  },

  phInput: {
    color: darkGrey,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 2,
    alignItems: 'center',
  },

  btn: {
    alignItems: 'center',
    paddingVertical: 6,
    marginVertical: 6,
    height: 46,
    justifyContent: 'center',
    borderRadius: 6,
    backgroundColor: primary,
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },

  altAuthMeth: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  cirBtn: {
    alignItems: 'center',
    padding: 12,
    margin: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderColor: lightGrey,
    borderRadius: 99,
    borderWidth: 1,
  },
  icon: {
    height: 25,
    width: 25,
    alignSelf: 'center',
  },
  termsandservice: {
    color: darkGrey,
    fontSize: 12,
    alignSelf: 'center',
    textAlign: 'center',
  },
  tsBorder: {
    borderStyle: 'dotted',
    borderBottomWidth: 1,
    borderColor: darkGrey,
  },
  obContainer: {
    top: 36,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 36,
  },
  overlayBtn: {
    height: 26,
    width: 52,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.9,
    backgroundColor: '#552720',
  },
});
