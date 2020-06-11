/**
 * Created By Muhammad Anas
 * This file is responsible to serve as a common input
 *  component for the application
 *
 *
 */

import React, {Fragment} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';
import {IconComponent} from '../components/Common';
import {fontFamily, colors} from '../styles/styles';

declare interface Props {
  placeholder: string;
  name: string;
  onChange: any;
  onPress: Function;
}
declare interface TouchableProps {
  placeholder: string;
  name: string;
  onPress: Function;
  value: string;
}

export const InputComponent = (props: Props) => {
  const placeholder = props.placeholder;
  const onChange = props.onChange;
  const name = props.name;
  return (
    <Fragment>
      <Input
        placeholder={placeholder}
        onChangeText={text => onChange(name, text)}
      />
    </Fragment>
  );
};

export const InputComponentTouch = (props: any) => {
  const placeholder = props.placeholder;
  const onClick = props.onPress;
  const name = props.name;
  const value = props.value;
  const iconObj = props.iconObj;
  const containerStyle = props.containerStyle;
  const rightIconComponent = props.rightIconComponent;
  const leftIconComponent = props.leftIconComponent;
  return (
    <Fragment>
      <TouchableOpacity
        onPress={() => {
          onClick(name);
        }}>
        <View pointerEvents={'none'}>
          <Input
            editable={false}
            placeholder={placeholder}
            placeholderTextColor={colors.darkBlue}
            containerStyle={containerStyle}
            inputContainerStyle={[styles.inputBorderWidth]}
            inputStyle={[styles.inputTouchComponent, {color: colors.darkBlue}]}
            value={value}
            leftIcon={leftIconComponent}
            rightIcon={rightIconComponent}
          />
        </View>
      </TouchableOpacity>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  inputTouchComponent: {
    paddingLeft: 10,
    fontSize: 14,
    fontFamily: fontFamily.semibold,
  },

  inputBorderWidth: {
    borderBottomWidth: 0,
  },
});
