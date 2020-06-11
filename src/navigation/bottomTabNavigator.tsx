import * as React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screen/Home';
import RoutesDetail from '../screen/RoutesDetail';
import NavigationScreen from '../screen/NavigateScreen';
import FilterScreen from '../screen/FilterScreen';
import DepartScreen from '../screen/DepartScreen';
import {fontFamily, colors} from '../styles/styles';

const headerOption: any = {
  headerStyle: {
    height: 80,
    borderBottomWidth: 0,
  },
  headerTitleStyle: {
    fontFamilty: fontFamily.bold,
    fontSize: 15,
    color: colors.darkBlue,
  },
  headerTitleAlign: 'center',
};
const HomeStackNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{...headerOption}} />
      <Stack.Screen
        name="RoutesDetail"
        component={RoutesDetail}
        options={{...headerOption}}
      />
      <Stack.Screen
        name="NavigationScreen"
        component={NavigationScreen}
        options={{...headerOption, title: 'Navigation Screen'}}
      />
      <Stack.Screen
        name="FilterScreen"
        component={FilterScreen}
        options={{...headerOption, title: 'Filter Screen'}}
      />
      <Stack.Screen
        name="DepartScreen"
        component={DepartScreen}
        options={{
          ...headerOption,
          title: 'Plan Your Journey',
        }}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <React.Fragment>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          safeAreaInset: {bottom: 'never', top: 'never'},
          forceInset: {bottom: 'never', top: 'never'},
          headerForceInset: {bottom: 'never', top: 'never'},
          activeTintColor: '#5FA6C6',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen
          name="Home"
          component={HomeStackNavigator}
          options={{
            tabBarLabel: 'Home',
            headerTitle: 'Home',
          }}
        />
      </Tab.Navigator>
    </React.Fragment>
  );
};

export default function BottomTabNavigator(props) {
  return <TabNavigator />;
}
