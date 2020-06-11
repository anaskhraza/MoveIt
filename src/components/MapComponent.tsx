/**
 * Created By Muhammad Anas
 * This file is responsible to serve as a common Map
 * component for the application. This component uses map view of google
 *
 *
 */

import React, {useRef, Fragment} from 'react';
import {View, Image, Text} from 'react-native';
import styles, {polyColor, fontFamily} from '../styles/styles';
import {getCoordinates} from '../util/util';
import MapView, {
  PROVIDER_GOOGLE,
  Polyline,
  Marker,
  Callout,
} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {START, STOP, LOCATION} from '../assets';
import {TouchableOpacity} from 'react-native-gesture-handler';

declare interface Props {
  centerCoordinates?: Object;
  polyCoordinates?: any;
  minZoomLevel: number;
  height: number | string;
  paramsObj?: any;
  noStops?: boolean;
}

const EDGE_PADDING = {
  top: 100,
  right: 100,
  bottom: 100,
  left: 100,
};

/**
 * Map Component used as map view of the application
 * @param props
 */
const MapComponent = (props: Props) => {
  const map1: any = useRef(null);
  const marker1: any = useRef(null);
  const marker2: any = useRef(null);
  const paramsObj = props.paramsObj;
  const centerCoordinates = props.centerCoordinates;
  const noStops = props.noStops;
  let polyCoordinates = props.polyCoordinates;
  const minZoomLevel = props.minZoomLevel;
  const height = props.height;
  let latlongObj: any = {};

  let region: any = null;
  if (centerCoordinates) {
    latlongObj = getCoordinates(centerCoordinates);
  }

  if (latlongObj.lat1 && latlongObj.lon2) {
    region = {
      latitude: latlongObj.lat1,
      longitude: latlongObj.lon2,
      latitudeDelta: minZoomLevel,
      longitudeDelta: minZoomLevel,
    };
  }

  const gotToMyLocation = () => {
    Geolocation.getCurrentPosition(
      ({coords}) => {
        if (map1) {
          map1.current.animateToRegion({
            latitude: coords.latitude,
            longitude: coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          });
        }
      },
      error => console.log('Error: Are location services on?'),
      {enableHighAccuracy: true},
    );
  };

  const onRegionChangeComplete = () => {
    if (marker1 && marker1.current && marker1.current.showCallout) {
      marker1.current.showCallout();
    }
    if (marker2 && marker2.current && marker2.current.showCallout) {
      marker2.current.showCallout();
    }
  };
  return (
    <View style={[styles.mapView, {height: height}]}>
      <MapView
        ref={map1}
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        showsUserLocation={true}
        showsMyLocationButton={false}
        initialRegion={{
          latitude: 25.3548,
          longitude: 51.1839,
          latitudeDelta: 1,
          longitudeDelta: 1,
        }}
        region={region}
        onRegionChangeComplete={onRegionChangeComplete}
        onLayout={() => {
          if (latlongObj.lat1 && latlongObj.lat2) {
            setTimeout(() => {
              map1.current.fitToCoordinates(
                [
                  {latitude: latlongObj.lat1, longitude: latlongObj.lon2},
                  {latitude: latlongObj.lat2, longitude: latlongObj.lon2},
                ],
                {edgePadding: EDGE_PADDING, animated: true},
              );
            }, 2000);
          }
        }}
        zoomControlEnabled
        minZoomLevel={0.1}
        zoomTapEnabled>
        <PolyLineComponent
          latlongObj={latlongObj}
          polyCoordinates={polyCoordinates}
          mapRef={marker1}
          mapRef2={marker2}
          paramsObj={paramsObj}
          noStops={noStops}
        />
      </MapView>
      <RenderShowLocationButton getCurrentPosition={gotToMyLocation} />
    </View>
  );
};

/**
 * Show find my location button
 * TODO: needs to have SDK26 permissions added to it in the near future
 */
const RenderShowLocationButton = (props: any) => {
  const getCurrentPosition = props.getCurrentPosition;
  // console.log('RenderShowLocationButton ');
  return (
    <View style={{position: 'absolute', bottom: 20, left: 20}}>
      <TouchableOpacity
        onPress={() => {
          getCurrentPosition();
        }}>
        <Image source={LOCATION} style={{width: 50, height: 50}} />
      </TouchableOpacity>
    </View>
  );
};

/**
 *
 * Polyline component used in the map for multiple coordinates
 * @param props
 */
