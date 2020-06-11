import React, {useState, Fragment, useCallback} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';

import styles, {colors} from '../styles/styles';
import {getShapes, share} from '../util/util';
import {IconComponent, SwitchItem} from '../components/Common';

import {ScrollView} from 'react-native-gesture-handler';
import {ButtonComponent} from '../components/ButtonComponent';
import {useNavigation} from '@react-navigation/native';
import MapComponent from '../components/MapComponent';
import ViewShot from 'react-native-view-shot';
import {CONSTANTS} from '../util/Constants';
import {ARROW_LEFT_1, ARROW_RIGHT_1, ARROW_LEFT} from '../assets/index';
import Swiper from 'react-native-swiper';

const dimension = {width: '100%', height: 250};

const RoutesDetail = ({route}: any) => {
  const paramsObj: any = route.params;
  const selectedItem = paramsObj.item;
  const [itenary, setItenaryId] = useState(selectedItem);
  const [shareLink, setShareLink] = useState('');
  const {navigate} = useNavigation();

  let legs: Array<any> = [];
  let shapes: Array<any> = [];
  let centerCoordinates = {};

  const destinationAddr: string = paramsObj.destinationAddr;

  if (itenary) {
    legs = itenary.legs ? itenary.legs : [];

    shapes = itenary.shapes ? getShapes(itenary.shapes) : [];
    centerCoordinates = {
      source: {
        geometry: {
          location: legs.length > 0 ? legs[0].startLocation : '',
        },
      },
      destination: {
        geometry: {
          location: legs.length > 0 ? legs[legs.length - 1].destLocation : '',
        },
      },
    };
  }

  // const onViewRef = React.useRef((viewableItemsObj: any) => {
  //   const viewableItems = viewableItemsObj.viewableItems;

  //   const visibleItem: any =
  //     viewableItems.length > 0 ? viewableItems[0].item : '';
  //   if (visibleItem) {
  //     setItenaryId(visibleItem);
  //   }
  // });

  const onViewRef = React.useRef(null);

  const onChangeIndex = (index: number) => {
    console.log('onChangeIndex ', index);
    console.log('paramsObj ', paramsObj);
    const {summaries} = paramsObj;
    setItenaryId(summaries[index]);
  };

  const onCapture = useCallback(uri => {
    setShareLink(uri);
  }, []);

  return (
    <Fragment>
      <SafeAreaView>
        <ScrollView contentContainerStyle={{flexGrow: 1, paddingBottom: 100}}>
          <ViewShot
            onCapture={onCapture}
            captureMode="update"
            style={dimension}>
            <MapComponent
              centerCoordinates={centerCoordinates}
              polyCoordinates={shapes}
              minZoomLevel={0.08}
              height={250}
              paramsObj={paramsObj}
              noStops={true}
            />
          </ViewShot>
          <DestinationTitleComponent
            shareLink={shareLink}
            paramsObj={paramsObj}
            destinationAddr={destinationAddr}
          />
          <HorizontalScrollComponent
            paramsObj={paramsObj}
            onViewRef={onViewRef}
            onChangeIndex={onChangeIndex}
          />
          <View style={{padding: 20}}>
            {legs.map((item: any, index: number) => (
              <View
                style={[
                  styles.listItemView,
                  {
                    borderTopRightRadius: index === 0 ? 10 : 0,
                    borderTopLeftRadius: index === 0 ? 10 : 0,
                    borderBottomRightRadius: index === legs.length - 1 ? 10 : 0,
                    borderBottomLeftRadius: index === legs.length - 1 ? 10 : 0,
                    paddingTop: 5,
                    paddingBottom: 0,
                    backgroundColor: colors.white,
                  },
                ]}>
                <View
                  style={[
                    styles.row,
                    styles.paddingBottom,
                    {alignContent: 'flex-start'},
                  ]}>
                  <SwitchItem data={item} />
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
        <View
          style={[
            styles.paddingTop,
            styles.stickyView,
            styles.stickyButtonView,
          ]}>
          <ButtonComponent
            btnText="Navigate"
            onPress={() => {
              // onChangeIndex(1);
              navigate('NavigationScreen', {
                summaries: legs,
                shapes: shapes,
              });
            }}
          />
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

const DestinationTitleComponent = (props: any) => {
  const destinationAddr = props.destinationAddr;
  const paramsObj = props.paramsObj;
  const shareLink = props.shareLink;
  return (
    <View style={styles.destinationTitleView}>
      <View style={[styles.row, styles.listSearchContainer]}>
        <View style={{width: '80%'}}>
          <Text style={[styles.fs11, styles.paddingTop]}>
            {destinationAddr}
          </Text>
          <Text
            style={[
              styles.subTitleText,
              styles.paddingBottom,
              {paddingTop: 4},
            ]}>
            {paramsObj.item.totalTime[0]} hr {paramsObj.item.totalTime[1]} min
          </Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            share({url: shareLink, type: CONSTANTS.APPLICATIONS_IMAGE})
          }>
          <View style={[styles.iconView2, {width: 35, height: 38}]}>
            <IconComponent
              iconName={'share'}
              type={'entypo'}
              size={20}
              color={colors.darkBlue}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const HorizontalScrollComponent = (props: any) => {
  const paramsObj = props.paramsObj;
  const onViewRef = props.onViewRef;
  const onChangeIndex = props.onChangeIndex;
  return (
    <View style={[styles.horizontalScrollView, styles.darkColor]}>
      <HorizontalScroll
        paramsObj={paramsObj}
        onViewRef={onViewRef}
        onChangeIndex={onChangeIndex}
      />
    </View>
  );
};

const HorizontalScroll = (props: any) => {
  let paramsObj = props.paramsObj;
  let onChangeIndex = props.onChangeIndex;
  const onViewRef = props.onViewRef;
  const summaries: Array<Object> = paramsObj.summaries;
  const itemParam = paramsObj.item;
  const {index} = itemParam || 0;
  return (
    <Fragment>
      <Swiper
        showsButtons={true}
        loop={false}
        showsPagination={false}
        ref={onViewRef}
        containerStyle={{
          height: 60,
          alignItems: 'center',
        }}
        buttonWrapperStyle={{paddingLeft: 20, paddingRight: 20}}
        nextButton={
          <Image source={ARROW_LEFT_1} style={{width: 9.43, height: 16.04}} />
        }
        prevButton={
          <Image source={ARROW_RIGHT_1} style={{width: 9.43, height: 16.04}} />
        }
        onIndexChanged={onChangeIndex}>
        {summaries.map((item: any, index: number) => (
          <View
            style={{width: '100%', height: '100%', justifyContent: 'center'}}>
            <Text style={[styles.fs12, styles.textCarouselView]}>
              Route: {index + 1}
            </Text>
          </View>
        ))}
      </Swiper>
    </Fragment>
  );
};

export default RoutesDetail;
