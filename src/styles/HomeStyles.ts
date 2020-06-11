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
  textBoxCard: {
    width: '100%',
    backgroundColor: colors.white,
    alignContent: 'center',
    // height: '100%',
  },
  headerText: {
    fontSize: 21,
    fontFamily: fontFamily.bold,
    color: colors.darkBlue,
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
  },
  directionViewBox: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: '90%',
  },
  inputComponent: {
    padding: 5,
  },
  destIcon: {
    width: 10,
    height: 14,
  },
  sourceIcon: {
    width: 11,
    height: 11,
  },
  verticalSwapIcon: {
    width: 13,
    height: 11,
  },
  inputColor2: {
    backgroundColor: colors.lightGray,
    marginBottom: 0,
  },
  inputContainer: {
    height: 40,
    justifyContent: 'center',
    paddingLeft: 2,
  },
  departFilterView: {
    display: 'flex',
    flexDirection: 'row',
    width: '90%',

    justifyContent: 'center',
    alignSelf: 'center',
  },
  departFilterChild: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingLeft: 5,
    paddingRight: 5,
  },
  routeBtn: {
    width: 102,
    height: 40,
    // paddingTop: 10,
    backgroundColor: colors.backRed,
    borderColor: colors.red,
    borderWidth: 0.4,
  },
  btnTitleRoute: {
    fontSize: 12,
    color: colors.red,
    fontFamily: fontFamily.semibold,
    paddingRight: 5,
  },
  paddingTop: {
    paddingTop: 5,
  },
  filterBtn: {
    width: 72,
    borderWidth: 0.5,
    borderColor: colors.borderGray,
    backgroundColor: colors.white,
  },
  btnTitleFilter: {
    fontSize: 12,
    color: colors.darkBlue,
    fontFamily: fontFamily.semibold,
    paddingLeft: 5,
  },
  filterIcon: {
    width: 15,
    height: 15,
  },
  subContainer: {
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,

    position: 'absolute',
    top: 0,
    width: '100%',
    // height: 200,
    paddingLeft: 0,
    padding: 0,
    backgroundColor: colors.white,
    height: 300,
    // height: PixelRatio.roundToNearestPixel((Dimensions.get('window').height * 40) / 100),
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
