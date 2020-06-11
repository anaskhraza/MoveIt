import React, {useState, Fragment} from 'react';
import {
  Text,
  SafeAreaView,
  Image,
  View,
  VirtualizedList,
  TouchableOpacity,
  PixelRatio,
  Platform,
  Dimensions,
} from 'react-native';
import {createSelector} from 'reselect';
import {useSelector} from 'react-redux';

import MoveItActionDetail from '../redux/action/MoveItActionDetail';

import {Modalize} from 'react-native-modalize';
import styles, {colors, fontFamily} from '../styles/RouteModal';
import {useCallDispatcher} from '../util/util';
import {useNavigation} from '@react-navigation/native';

import {ROUTE_OPTION} from '../util/Constants';
import {WALK, BUS, SUBWAY, ARROW_LEFT} from '../assets/index';

import {IconComponent} from '../components/Common';

const parseDetailReducerState = createSelector(
  (state: any) => {
    return state.MoveItDetailReducer.data ? state.MoveItDetailReducer.data : [];
  },
  data => data,
);

const parseDetailMaoState = createSelector(
  (state: any) => {
    return state.MoveItDetailReducer.map ? state.MoveItDetailReducer.map : '';
  },
  data => data,
);

const parseDetailLoaderState = createSelector(
  (state: any) => {
    return state.MoveItDetailReducer.state
      ? state.MoveItDetailReducer.state
      : '';
  },
  data => data,
);

const parseDetailErrorState = createSelector(
  (state: any) => {
    return state.MoveItDetailReducer.errorMessage
      ? state.MoveItDetailReducer.errorMessage
      : '';
  },
  data => data,
);

const useRouteDetails = (params: any, params1?: any) => {
  const dataHomeReducer = useSelector(state => {
    return {
      data: parseDetailReducerState(state),
      map: parseDetailMaoState(state),
      state: parseDetailLoaderState(state),
      isError: parseDetailErrorState(state),
    };
  });
  useCallDispatcher(MoveItActionDetail.getMoveItRequest, params, params1);

  return dataHomeReducer;
};

const RoutesModal = (props: any) => {
  let noDataView = null;
  const [suggestRoute, setSuggestRoute] = useState('');
  const setAutoSuggstRoute = (route: string) => {
    console.log('setAutoSuggstRoute => ', route);
    if (suggestRoute === route) {
      setSuggestRoute('');
    } else {
      setSuggestRoute(route);
    }
  };
  const coordinates = props.coordinates;
  const modalizeRef = props.customRef;
  const callee = props.caller;
  const destinationAddr = props.destinationAddr;
  const sourceAddr = props.sourceAddr;
  const {height, width} = Dimensions.get('window');
  console.log('height => ', height);
  const isIphonex = height == 812;
  const iphonePlus = height == 736;
  const iphoneXMax = height > 850;

  const {navigate} = useNavigation();
  const summaries = useRouteDetails(coordinates, suggestRoute);
  if (summaries.isError) {
    noDataView = (
      <Text
        style={{
          fontFamily: fontFamily.semibold,
          fontSize: 14,
          paddingLeft: 20,
          paddingTop: 20,
        }}>
        No Routes Available
      </Text>
    );
  } else if (summaries.state === 2 && summaries.data.length === 0) {
    noDataView = (
      <Text
        style={{
          fontFamily: fontFamily.semibold,
          fontSize: 14,
          paddingLeft: 20,
        }}>
        No Routes Available
      </Text>
    );
  }

  console.log('summaries ]>', summaries);
  let scale = Platform.OS === 'ios' ? (height / width) * 470 : 195;
  scale = isIphonex ? (height / width) * 437 : scale;
  scale = iphonePlus ? (height / width) * 510 : scale;
  scale = iphoneXMax ? (height / width) * 475 : scale;
  return (
    <Fragment>
      <Modalize
        rootStyle={{
          marginTop: PixelRatio.roundToNearestPixel(scale),
        }}
        // modalHeight={480}
        ref={modalizeRef}
        onOverlayPress={() => modalizeRef.current.close()}
        HeaderComponent={
          // <SafeAreaView>
          <SuggestedRouteComponent
            setAutoSuggstRoute={setAutoSuggstRoute}
            suggestRoute={suggestRoute}
          />
          // </SafeAreaView>
        }>
        <View style={[styles.marginTopModal]}>
          {noDataView}
          <VirtualizedList
            data={summaries.data || []}
            initialNumToRender={1}
            renderItem={({item}: any) => (
              <Item
                data={item}
                summaries={summaries}
                modalizeRef={modalizeRef}
                navigate={navigate}
                destinationAddr={destinationAddr}
                sourceAddr={sourceAddr}
              />
            )}
            keyExtractor={(item: any) => item.key}
            getItemCount={getItemCount}
            getItem={getItem}
          />
        </View>
      </Modalize>
    </Fragment>
  );
};