const PolyLineComponent = (props: any) => {
  let coordinates: Array<any> = [];
  let markerCoordinates: Array<any> = [];
  const noStops = props.noStops;
  let title = '';
  const paramsObj = props.paramsObj;

  let color = '';
  let ref = null;
  if (paramsObj && paramsObj.item) {
    title = `${paramsObj.item.totalTime[0]} hr ${
      paramsObj.item.totalTime[1]
    } min`;
  }

  const latlongObj = props.latlongObj;
  const polyCoordinates = props.polyCoordinates;
  if (!polyCoordinates && latlongObj.lat1 && latlongObj.lat2) {
    return <StraightPolyLine latlongObj={latlongObj} mapRef={props.mapRef} />;
  } else if (polyCoordinates && polyCoordinates.length > 0) {
    return polyCoordinates.map((coodinate: any, index: number) => {
      const coordinatesPoly = coodinate.sPolyLines;

      color = polyColor[coodinate.type];
      coordinates = transformCoordinatesPolyLine(coordinatesPoly);

      if (coordinates.length > 0) {
        if (index === 0 && noStops) {
          markerCoordinates.push(coordinates[0]);
        } else if (index === polyCoordinates.length - 1 && noStops) {
          markerCoordinates.push(coordinates[coordinates.length - 1]);
        } else if (!noStops) {
          markerCoordinates.push(coordinates[0]);
        }
        if (polyCoordinates.length === 1 && noStops) {
          markerCoordinates.push(coordinates[coordinates.length - 1]);
        }
      }

      return (
        <Fragment>
          <Polyline
            coordinates={coordinates}
            strokeColor={color}
            strokeWidth={2}
          />
          {markerCoordinates.map((coordinate, index) => {
            ref = props.mapRef;
            if (index == 0 && noStops) {
              return (
                <MarkerIndividual
                  coordinate={coordinate}
                  image={START}
                  mapRef={ref}
                />
              );
            } else if (index === markerCoordinates.length - 1 && noStops) {
              ref = props.mapRef2;
              return (
                <MarkerIndividual
                  coordinate={coordinate}
                  image={STOP}
                  mapRef={ref}
                  title={title}
                />
              );
            } else if (!noStops) {
              return (
                <MarkerIndividual
                  coordinate={coordinate}
                  image={null}
                  mapRef={ref}
                />
              );
            }
          })}
        </Fragment>
      );
    });
  } else {
    return null;
  }
};

/**
 * Marker coonent used in the map
 * @param props
 */

const MarkerIndividual = (props: any) => {
  const coordinates = props.coordinate;
  const image = props.image;
  const title = props.title;
  console.log('title => ', title);
  let callout = null;
  if (title) {
    callout = (
      <Callout
        style={{
          borderRadius: 10,
          padding: 5,
        }}>
        <View style={{width: 90, alignItems: 'center'}}>
          <Text style={{fontFamily: fontFamily.semibold, fontSize: 12}}>
            {title}
          </Text>
        </View>
      </Callout>
    );
  }
  if (image) {
    return (
      <Marker coordinate={coordinates} ref={props.mapRef}>
        <Image source={image} style={{width: 30, height: 30}} />
        {callout}
      </Marker>
    );
  }

  return <Marker coordinate={coordinates} />;
};

/**
 * Straight Polyline component used in the map between two coordinates
 * @param props
 */
const StraightPolyLine = (props: any) => {
  let color = '#000000';
  const latlongObj = props.latlongObj;
  const coordinates = transformCoordinatesPolyLine([
    [latlongObj.lat1, latlongObj.lon1],
    [latlongObj.lat2, latlongObj.lon2],
  ]);
  const title = 'You are here!';
  if (coordinates.length > 0) {
    return (
      <Fragment>
        <Polyline
          coordinates={coordinates}
          strokeColor={color} // fallback for when `strokeColors` is not supported by the map-provider
          strokeWidth={2}
        />
        {coordinates.map((coordinate, index) => {
          let image = index === 0 ? START : STOP;
          let ref = index === 0 ? props.mapRef : props.mapRef2;
          const title1 = index === 0 ? title : title;
          return (
            <MarkerIndividual
              coordinate={coordinate}
              image={image}
              mapRef={ref}
              title={title1}
            />
          );
        })}
      </Fragment>
    );
  } else {
    return null;
  }
};

/**
 * Transform polyline to coordinates
 * @param coordinatesArray
 */
const transformCoordinatesPolyLine = (coordinatesArray: Array<any>) => {
  let coordinates = coordinatesArray.map((point: Array<number>) => {
    return {
      latitude: point[0],
      longitude: point[1],
    };
  });

  return coordinates;
};

export default MapComponent;
