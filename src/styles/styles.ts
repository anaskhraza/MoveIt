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
  bg1: {
    backgroundColor: colors.bg1,
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
  mapView: {
    height: 430,
    width: '100%',
  },
  map: {...StyleSheet.absoluteFillObject},
  directionViewBox: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: '90%',
  },
  inputComponent: {
    padding: 5,
  },
  flex1: {
    flex: 1,
  },
  mapView1: {
    height: 300,
    width: '100%',
  },

  paddingTop: {
    paddingTop: 5,
  },
  routeHead: {
    fontFamily: fontFamily.bold,
    fontSize: 15,
    color: colors.darkBlue,
    paddingLeft: 8,
  },
  paddingTop2: {
    paddingTop: 5,
  },
  paddingTop3: {
    paddingTop: 30,
  },
  paddingTop1: {
    paddingTop: 15,
  },
  paddingBottom: {
    paddingBottom: 10,
  },
  inputBorderWidth: {
    borderBottomWidth: 0,
  },
  inputColor1: {
    backgroundColor: colors.gray,
  },
  inputContainer: {
    height: 40,
    justifyContent: 'center',
    paddingLeft: 2,
  },
  inputColor2: {
    backgroundColor: colors.lightGray,
    marginBottom: 0,
  },
  padding: {
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
  },
  paddingLeft0: {
    paddingLeft: 0,
  },
  paddingLeft: {
    paddingLeft: 10,
  },
  inputTouchComponent: {
    paddingLeft: 10,
    fontSize: 14,
    fontFamily: fontFamily.semibold,
  },
  paddingRight: {
    paddingRight: 10,
  },
  paddingLeft1: {
    paddingLeft: 10,
  },
  paddingLeft2: {
    paddingLeft: 5,
  },
  paddingLeft3: {
    paddingLeft: 25,
  },
  paddingLeft4: {
    paddingLeft: 20,
  },
  routeDetailh1: {
    fontSize: 12,
    fontFamily: fontFamily.regular,
    color: colors.gray,
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
  paddingRight3: {
    paddingRight: 25,
  },
  filterHead: {
    // paddingLeft: 20,
    backgroundColor: colors.white,
    paddingTop: 10,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
  },
  fs1: {
    fontSize: 14,
    fontFamily: fontFamily.bold,
    color: colors.darkBlue,
  },
  fs1Bold: {
    fontSize: 15,
    fontFamily: fontFamily.bold,
  },
  fs11: {
    fontSize: 17,
    fontFamily: fontFamily.bold,
  },
  fs7: {
    fontSize: 22,
    fontWeight: '500',
  },
  boldStyle: {
    fontWeight: '500',
  },
  fs3: {
    fontSize: 17,
    fontWeight: '500',
    color: colors.white,
  },
  fs12: {
    fontSize: 14,
    fontFamily: fontFamily.semibold,
    color: colors.white,
  },
  fs4: {
    fontSize: 14,
    color: colors.red,
    fontFamily: fontFamily.bold,
  },
  fs8: {
    fontSize: 12,
    fontFamily: fontFamily.regular,
    color: colors.red,
  },
  fs9: {
    fontSize: 11,
    color: colors.departFontColor,
    fontFamily: fontFamily.bold,
  },
  fs10: {
    fontSize: 15,
    color: colors.darkBlue,
  },
  alignCenter: {
    alignSelf: 'center',
    textAlign: 'center',
  },
  alignItemCenter: {
    alignItems: 'center',
  },
  cardView: {
    elevation: 1,
    backgroundColor: colors.white,
    borderBottomLeftRadius: cardRadius1,
    borderBottomRightRadius: cardRadius1,
    borderTopLeftRadius: cardRadius1,
    borderTopRightRadius: cardRadius1,

    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.6,
  },
  cardView1: {
    elevation: 1,
    backgroundColor: colors.white,

    borderBottomLeftRadius: cardRadius1,
    borderBottomRightRadius: cardRadius1,
    borderTopLeftRadius: cardRadius1,
    borderTopRightRadius: cardRadius1,
  },
  searchItemView: {
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: '95%',
  },
  autoSuggestAddr: {
    fontSize: 14,
    fontFamily: fontFamily.semibold,
  },
  searchTextWrapper: {
    // backgroundColor: "red",
    // display: 'flex',
    // justifyContent: 'center',
    // flexDirection: 'row',
    // alignItems: 'center',
  },

  listSearchCountry: {
    paddingLeft: 15,
    paddingRight: 15,
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
  routeText: {
    fontSize: 14,
    color: colors.darkBlue,
    fontFamily: fontFamily.regular,
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

  departSubWhiteView1: {
    justifyContent: 'flex-end',
    height: '100%',
    width: '75%',
    backgroundColor: colors.white,
    borderBottomWidth: 0,
  },

  filterView: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    paddingLeft: 20,
    paddingTop: 10,
    paddingRight: 10,
    backgroundColor: colors.white,
  },

  routeItemView: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
    backgroundColor: colors.white,
  },

  alignItemsStart: {
    alignItems: 'flex-start',
  },
  alignContentStart: {
    alignContent: 'flex-start',
  },
  routeOptions: {paddingTop: 5, alignContent: 'center'},
  searchView: {
    paddingBottom: 5,
    paddingTop: 5,
    borderBottomWidth: 0,
    paddingLeft: 0,
    marginLeft: 0,
    alignItems: 'flex-start',
    width: '100%',
  },
  spaceBetween: {
    justifyContent: 'space-between',
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
  black: {
    color: colors.darkBlue,
  },
  fs2: {
    fontSize: 13,
    fontWeight: '200',
    color: colors.gray,
  },
  switchCircle: {
    width: 11,
    height: 11,
    borderRadius: 11,
    backgroundColor: colors.white, // rgb(102,134,205)
  },
  switchContainer: {
    width: 28,
    height: 15,
    borderRadius: 10,
    backgroundColor: colors.gray,
    padding: 2,
  },
  fs5: {
    fontSize: 12,
    fontFamily: fontFamily.regular,
    color: colors.darkBlue,
    opacity: 0.65,
  },
  fs6: {
    fontSize: 15,
    fontFamily: fontFamily.bold,
  },
  arrowIcon: {
    width: 8.88,
    height: 8.87,
  },
  icon1: {
    width: 17.35,
    height: 14.7,
  },
  busIcon: {
    width: 15.35,
    height: 12.7,
  },
  tramIcon: {
    width: 12.35,
    height: 14.9,
  },
  icon3: {
    width: 55,
    height: 55,
  },
  walkIcon: {
    width: 9,
    height: 15,
  },
  icon: {
    width: 11.28,
    height: 19.7,
  },
  icon4: {
    width: 13,
    height: 24,
  },
  icon2: {
    width: 17,
    height: 20,
  },
  icon5: {
    width: 20,
    height: 25,
  },
  startStopIcon: {
    width: 20,
    height: 20,
  },
  icon6: {
    width: 13,
    height: 15,
  },
  verticalSwapIcon: {
    width: 13,
    height: 11,
  },
  sourceIcon: {
    width: 11,
    height: 11,
  },
  destIcon: {
    width: 10,
    height: 14,
  },
  filterIcon: {
    width: 15,
    height: 15,
  },
  iconBorder1: {
    // borderColor: colors.white,
    borderWidth: 2,
    shadowOffset: {width: 20, height: 30},
    shadowColor: 'black',
    shadowOpacity: 1.0,
  },
  iconView: {
    backgroundColor: colors.lightRed,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    paddingLeft: 3,
    width: 30,
    height: 30,
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

  textIconView: {
    backgroundColor: colors.lightRed,
    justifyContent: 'center',
    borderLeftWidth: 0,
    marginLeft: 0,
    paddingRight: 10,
    elevation: 0,

    left: 0,
    height: 30,
  },
  iconView1: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
  },
  iconView3: {
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
  },
  iconView4: {
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
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
    // height: 60,
    // alignItems: 'center',
    // backgroundColor: colors.white,
    // padding: 10,
    // paddingLeft: 20,
  },
  darkColor: {
    backgroundColor: colors.darkBlue,
  },
  lightColor: {
    backgroundColor: colors.white,
  },

  transparent: {
    backgroundColor: 'rgba(52,52,52,0)',
  },

  container: {
    display: 'flex',
    backgroundColor: 'rgba(52,52,52,0)',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  subContainer: {
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,

    position: 'absolute',
    top: 0,
    width: '100%',
    height: 200,
    paddingLeft: 0,
    padding: 0,
    backgroundColor: colors.white,
    height: 300,
    // height: PixelRatio.roundToNearestPixel((Dimensions.get('window').height * 40) / 100),
  },
  myLocationButton: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 200,
    paddingLeft: 0,
    padding: 0,
  },
  textBoxCard: {
    width: '100%',
    backgroundColor: colors.white,
    alignContent: 'center',
    // height: '100%',
  },
  scrollView: {
    paddingBottom: 100,
    flexGrow: 1,
  },
  flatListHorizontal: {width: '100%', height: 40},
  carouselView: {
    width: '100%', //Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselCard: {width: 300, backgroundColor: colors.white, height: 180},
  textCarouselView: {
    alignSelf: 'center',
  },
  textBg1: {
    backgroundColor: colors.lightRed,
    padding: 3,
    paddingTop: 7,
    paddingBottom: 7.4,
    paddingRight: 5,
    fontSize: 12,
    fontWeight: '700',
  },
  textBg2: {
    fontSize: 12,
    fontFamily: fontFamily.semibold,
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
  rowSimple: {
    flexDirection: 'row',
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

  row: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  flexSpace: {
    display: 'flex',
    justifyContent: 'space-between',
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
  btnTitleRoute: {
    fontSize: 12,
    color: colors.red,
    fontFamily: fontFamily.semibold,
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

  text: {
    flexDirection: 'column',
    opacity: 1,
  },
  marginTopModal: {
    // marginTop: 20,
  },
  content__header: {
    padding: 15,
    paddingBottom: 0,

    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  routeOptionView: {
    height: 120,
    padding: 10,

    backgroundColor: colors.lightBlue,
  },
  fullWidthHeight: {
    width: '100%',
    height: '100%',
  },

  fullWidth: {
    width: '100%',
  },
  buttonRoutesView: {
    display: 'flex',
    marginLeft: 10,
    marginTop: 10,
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderBottomLeftRadius: cardRadius1,
    borderBottomRightRadius: cardRadius1,
    borderTopLeftRadius: cardRadius1,
    borderTopRightRadius: cardRadius1,
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
