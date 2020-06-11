import {createStore, compose, applyMiddleware, combineReducers} from 'redux';

// import storage from "redux-persist/es/storage"; // default: localStorage if web, AsyncStorage if react-native
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../redux/reducer/ReducerFactory'; // where reducers is a object of reducers
import sagas from '../redux/saga/SagaFactory';

// const config = {
//   key: "root",
//   storage,
//   blacklist: ["nav", "loadingReducer"],
//   debug: true //to get useful logging
// };

const middleware = [];
const sagaMiddleware = createSagaMiddleware();

middleware.push(sagaMiddleware);
/*eslint-disable */
if (__DEV__) {
  middleware.push(createLogger());
}
/*eslint-enable */

const reducers = combineReducers(rootReducer);
const enhancers = [applyMiddleware(...middleware)];
// const initialState = {};
// const persistConfig = { enhancers };
const store = createStore(reducers, undefined, compose(...enhancers));
// const persistor = persistStore(store, persistConfig, () => {
//   //   //console.log('Test', store.getState());
// });
const configureStore = () => {
  return {store};
};

sagaMiddleware.run(sagas);

export default configureStore;
