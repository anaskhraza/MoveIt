/**
 *
 * This file serve as depart tsx file
 */

import React, {Fragment} from 'react';
import {Text, View} from 'react-native';

import styles, {colors} from '../styles/styles';

import {IconComponent} from '../components/Common';
import {ScrollView} from 'react-native-gesture-handler';
import {ButtonComponent} from '../components/ButtonComponent';
import {useNavigation} from '@react-navigation/native';

const TimeArray = [
  {time: '16:00'},
  {time: '16:15'},
  {time: '16:30'},
  {time: '16:45'},
  {time: '16:55'},
  {time: '17:00'},
  {time: '17:15'},
];

const trafficArray = [
  200,
  100,
  230,
  188,
  200,
  100,
  230,
  188,
  200,
  100,
  230,
  188,
  100,
  120,
  250,
  167,
  200,
  100,
  178,
  188,
  100,
  70,
  80,
  100,
  100,
  70,
  80,
  100,
  100,
  70,
  80,
  100,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
];

const DepartScreen = (): Element => {
  const {goBack} = useNavigation();
  return (
    <Fragment>
      <ScrollView contentContainerStyle={{flexGrow: 1, paddingBottom: 100}}>
        <View style={styles.body}>
          <View style={[styles.departView]}>
            <Text style={styles.fs9}>From</Text>
            <View
              style={[
                styles.paddingRight2,
                styles.row,
                styles.alignItemCenter,
              ]}>
              <Text style={[styles.paddingRight1, styles.fs4]}>
                Your Location
              </Text>
              <IconComponent
                iconName={'chevron-down'}
                type={'material-community'}
                size={20}
                color={colors.darkBlue}
              />
            </View>
          </View>
          <View style={[styles.departView]}>
            <Text style={styles.fs9}>Day</Text>
            <View
              style={[
                styles.paddingRight2,
                styles.row,
                styles.alignItemCenter,
              ]}>
              <Text style={[styles.paddingRight2, styles.fs4]}>Today</Text>
              <IconComponent
                iconName={'chevron-down'}
                type={'material-community'}
                size={20}
                color={colors.darkBlue}
              />
            </View>
          </View>
          <View style={[styles.row]}>
            <View style={[styles.departView, styles.departSubBlackView]}>
              <Text style={styles.fs9}>Arrives At</Text>
            </View>
            <View style={[styles.departView, styles.departSubBlackView1]}>
              <View
                style={[
                  styles.paddingRight2,
                  styles.row,
                  styles.alignItemCenter,
                ]}>
                <Text style={[styles.paddingRight2, styles.fs4]}>Traffic</Text>
              </View>
            </View>
          </View>
          <View style={[styles.row]}>
            <View style={{flexDirection: 'column', width: '25%'}}>
              {TimeArray.map(timeObj => {
                return (
                  <View
                    style={[
                      {
                        width: '100%',
                        height: 70,
                        justifyContent: 'center',
                        paddingLeft: 10,
                        backgroundColor: colors.shadowColor,
                      },
                    ]}>
                    <View style={[styles.row, {paddingLeft: 8}]}>
                      <Text style={[styles.fs1]}>{timeObj.time}</Text>
                    </View>
                  </View>
                );
              })}
            </View>
            <View
              style={{flexDirection: 'column', width: '75%', paddingTop: 10}}>
              {trafficArray.map(width => {
                return (
                  <View
                    style={[
                      {
                        width: '100%',
                        backgroundColor: colors.white,
                        alignItems: 'flex-end',
                      },
                    ]}>
                    <View
                      style={[
                        styles.paddingRight2,
                        styles.paddingTop2,

                        styles.row,
                        styles.alignItemCenter,
                      ]}>
                      <View style={[styles.solidLine, {width: width}]} />
                    </View>
                  </View>
                );
              })}
            </View>
            {/* <View style={{flexDirection: 'column'}}>
              
            </View> */}
          </View>
        </View>
      </ScrollView>
      <View style={styles.departButtonView}>
        <ButtonComponent
          styles={styles.whiteButton}
          titleStyle={{color: colors.red}}
          btnText="Close"
          onPress={() => {
            goBack();
          }}
        />
        <ButtonComponent
          styles={styles.redButton}
          titleStyle={{color: colors.white}}
          btnText="Save"
          onPress={() => {
            goBack();
          }}
        />
      </View>
    </Fragment>
  );
};

export default DepartScreen;
