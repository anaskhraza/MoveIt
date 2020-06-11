/**
 *
 * This file serve as Autosuggest tsx file
 */

import React, {useState, Fragment} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  VirtualizedList,
  PixelRatio,
  Dimensions,
  Image,
  Platform,
  TouchableWithoutFeedback,
  TouchableOpacity as RNTouchableOpacity,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {createSelector} from 'reselect';
import AutoSuggestAction from '../redux/action/AutoSuggestAction';
import {Modalize} from 'react-native-modalize';
import {SearchBar} from 'react-native-elements';
import styles, {colors} from '../styles/AutoSuggest';
import {useDataEntries} from '../util/util';
import {IconComponent} from '../components/Common';
import {useSafeAreaFrame} from 'react-native-safe-area-context';
import {SEARCH_LOCATION, DIAGONAL_ARROW} from '../assets/index';

const Touchables =
  Platform.OS === 'ios' ? RNTouchableOpacity : TouchableOpacity;

const parseAutoSuggestState = createSelector(
  (state: any) => {
    return state.AutoSuggestReducer.data ? state.AutoSuggestReducer.data : '';
  },
  data => data,
);

const AutoSuggestModal = (props: any) => {
  const [searchParam, setSearchParam] = useState('');
  const data = useDataEntries(
    parseAutoSuggestState,
    AutoSuggestAction.getAutoSuggestRequest,
    searchParam,
  );
  const {height} = Dimensions.get('window');

  const isIphonex = height == 812;
  const iphonePlus = height == 736;
  const iphoneXMax = height > 850;

  let scale = isIphonex ? 80 : 81.7;
  scale = iphonePlus ? 82.5 : scale;

  const modalHeight =
    Platform.OS === 'ios'
      ? PixelRatio.roundToNearestPixel(
          (Dimensions.get('window').height * scale) / 100,
        )
      : Dimensions.get('window').height;

  const modalizeRef = props.customRef;
  const onCallerPress = props.onCallerPress;
  const callee = props.caller;
  const updateSearch = (text: string) => setSearchParam(text);

  return (
    <Fragment>
      {/* <SafeAreaView> */}
      <Modalize
        modalHeight={modalHeight}
        rootStyle={styles.marginTopModal}
        ref={modalizeRef}
        HeaderComponent={
          <SafeAreaView>
            <SearchBarComponent
              updateSearch={updateSearch}
              searchParam={searchParam}
            />
          </SafeAreaView>
        }>
        <View style={styles.marginTopModal}>
          <VirtualizedList
            data={data}
            initialNumToRender={1}
            keyboardShouldPersistTaps={'handled'}
            renderItem={({item}: any) => (
              <Item
                data={item}
                modalizeRef={modalizeRef}
                onCallerPress={onCallerPress}
                callee={callee}
              />
            )}
            keyExtractor={(item: any) => item.key}
            getItemCount={getItemCount}
            getItem={getItem}
          />
        </View>
      </Modalize>
      {/* </SafeAreaView> */}
    </Fragment>
  );
};

const SearchBarComponent = (props: any) => {
  const updateSearch = props.updateSearch;
  const searchParam = props.searchParam;

  return (
    <SearchBar
      key="0"
      lightTheme={true}
      platform={'ios'}
      placeholder="Type Here..."
      onChangeText={updateSearch}
      style={styles.autoSuggestAddr}
      value={searchParam}
    />
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
  modalizeRef: any,
  onCallerPress: Function,
  callee: string,
) => {
  modalizeRef.current.close();
  onCallerPress(callee, item);
};

const Item = (props: any) => {
  const item = props.data;
  const modalizeRef = props.modalizeRef;
  const onCallerPress = props.onCallerPress;
  const callee = props.callee;

  return (
    <View style={[styles.padding]}>
      {/* <TouchableWithoutFeedback> */}
      <Touchables
        onPress={() => {
          childItemClick(item, modalizeRef, onCallerPress, callee);
        }}>
        <View style={[styles.listItemView, styles.searchView]}>
          <View style={styles.listSearchContainer}>
            <Image source={SEARCH_LOCATION} style={{width: 27, height: 27}} />
            <View style={[styles.searchItemView, styles.paddingLeft]}>
              {/* <View style={styles.searchTextWrapper}> */}
              <Text style={[styles.autoSuggestAddr]}>
                {item.formatted_address}
              </Text>
              {/* </View> */}
              <Text style={[styles.fs5]}>Doha, Qatar</Text>
            </View>
            <Image
              source={DIAGONAL_ARROW}
              style={{width: 11.25, height: 11.25}}
            />
          </View>
        </View>
      </Touchables>
      {/* </TouchableWithoutFeedback> */}
    </View>
  );
};

export default AutoSuggestModal;
