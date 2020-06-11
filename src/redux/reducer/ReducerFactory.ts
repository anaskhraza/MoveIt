/**
 *
 * This file serve as reducer factory file
 */

import {combineReducers} from 'redux';
import MapReducer from './MapReducer';
import AutoSuggestReducer from './AutoSuggestReducer';
import MoveItReducer from './MoveItReducer';
import MoveItDetailReducer from './MoveItDetailReducer';

const ReducerFactory = combineReducers({
  mapReducer: MapReducer.reducer,
  AutoSuggestReducer: AutoSuggestReducer.reducer,
  MoveItReducer: MoveItReducer.reducer,
  MoveItDetailReducer: MoveItDetailReducer.reducer,
});

export default ReducerFactory;
