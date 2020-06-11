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

const styles = StyleSheet.create({
  paddingTop: {
    paddingTop: 5,
  },
  fs11: {
    fontSize: 17,
    fontFamily: fontFamily.bold,
  },
  paddingBottom: {
    paddingBottom: 10,
  },

  fs12: {
    fontSize: 14,
    fontFamily: fontFamily.semibold,
    color: colors.white,
  },
  listItemView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    paddingBottom: 20,
    // height: 100,
    paddingLeft: 15,
    marginLeft: 16,
    paddingTop: 20,
    borderBottomColor: colors.borderColor1,
    borderBottomWidth: 1,
  },
  listSearchContainer: {
    display: 'flex',
    width: '95%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconView2: {
    backgroundColor: colors.white,
    borderWidth: 0.5,
    borderColor: colors.borderColor,
    borderRadius: 3,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
  },
  destinationTitleView: {
    width: '100%',
    // height: 70,
    backgroundColor: colors.white,
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
  },
  subTitleText: {
    fontFamily: fontFamily.semibold,
    fontSize: 13,
    color: colors.gray,
  },
  horizontalScrollView: {
    width: '100%',
  },
  darkColor: {
    backgroundColor: colors.darkBlue,
  },

  textCarouselView: {
    alignSelf: 'center',
  },

  stickyButtonView: {
    height: 80,
    width: '100%',
    justifyContent: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 1,
    borderColor: colors.borderColor,
    alignSelf: 'center',
    backgroundColor: colors.white,
  },
  stickyView: {
    position: 'absolute',
    bottom: 0,
    height: 140,
    paddingLeft: 0,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
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
