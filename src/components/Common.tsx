/**
 * Created By Muhammad Anas
 * This file is responsible to serve as a common components ussed
 * for the application wide
 *
 *
 */

import React, {Fragment} from 'react';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import styles, {colors, ModalStyles, fontFamily} from '../styles/styles';
import {WALK, BUS, SUBWAY, START, STOP} from '../assets/index';
import Modal from 'react-native-modal';

import {useNavigation} from '@react-navigation/native';

/**
 * Bus Component used in Route Detail Screen
 * @param props
 */
export const BusComponent = (props: any) => {
  let type = props.type || 'bus';
  let imageIcon = null;
  const item = props.data;
  if (type === 'tram') {
    imageIcon = <Image source={SUBWAY} style={styles.tramIcon} />;
  } else {
    imageIcon = <Image source={BUS} style={styles.busIcon} />;
  }
  return (
    <Fragment>
      <View style={[styles.iconView5]}>{imageIcon}</View>
      <View style={[styles.paddingTop2, {paddingLeft: 15, width: '90%'}]}>
        <Text style={[styles.routeDetailh1, styles.paddingTop]}>Travel to</Text>
        <View style={{paddingTop: 2, width: '90%'}}>
          <Text style={[styles.fs11, {fontSize: 14}]}>{item.journey[1]}</Text>
        </View>
        <View style={[styles.row, {paddingTop: 2, alignContent: 'center'}]}>
          <Text style={[styles.fs8, styles.paddingBottom]}>
            {item.stopsNo} stops
          </Text>
          <Text style={[styles.fs8, styles.paddingLeft2]}>{item.duration}</Text>
          <View style={{marginTop: -2}}>
            <IconComponent
              iconName={'chevron-down'}
              type={'material-community'}
              size={20}
              color={colors.red}
            />
          </View>
        </View>
      </View>
    </Fragment>
  );
};

/**
 * Walk Component used in Route Detail Screen
 * @param props
 */
export const WalkComponent = (props: any) => {
  const item: any = props.data;

  return (
    <Fragment>
      <View style={[styles.iconView5]}>
        <Image source={WALK} style={styles.walkIcon} />
      </View>
      <View style={[styles.paddingTop2, {paddingLeft: 15, width: '90%'}]}>
        <Text style={[styles.routeDetailh1, styles.paddingTop]}>Walk to</Text>
        <View style={{paddingTop: 2, width: '90%'}}>
          <Text style={[styles.fs11, , {fontSize: 14}]}>{item.destName}</Text>
        </View>
        <View style={[styles.row, {paddingTop: 2, alignContent: 'center'}]}>
          <Text style={[styles.fs8, styles.paddingBottom]}>{item.length}</Text>
          <Text style={[styles.fs8, styles.paddingLeft2]}>{item.duration}</Text>
          <View style={{marginTop: -4}}>
            <IconComponent
              iconName={'chevron-down'}
              type={'material-community'}
              size={20}
              color={colors.red}
            />
          </View>
        </View>
      </View>
    </Fragment>
  );
};

/**
 * Reference Component for Walk Component
 * @param props
 */
export const WalkJourney = (props: any) => {
  const item = props.data;

  return (
    <Fragment>
      <WalkComponent data={item} />
    </Fragment>
  );
};

/**
 * Common method of Start Component
 * @param props
 */
export const StartComponent = (props: any) => {
  const item = props.data;
  return (
    <Fragment>
      <View
        style={[
          styles.iconView5,
          {backgroundColor: colors.white},
          styles.paddingTop2,
        ]}>
        <Image source={START} style={styles.startStopIcon} />
      </View>
      <View style={[styles.paddingTop2, {paddingLeft: 15, width: '90%'}]}>
        <Text style={[styles.routeDetailh1, styles.paddingTop]}>
          Start From
        </Text>
        <View style={{paddingTop: 2, width: '90%'}}>
          <Text style={[styles.fs11, {fontSize: 14}]}>{item.destination}</Text>
        </View>
        <View style={[styles.row, {paddingTop: 2, alignContent: 'center'}]}>
          <Text
            style={[
              {
                fontSize: 12,
                color: colors.darkBlue,
                fontFamily: fontFamily.regular,
              },
              styles.paddingBottom,
            ]}>
            Leave now
          </Text>
        </View>
      </View>
    </Fragment>
  );
};

/**
 * Common method of End Component
 * @param props
 */
