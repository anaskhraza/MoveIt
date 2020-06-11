/**
 *
 * This file serve as Entry component file
 */

import React, {useEffect, useState, useReducer, useRef, Fragment} from 'react';
import {Text, SafeAreaView, View, Image} from 'react-native';

import {Button} from 'react-native-elements';
import AppState from '../redux/state/AppState';
import {InputComponentTouch} from '../components/InputComponent';
import styles, {colors} from '../styles/HomeStyles';
import {ButtonComponent} from '../components/ButtonComponent';

import AutoSuggestModal from './AutoSuggestModal';
import RoutesModal from './RoutesModal';
import {Modalize} from 'react-native-modalize';

import {IconComponent} from '../components/Common';

import {SideModal} from '../components/Common';
import MapComponent from '../components/MapComponent';
import {useNavigation} from '@react-navigation/native';
import {VERTICAL_SWAP, SOURCE, DESTINATION, FILTER} from '../assets';

interface AppProps {
  MapReducer: AppState;
  useCallDispatcher: (funcName?: Function) => void;
}

const Home = () => {
  let sourceAddr: string = '';
  let destinationAddr: string = '';
  // console.disableYellowBox = true;
  const [updateData, setUpdateData] = useState(false);
  const [callee, setCallee] = useState('');
  const [reqParam, setReqparam] = useState({});

  const [inputValues, setInputValues] = useReducer(
    (state: any, newState: any) => ({...state, ...newState}),
    {source: '', destination: ''},
  );

  const modalizeRef = useRef<Modalize>(null);
  const modalizeRef1 = useRef<Modalize>(null);

  useEffect(() => {
    setReqparam(inputValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateData]);

  const toggleModalVisible = (name: string) => {
    setCallee(name);
    console.log('modalizeRef => ', modalizeRef);
    onOpen('autoSuggestModal', modalizeRef, modalizeRef1);
  };

  const toggleModalRoutes = () => {
    onOpen('routeModal', modalizeRef1, modalizeRef1);
  };

  const handleOnChange = (name: string, value: string) => {
    setInputValues({[name]: value});
    if (inputValues.source && inputValues.destination) {
      setUpdateData(!updateData);
    } else if (inputValues.source && name === 'destination' && value) {
      setUpdateData(!updateData);
    } else if (inputValues.destination && name === 'source' && value) {
      setUpdateData(!updateData);
    }
  };

  if (inputValues.source && inputValues.source.formatted_address) {
    sourceAddr = inputValues.source.formatted_address;
  }
  if (inputValues.destination && inputValues.destination.formatted_address) {
    destinationAddr = inputValues.destination.formatted_address;
  }

  return (
    // <SafeAreaView>
    <Fragment>
      <View style={{height: '40%'}} />
      <MapComponent
        centerCoordinates={reqParam}
        minZoomLevel={0.08}
        height={'60%'}
      />
      <View style={styles.subContainer}>
        <DirectionView
          sourceAddr={sourceAddr}
          destinationAddr={destinationAddr}
          toggleModalVisible={toggleModalVisible}
          toggleModalRoutes={toggleModalRoutes}
        />
      </View>

      <AutoSuggestModal
        onCallerPress={handleOnChange}
        customRef={modalizeRef}
        modalVisible={true}
        caller={callee}
      />

      <RoutesModal
        customRef={modalizeRef1}
        modalVisible={true}
        coordinates={reqParam}
        destinationAddr={destinationAddr}
        sourceAddr={sourceAddr}
      />
    </Fragment>
  );
};

/**
 * On Modal Open
 * @param modalName
 * @param modalizeRef
 * @param modalizeRef1
 */
const onOpen = (modalName: string, modalizeRef: any, modalizeRef1: any) => {
  if (modalName === 'autoSuggestModal' && modalizeRef.current) {
    modalizeRef1.current.close();
    modalizeRef.current.open();
  }
  if (modalName === 'routeModal' && modalizeRef.current) {
    modalizeRef.current.open();
  }
};

const DirectionView = (props: any) => {
  const sourceAddr = props.sourceAddr;
  const destinationAddr = props.destinationAddr;
  const toggleModalVisible = props.toggleModalVisible;
  const toggleModalRoutes = props.toggleModalRoutes;

  return (
    <View style={styles.textBoxCard}>
      <Text style={[styles.headerText]}>Plan my Journey</Text>
      <View style={styles.directionViewBox}>
        <View style={styles.inputComponent}>
          <InputComponentTouch
            placeholder="Current Location"
            name="source"
            onPress={toggleModalVisible}
            value={sourceAddr}
            containerStyle={[styles.inputColor2, styles.inputContainer]}
            rightIconComponent={
              <Image source={VERTICAL_SWAP} style={styles.verticalSwapIcon} />
            }
            leftIconComponent={
              <Image source={SOURCE} style={styles.sourceIcon} />
            }
          />
        </View>
        <View style={styles.inputComponent}>
          <InputComponentTouch
            placeholder="Destination"
            name="destination"
            onPress={toggleModalVisible}
            value={destinationAddr}
            leftIconComponent={
              <Image source={DESTINATION} style={styles.destIcon} />
            }
            containerStyle={[styles.inputColor2, styles.inputContainer]}
          />
        </View>
      </View>
      <DepartFilterView />
      <View style={{paddingTop: 10}}>
        <ButtonComponent btnText="Find Routes" onPress={toggleModalRoutes} />
      </View>
    </View>
  );
};

const DepartFilterView = () => {
  const {navigate} = useNavigation();
  const [isDeaprtModalVisible, setDepartModalVisible] = useState(false);

  const togglDeparteModal = () => {
    setDepartModalVisible(!isDeaprtModalVisible);
  };
  return (
    <Fragment>
      <View style={[styles.departFilterView]}>
        <View style={styles.departFilterChild}>
          <Button
            onPress={togglDeparteModal}
            buttonStyle={styles.routeBtn}
            titleStyle={[styles.btnTitleRoute]}
            containerStyle={[styles.paddingTop]}
            icon={
              <IconComponent
                iconName={'down'}
                type={'antdesign'}
                size={12}
                color={colors.red}
              />
            }
            iconRight
            title="Depart Now"
          />
          <Button
            buttonStyle={styles.filterBtn}
            onPress={() => navigate('FilterScreen')}
            titleStyle={[styles.btnTitleFilter]}
            containerStyle={[styles.paddingTop]}
            icon={<Image source={FILTER} style={styles.filterIcon} />}
            title="Filter"
          />
        </View>
      </View>

      <SideModal
        isModalVisible={isDeaprtModalVisible}
        toggleModal={togglDeparteModal}
      />
    </Fragment>
  );
};

export default Home;
