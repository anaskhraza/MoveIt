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
  filterBackground: {
    backgroundColor: colors.bg1,
    width: '100%',
    height: '100%',
  },
  routeType: {
    backgroundColor: colors.white,
    height: '40%',
    marginTop: 10,
    borderColor: colors.shadowColor,
    borderWidth: 1,
  },
  transitType: {backgroundColor: colors.white, height: '60%', marginTop: 10},
  paddingTop: {
    paddingTop: 5,
  },
  routeParentView: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    paddingLeft: 15,
    backgroundColor: colors.white,
    paddingBottom: 5,

    paddingTop: 5,
    borderBottomWidth: 0,
  },
  routeHead: {
    fontFamily: fontFamily.bold,
    fontSize: 15,
    color: colors.darkBlue,
    paddingLeft: 8,
  },
  routeChildView: {
    display: 'flex',
    width: '95%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    textAlign: 'center',
    paddingRight: 10,
    paddingTop: 6,
    paddingLeft: 10,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  routeText: {
    fontSize: 14,
    color: colors.darkBlue,
    fontFamily: fontFamily.regular,
  },
  listSearchContainer: {
    display: 'flex',

    width: '95%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  routeCard: {
    paddingRight: 10,
    paddingTop: 6,
    paddingLeft: 10,
  },
  togglePadding: {
    paddingRight: 35,
  },
  searchItemView: {
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: '95%',
  },
  paddingLeft4: {
    paddingLeft: 20,
  },
  searchTextWrapper: {
    // backgroundColor: "red",
    // display: 'flex',
    // justifyContent: 'center',
    // flexDirection: 'row',
    // alignItems: 'center',
  },
  fs10: {
    fontSize: 15,
    color: colors.darkBlue,
  },
  switchContainer: {
    width: 28,
    height: 15,
    borderRadius: 10,
    backgroundColor: colors.gray,
    padding: 2,
  },
  switchCircle: {
    width: 11,
    height: 11,
    borderRadius: 11,
    backgroundColor: colors.white, // rgb(102,134,205)
  },
  filterHead: {
    // paddingLeft: 20,
    backgroundColor: colors.white,
    paddingTop: 10,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
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
