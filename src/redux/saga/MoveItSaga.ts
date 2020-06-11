import {put} from 'redux-saga/effects';
import {moveItServices} from '../../service/maps/MoveItServices';
import MoveItAction from '../action/MoveItAction';
import MoveItActionDetail from '../action/MoveItActionDetail';

import {getCoordinates} from '../../util/util';
// import IAction from '../action/IAction';

function* getMoveRoutes(action: any) {
  let respArrayItenary: Array<any> = [];
  try {
    const coordinates: any = action.payload;
    // console.log('coordinates4', coordinates);
    const {lat1, lat2, lon1, lon2} = getCoordinates(coordinates) || null;

    const [coord1, coord2] = [[lat1, lon1], [lat2, lon2]];
    if (coord1.length > 0 && coord2.length > 0) {
      const resp1 = yield moveItServices.getRoutes(coord1, coord2);
      const resp = parseMoveItRoutes(resp1);
      for (const obj of resp) {
        if (obj.itineraryId) {
          const interimResp = yield MoveItActionDetail.getMoveItRequest(
            obj.itineraryId,
          );
          respArrayItenary.push(interimResp);
        }
      }

      yield put(MoveItAction.getMoveItResponse(resp));
    } else {
      yield put(MoveItAction.getMoveItError());
    }
  } catch (e) {
    console.log('errror', e);
    yield put(MoveItAction.getMoveItError());
  }
}

export default getMoveRoutes;
