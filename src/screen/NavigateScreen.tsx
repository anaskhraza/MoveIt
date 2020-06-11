import React, {useState, Fragment, useEffect} from 'react';
import {SafeAreaView, View} from 'react-native';
import MapComponent from '../components/MapComponent';

import {ScrollView} from 'react-native-gesture-handler';
import {SwitchItem} from '../components/Common';
import styles from '../styles/styles';
import Swiper from 'react-native-swiper';

const NaviggationScreen = ({route}: any) => {
  const paramsObj: any = route.params;
  console.log('NaviggationScreen => ', paramsObj);
  const {summaries, shapes} = paramsObj;
  console.log('NaviggationScreen => ', shapes);
  let legs: any = summaries;
  const [legsIndex, setLegsIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(0.3);
  const [centerCoord, setCenterCoord]: any = useState({});

  const setLegsIndexVal = (index: number) => setLegsIndex(index);
  const setCenterCoordVal = (coordObj: Object) => setCenterCoord(coordObj);
  const setZoomLevelVal = (zoomLevel: number) => setZoomLevel(zoomLevel);

  useEffect(() => {
    if (legsIndex === 0 && legs.length > 0 && !centerCoord.source) {
      setCenterCoord({
        source: {geometry: {location: legs[0].startLocation}},
        destination: {geometry: {location: legs[0].startLocation}},
      });
      setZoomLevel(0.3);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [legsIndex, legs]);

  return (
    <Fragment>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <SafeAreaView>
          <MapComponent
            centerCoordinates={centerCoord}
            polyCoordinates={shapes}
            minZoomLevel={zoomLevel}
            height={'100%'}
          />
          <HorizontalScrollComponent
            legs={legs}
            setLegsIndexVal={setLegsIndexVal}
            setCenterCoordVal={setCenterCoordVal}
            setZoomLevelVal={setZoomLevelVal}
          />
        </SafeAreaView>
      </ScrollView>
    </Fragment>
  );
};

const HorizontalScrollComponent = (props: any) => {
  const legs = props.legs;

  const setCenterCoordVal = props.setCenterCoordVal;
  const setZoomLevelVal = props.setZoomLevelVal;

  const setMapCenter = (index: number) => {
    if (legs.length > 0) {
      if (index === legs.length - 1) {
        setCenterCoordVal({
          source: {geometry: {location: legs[index].destLocation}},
          destination: {geometry: {location: legs[index].destLocation}},
        });
        setZoomLevelVal(0.001);
      } else if (index === 0) {
        setCenterCoordVal({
          source: {geometry: {location: legs[index].startLocation}},
          destination: {geometry: {location: legs[index].startLocation}},
        });
        setZoomLevelVal(0.001);
      } else {
        setCenterCoordVal({
          source: {geometry: {location: legs[index].startLocation}},
          destination: {geometry: {location: legs[index].destLocation}},
        });
        setZoomLevelVal(0.017);

        if (legs[index].type === 'Wait') {
          setZoomLevelVal(0.001);
        }
      }
    }
  };

  return (
    <View style={[styles.stickyView]}>
      <Swiper showsButtons={true} loop={false} onIndexChanged={setMapCenter}>
        {legs.map((item: any) => (
          <View
            style={[
              styles.carouselView,
              styles.flex1,
              {
                backgroundColor: 'white',
                alignItems: 'center',
              },
            ]}>
            <View
              style={[
                {
                  paddingBottom: 30,
                  borderRadius: 5,
                },
              ]}>
              <SwitchItem data={item} />
            </View>
          </View>
        ))}
      </Swiper>
    </View>
  );
};

export default NaviggationScreen;