export const EndComponent = (props: any) => {
  const item = props.data;

  return (
    <Fragment>
      <View
        style={[
          styles.iconView5,
          {backgroundColor: colors.white},
          styles.paddingTop2,
        ]}>
        <Image source={STOP} style={styles.startStopIcon} />
      </View>
      <View style={[styles.paddingTop2, {paddingLeft: 15, width: '90%'}]}>
        <Text style={[styles.routeDetailh1, styles.paddingTop]}>Reached</Text>
        <View style={{paddingTop: 2, width: '90%'}}>
          <Text style={[styles.fs11, {fontSize: 14}]}>{item.destination}</Text>
        </View>

        <View style={[styles.row, {paddingTop: 2, alignContent: 'center'}]}>
          {item.stops ? (
            <Text
              style={[
                {
                  fontSize: 12,
                  color: colors.darkBlue,
                  fontFamily: fontFamily.regular,
                },
                styles.paddingBottom,
              ]}>
              {item.stops} stops
            </Text>
          ) : null}

          <Text
            style={[
              styles.paddingLeft2,
              {
                fontSize: 12,
                color: colors.darkBlue,
                fontFamily: fontFamily.regular,
              },
            ]}>
            {item.totalTime[0]}:{('0' + item.totalTime[1]).slice(-2)} hr
          </Text>
        </View>
      </View>
    </Fragment>
  );
};

export const WaitComponent = (props: any) => {
  const item = props.data;
  let type = item.transitType || 'bus';
  let imageIcon = null;
  if (type === 'Subway') {
    imageIcon = <Image source={SUBWAY} style={styles.tramIcon} />;
  } else {
    imageIcon = <Image source={BUS} style={styles.busIcon} />;
  }
  return (
    <Fragment>
      <View style={[styles.iconView5]}>{imageIcon}</View>
      <View style={[styles.paddingTop2, {paddingLeft: 15, width: '90%'}]}>
        <Text style={[styles.routeDetailh1, styles.paddingTop]}>Wait for</Text>
        <View style={{paddingTop: 2, width: '90%'}}>
          <Text style={[styles.fs11, {fontSize: 14}]}>
            No: {item.lineNumber}
          </Text>
        </View>
        <View style={[styles.row, {paddingTop: 2, alignContent: 'center'}]}>
          <Text style={[styles.fs8, styles.paddingBottom]}>Other Options</Text>
          <View style={{marginTop: -4}}>
            <IconComponent
              iconName={'chevron-down'}
              type={'material-community'}
              size={20}
              color={colors.red}
            />
          </View>
        </View>
      </View>
    </Fragment>
  );
};

export const IconComponent = (props: any) => {
  return (
    <Icon
      name={props.iconName}
      type={props.type}
      size={props.size}
      color={props.color}
    />
  );
};

export const SideModal = (props: any) => {
  const {navigate} = useNavigation();
  const isModalVisible = props.isModalVisible;
  const toggleModal = props.toggleModal;
  const WrapperToggle = props.toggleWrapper;
  const items = [
    {text: 'Depart Now', navigate: false},
    {text: 'Set Your Departure Time', navigate: true},
    {text: 'Set Desired Arrival Time', navigate: true},
    {text: 'Last Lines For Today', navigate: true},
  ];
  const itemCount = items.length;
  return (
    <View>
      <Modal
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        backdropOpacity={0.45}
        onBackdropPress={toggleModal}
        isVisible={isModalVisible}>
        <View style={ModalStyles.content}>
          {items.map((obj, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  toggleModal();
                  navigate('DepartScreen');
                }}>
                <View
                  style={[
                    styles.fullWidth,
                    ModalStyles.contentView,
                    {borderBottomWidth: index === itemCount - 1 ? 0 : 1},
                  ]}>
                  <Text
                    style={{
                      textAlign: 'left',
                      fontFamily: fontFamily.semibold,
                      fontSize: 12,
                    }}>
                    {obj.text}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </Modal>
    </View>
  );
};

export const SwitchItem = (props: any) => {
  const item = props.data;
  switch (item.type) {
    case 'Bus':
      return <BusComponent data={item} />;
    case 'Walk':
      return <WalkJourney data={item} />;
    case 'Subway':
      return <BusComponent data={item} type="tram" />;
    case 'Wait':
      return <WaitComponent data={item} />;
    case 'Start':
      return <StartComponent data={item} />;
    case 'end':
      return <EndComponent data={item} />;
    default:
      return null;
  }
};
