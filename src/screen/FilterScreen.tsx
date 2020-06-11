/**
 *
 * This file serve as filter screen tsx file
 */

import React, {useState, Fragment} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';

import {WALKB, BUSB, SUBWAYB, SWAPB, STARB} from '../assets/index';

import SwitchToggle from '@dooboo-ui/native-switch-toggle';

import styles, {colors} from '../styles/FilterScreen';

import {IconComponent} from '../components/Common';

const routeTypeFilter = [
  {
    key: 'bestRoute',
    name: 'Best Route',
    icon: STARB,
    type: 'image',
    width: 13,
    height: 12,
  },
  {
    key: 'leastWalk',
    name: 'Least Walking',
    icon: WALKB,
    type: 'image',
    width: 10,
    height: 18,
  },
  {
    key: 'leastTransfer',
    name: 'Least Transfers',
    icon: SWAPB,
    type: 'image',
    width: 11,
    height: 13,
  },
];

const transitTypeFilter = [
  {
    key: 'Bus',
    name: 'Bus',
    icon: BUSB,
    enable: true,
    type: 'image',
    width: 14,
    height: 12,
  },
  {
    key: 'Metro',
    name: 'Metro',
    icon: SUBWAYB,
    enable: true,
    type: 'image',
    width: 11,
    height: 13,
  },
  {
    key: 'Walk',
    name: 'Walk',
    icon: WALKB,
    enable: true,
    type: 'image',
    width: 10,
    height: 18,
  },
];

const FilterScreen = () => {
  const [routeType, setRouteType] = useState('bestRoute');

  const toggleRoute = (routeType1: any) => setRouteType(routeType1);

  const [transitType, setTransitType] = useState(transitTypeFilter);

  const onTransitChange = (transitObj: any, isEnabled: boolean) => {
    const transObj = transitObj;
    const transitFils = transitType.map(obj => {
      if (obj.key === transObj.key) {
        return {
          ...obj,
          enable: !isEnabled,
        };
      } else {
        return obj;
      }
    });

    setTransitType(transitFils);
  };

  return (
    <Fragment>
      <View style={[styles.filterBackground]}>
        <View style={styles.routeType}>
          <RouteTypeComponent routeType={routeType} toggleRoute={toggleRoute} />
        </View>
        <View style={styles.transitType}>
          <TransitTypeComponent
            onTransitChange={onTransitChange}
            transitType={transitType}
          />
        </View>
      </View>
    </Fragment>
  );
};

const RouteTypeComponent = (props: any) => {
  const routeType = props.routeType;
  const bestRoute = routeType === 'bestRoute' ? true : false;
  const leastWalk = routeType === 'leastWalk' ? true : false;
  const leastTransfer = routeType === 'leastTransfer' ? true : false;
  let iconScreen = null;
  const toggleRoute = props.toggleRoute;
  return (
    <View style={[styles.paddingTop]}>
      <View style={[styles.routeParentView, styles.filterHead]}>
        <Text style={[styles.routeHead]}>Route Type</Text>
      </View>
      {routeTypeFilter.map(routeObj => {
        iconScreen = (
          <Image
            source={routeObj.icon}
            style={{width: routeObj.width, height: routeObj.height}}
          />
        );

        return (
          <TouchableOpacity
            onPress={() => {
              toggleRoute(routeObj.key);
            }}>
            <View style={[styles.routeParentView]}>
              <View style={[styles.routeChildView]}>
                <View style={[styles.row, {alignItems: 'center'}]}>
                  <View style={{width: 30, alignItems: 'flex-start'}}>
                    {iconScreen}
                  </View>

                  {/* <View style={[styles.searchItemView, styles.paddingLeft4]}>*/}
                  {/* <View style={styles.searchTextWrapper}> */}
                  <Text style={styles.routeText}>{routeObj.name}</Text>
                  {/* </View>*/}
                  {/* </View> */}
                </View>

                <BulletPoint
                  routeObj={routeObj}
                  routeType={bestRoute}
                  routeString={'bestRoute'}
                />
                <BulletPoint
                  routeObj={routeObj}
                  routeType={leastWalk}
                  routeString={'leastWalk'}
                />
                <BulletPoint
                  routeObj={routeObj}
                  routeType={leastTransfer}
                  routeString={'leastTransfer'}
                />
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const BulletPoint = (props: any) => {
  const routeObj = props.routeObj;
  const routeType = props.routeType;
  const routeString = props.routeString;
  let bulletPoint = null;
  if (routeObj.key === routeString) {
    if (routeType) {
      bulletPoint = (
        <IconComponent
          iconName={'radiobox-marked'}
          type={'material-community'}
          size={20}
          color={colors.red}
        />
      );
    } else {
      bulletPoint = (
        <IconComponent
          iconName={'radiobox-blank'}
          type={'material-community'}
          size={20}
          color={colors.darkBlue}
        />
      );
    }
  }

  return bulletPoint;
};

const TransitTypeComponent = (props: any) => {
  const onTransitChange = props.onTransitChange;

  const transitType = props.transitType;
  let image = null;
  return (
    <View style={[styles.paddingTop]}>
      <View
        style={[styles.paddingTop, styles.routeParentView, styles.filterHead]}>
        <Text style={[styles.routeHead]}>Transit Type</Text>
      </View>
      {transitType.map((transitObj: any) => {
        image = (
          <Image
            source={transitObj.icon}
            style={{width: transitObj.width, height: transitObj.height}}
          />
        );

        return (
          <View style={[styles.routeParentView]}>
            <View
              style={[
                styles.listSearchContainer,
                styles.routeCard,
                styles.togglePadding,
              ]}>
              <View style={{width: '5%'}}>{image}</View>
              <View style={[styles.searchItemView, styles.paddingLeft4]}>
                <View style={styles.searchTextWrapper}>
                  <Text style={[styles.fs10]}>{transitObj.name}</Text>
                </View>
              </View>
              <SwitchToggle
                containerStyle={styles.switchContainer}
                circleStyle={styles.switchCircle}
                switchOn={transitObj.enable}
                onPress={(): void =>
                  onTransitChange(transitObj, transitObj.enable)
                }
                circleColorOff="white"
                circleColorOn="white"
                backgroundColorOff={colors.toggleColorPassive}
                backgroundColorOn={colors.green}
                duration={500}
              />
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default FilterScreen;
