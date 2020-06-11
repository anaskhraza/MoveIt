/**
 * Created By Muhammad Anas
 * This file is responsible to serve as a button component for the application
 *
 *
 */

import React, {Fragment} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';
import {colors, fontFamily} from '../styles/styles';
import LinearGradient from 'react-native-linear-gradient';

declare interface Props {
  btnText: string;
  onPress: any;
  styles?: any;
  titleStyle?: any;
}

export const ButtonComponent = (props: Props) => {
  const ButtonText = props.btnText;
  const onPress = props.onPress;
  const styles1 = {...styles.buttonContainer, ...props.styles};
  const styles2 = {...styles.titleStyle, ...props.titleStyle};
  return (
    <Fragment>
      <View style={{width: '100%'}}>
        <Button
          onPress={onPress}
          buttonStyle={styles1}
          title={ButtonText}
          titleStyle={styles2}
        />
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: colors.red,
    borderColor: colors.red,
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 6,
    paddingLeft: 5,
    paddingRight: 5,
    width: '90%',
    height: 50,
    shadowColor: colors.darkRed,
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.13,
    shadowRadius: 5,
    elevation: 5,
  },
  titleStyle: {
    color: colors.white,
    fontSize: 15,
    fontFamily: fontFamily.semibold,
  },
});
