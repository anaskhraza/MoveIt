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
  fs1: {
    fontSize: 14,
    fontFamily: fontFamily.bold,
    color: colors.darkBlue,
  },
  redButton: {
    width: 131,
    height: 40,
    // marginLeft: 10,
    backgroundColor: colors.red,
    shadowColor: colors.darkRed,
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.13,
    shadowRadius: 5,
    elevation: 5,
  },
  departButtonView: {
    position: 'absolute',
    width: '100%',
    height: 126,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 1,
    borderColor: colors.borderColor,
    paddingTop: 20,
    bottom: 0,
  },
  whiteButton: {
    width: 131,
    height: 40,
    // marginRight: 10,
    backgroundColor: colors.backRed,
    elevation: 0,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },

  paddingTop2: {
    paddingTop: 5,
  },

  paddingRight2: {
    paddingRight: 15,
  },
  paddingRight1: {
    paddingRight: 5,
  },
  solidLine: {
    borderStyle: 'solid',
    borderColor: colors.red,
    borderWidth: 1,
    width: 10,
  },

  fs4: {
    fontSize: 14,
    color: colors.red,
    fontFamily: fontFamily.bold,
  },

  fs9: {
    fontSize: 11,
    color: colors.departFontColor,
    fontFamily: fontFamily.bold,
  },

  alignItemCenter: {
    alignItems: 'center',
  },

  body: {
    backgroundColor: colors.white,
  },
  departView: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    paddingBottom: 15,
    paddingLeft: 15,
    paddingTop: 20,
    borderBottomColor: colors.borderColor,
    borderBottomWidth: 1,
    backgroundColor: colors.white,
  },
  departSubBlackView: {
    height: '100%',
    width: '25%',
    backgroundColor: '#e9ebed',
    borderBottomWidth: 0,
  },
  departSubBlackView1: {
    justifyContent: 'flex-end',
    height: '100%',
    width: '75%',
    backgroundColor: colors.shadowColor,
    borderBottomWidth: 0,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export const ModalStyles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    // padding: 22,
    width: 225,
    margin: 0,
    top: -70,
    left: 0,
    borderRadius: 8,
    // paddingTop: 10,
    paddingBottom: 10,
    borderColor: colors.shadowColor,
    borderWidth: 0.2,
    shadowColor: colors.shadowColor1,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.3,

    elevation: 5,
  },
  contentView: {
    paddingLeft: 30,
    paddingBottom: 20,
    paddingTop: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    // borderColor: 'rgba(0, 0, 0, 0.1)',
    borderColor: colors.shadowColor1,
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
});

export default styles;
