import {Dimensions, StyleSheet} from 'react-native';

export const primary = '#F15060';
export const secondary = 'black';
export const darkGrey = '#8D8D8D';
export const lightGrey = '#EAEAEA';

export const commonStyles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
