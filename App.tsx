/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './src/redux/reducer/ReducerFactory';
import createSagaMiddleware from 'redux-saga';
import {createLogger} from 'redux-logger';

import BottomTabNavigator from './src/navigation/bottomTabNavigator';
import dataSaga from './src/redux/saga/SagaFactory';
import {NavigationContainer} from '@react-navigation/native';

const middleware: any = [];
const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);

/*eslint-disable-nextline */
if (__DEV__) {
  middleware.push(createLogger());
}

const configureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(...middleware));
  sagaMiddleware.run(dataSaga);
  return store;
};

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