const SuggestedRouteComponent = (props: any) => {
  // const [activeSuggestRoute, setActiveSuggestRoute] = useState('');
  const suggestRoute = props.suggestRoute;
  const setAutoSuggstRoute = props.setAutoSuggstRoute;
  const routeOption = ROUTE_OPTION;

  return (
    <View style={[styles.container]}>
      <View style={styles.routeOptionView}>
        <View style={{paddingLeft: 10, paddingTop: 10}}>
          <Text style={[styles.fs1Bold]}>Suggested Modes</Text>
        </View>
        <View style={[styles.fullWidthHeight, styles.row]}>
          {routeOption.map((route, index) => {
            if (route.type !== suggestRoute) {
              return (
                <View
                  style={[
                    styles.buttonRoutesView,
                    {marginLeft: index === 0 ? 10 : 20},
                  ]}>
                  <TouchableOpacity
                    onPress={() => setAutoSuggstRoute(route.type)}>
                    <Image source={route.image1} style={styles.icon3} />
                  </TouchableOpacity>
                </View>
              );
            } else {
              return (
                <View
                  style={[
                    styles.buttonRoutesView,
                    {
                      backgroundColor: colors.darkBlue,
                      marginLeft: index === 0 ? 10 : 20,
                    },
                  ]}>
                  <TouchableOpacity
                    onPress={() => setAutoSuggstRoute(route.type)}>
                    <Image source={route.image} style={styles.icon3} />
                  </TouchableOpacity>
                </View>
              );
            }
          })}
        </View>
      </View>
    </View>
  );
};

const getItem = (data: Array<any>, index: number) => {
  if (data[index]) {
    const item = data[index];
    return {
      ...item,
    };
  } else {
    return {};
  }
};

const getItemCount = (data: Array<any>) => {
  return data.length;
};

const childItemClick = (
  item: any,
  summaries: any,
  sourceAddr: string,
  destinationAddr: string,
  navigate: any,
) => {
  navigate('RoutesDetail', {
    item,
    summaries,
    sourceAddr,
    destinationAddr,
  });
};

const Item = (props: any) => {
  const item = props.data;
  const itinarySummary = item.legs;
  console.log('itinarySummary => latest', itinarySummary);
  const modalizeRef = props.modalizeRef;
  const summaries = props.summaries.data ? props.summaries.data : [];
  const navigate = props.navigate;
  const destinationAddr = props.destinationAddr;
  const sourceAddr = props.sourceAddr;
  let count = 1;
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          childItemClick(
            item,
            summaries,
            sourceAddr,
            destinationAddr,
            navigate,
          );
        }}>
        <View style={[styles.listItemView, styles.paddingLeft2]}>
          <View style={styles.listSearchContainer}>
            {/* <Icon name="location" /> */}
            <View style={[styles.searchItemView, styles.paddingLeft]}>
              <View style={styles.searchTextWrapper}>
                <Text style={[styles.fs6]}>
                  {item.totalTime[0]} hr {item.totalTime[1]} min
                </Text>
              </View>
              <View
                style={[
                  styles.fullWidth,
                  styles.paddingRight1,
                  styles.row,
                  {alignSelf: 'center'},
                ]}>
                {itinarySummary.map((route: any, index: number) => {
                  count = 0;
                  let arrow = null;
                  return (
                    <View style={[styles.row, {alignItems: 'center'}]}>
                      {route.type === 'Walk' ? (
                        <Fragment>
                          <IconRouteComponent
                            type="walk"
                            noLeftArrow={index === 1 ? true : false}
                          />
                          <Text
                            style={[styles.textCarouselView, styles.textBg2]}>
                            {route.duration}
                          </Text>
                        </Fragment>
                      ) : route.type === 'Bus' ? (
                        <Fragment>
                          <IconRouteComponent
                            type="bus"
                            noLeftArrow={index === 1 ? true : false}
                          />
                          <View style={styles.textIconView}>
                            <Text style={[styles.textBg2]}>
                              {route.lineNumber.trim()}
                            </Text>
                          </View>
                        </Fragment>
                      ) : route.type === 'Subway' ? (
                        <Fragment>
                          <IconRouteComponent
                            type="tram"
                            noLeftArrow={index === 1 ? true : false}
                          />
                          <View style={styles.textIconView}>
                            <Text style={[styles.textBg2]}>
                              {route.lineNumber.trim()}
                            </Text>
                          </View>
                        </Fragment>
                      ) : null}
                    </View>
                  );
                })}
              </View>
              {itinarySummary.map((route: any, index: number) => {
                return (
                  <Fragment>
                    {(route.type === 'Bus' || route.type === 'Subway') &&
                    index === 3 ? (
                      <View style={{paddingTop: 5}}>
                        <Text
                          style={[
                            {
                              fontFamily: fontFamily.regular,
                              fontSize: 10,
                              color: colors.gray,
                            },
                          ]}>
                          Leaves from station
                        </Text>
                      </View>
                    ) : null}
                  </Fragment>
                );
              })}
            </View>

            <IconComponent
              iconName={'chevron-right'}
              type={'font-awesome'}
              size={13}
              color={colors.darkBlue}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
//<View style={[styles.paddingLeft,]}>

const IconRouteComponent = (props: any) => {
  const noLeftArrow = props.noLeftArrow;
  let type = null;
  let styleIcon = null;
  let iconViewStyle = null;
  if (props.type === 'walk') {
    type = WALK;
    styleIcon = styles.icon;
    iconViewStyle = styles.iconView1;
  } else if (props.type === 'tram') {
    type = SUBWAY;
    styleIcon = styles.icon6;
    iconViewStyle = styles.iconView;
  } else {
    type = BUS;
    styleIcon = styles.icon1;
    iconViewStyle = styles.iconView;
  }

  return (
    <Fragment>
      {noLeftArrow ? null : (
        <View style={[styles.paddingLeft1]}>
          <Image source={ARROW_LEFT} style={styles.arrowIcon} />
        </View>
      )}

      <View style={[styles.paddingLeft1]}>
        <View style={iconViewStyle}>
          <Image source={type} style={styleIcon} />
        </View>
      </View>
    </Fragment>
  );
};

export default RoutesModal;
