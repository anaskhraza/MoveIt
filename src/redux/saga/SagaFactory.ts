/**
 *
 * This file serve as Saga factory file
 */

import MapsAction from '../action/MapsAction';
import AutoSuggestAction from '../action/AutoSuggestAction';
import MoveItAction from '../action/MoveItAction';
import MoveItActionDetail from '../action/MoveItActionDetail';
import {takeEvery} from 'redux-saga/effects';
import getMaps from './MapSaga';
import getAutoSuggest from './AutoSuggestSaga';
import getMoveRoutes from './MoveItSaga';
import getMoveItDetail from './MoveItDetailSaga';

function* dataSaga() {
  yield takeEvery(MapsAction.GET_MAPS_REQUEST, getMaps);
  yield takeEvery(AutoSuggestAction.GET_AUTO_SUGGEST_REQUEST, getAutoSuggest);
  yield takeEvery(MoveItAction.GET_MOVE_ROUTES_REQUEST, getMoveRoutes);
  yield takeEvery(MoveItActionDetail.GET_MOVE_DETAIL_REQUEST, getMoveItDetail);
}

export default dataSaga;
