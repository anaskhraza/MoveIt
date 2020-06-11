import {StyleSheet, Dimensions, PixelRatio} from 'react-native';
export const colors = {
  white: '#FFFFFF',
  red: '#F14D4E',
  darkBlue: '#081C3B',
  lightRed: '#F14D4E21',
  backRed: '#F14D4E0D',
  lightGray: '#f8f8f8',
  toggleColorPassive: '#00000029',
  borderColor: '#DEE7F5',
  borderColor1: '#ecedf0',
  bg1: '#FBFCFF',
  blackGrayColor: '#d8dde3',
  gray: '#999FA8',
  lightBlue: '#E7F0F8',
  darkRed: '#CF0939',
  green: '#03AEA5',
  inputBack: '#202F43',
  borderGray: '#081C3B33',
  shadowColor: '#202F430D',
  shadowColor1: '#3737374D',
  departFontColor: '#00000066',
};

export const fontFamily = {
  regular: 'ProximaNova-Regular',
  bold: 'ProximaNova-Bold',
  semibold: 'ProximaNova-Semibold',
};

export const polyColor = {
  Walk: '#000000',
  Bus: colors.red,
  tram: colors.darkBlue,
};

const cardRadius1 = 8;

const styles = StyleSheet.create({
  paddingTop: {
    paddingTop: 5,
  },

  paddingTop2: {
    paddingTop: 5,
  },

  paddingBottom: {
    paddingBottom: 10,
  },

  paddingLeft2: {
    paddingLeft: 5,
  },

  routeDetailh1: {
    fontSize: 12,
    fontFamily: fontFamily.regular,
    color: colors.gray,
  },

  fs11: {
    fontSize: 17,
    fontFamily: fontFamily.bold,
  },

  fs8: {
    fontSize: 12,
    fontFamily: fontFamily.regular,
    color: colors.red,
  },

  busIcon: {
    width: 15.35,
    height: 12.7,
  },
  tramIcon: {
    width: 12.35,
    height: 14.9,
  },

  walkIcon: {
    width: 9,
    height: 15,
  },

  startStopIcon: {
    width: 20,
    height: 20,
  },

  iconView5: {
    backgroundColor: colors.lightRed,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    // paddingLeft: 3,
    width: 25,
    height: 25,
  },

  row: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  fullWidth: {
    width: '100%',
  },
});

export default styles;
