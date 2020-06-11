/**
 *
 * This file serve as Map saga file
 */

import {put} from 'redux-saga/effects';
import {mapService} from '../../service/maps/MapService';
import MapsAction from '../action/MapsAction';

function* getMaps(action: any) {
  try {
    const payload: any = action.payload;
    let coord1: Array<string> = [];
    let coord2: Array<string> = [];
    const source: any = payload.source ? payload.source : '';
    const dest: any = payload.destination ? payload.destination : '';
    if (source && dest) {
      if (source) {
        if (source.locality && source.formattedAddress) {
          const locality = source.locality;
          const formattedAddress = source.formattedAddress;
          const resp3 = yield mapService.getCoordinates(
            locality,
            formattedAddress,
          );

          const coordinatesResp1: any = parseCoordinatesReponse(resp3);

          coord1 = coordinatesResp1.coordinates
            ? coordinatesResp1.coordinates
            : [];
        }
      }
      if (dest) {
        if (dest.locality && dest.formattedAddress) {
          const locality = dest.locality;
          const formattedAddress = dest.formattedAddress;
          const resp4 = yield mapService.getCoordinates(
            locality,
            formattedAddress,
          );

          const coordinatesResp2: any = parseCoordinatesReponse(resp4);

          coord2 = coordinatesResp2.coordinates
            ? coordinatesResp2.coordinates
            : [];
        }
      }
      if (coord1.length > 0 && coord2.length > 0) {
        const dataPinpoint = yield mapService.getPinPointMap(coord1, coord2);
        yield put({
          type: MapsAction.GET_MAPS_RESPONSE,
          data: dataPinpoint,
          coordinates: [coord1, coord2],
        });
      }
    } else {
      const data = yield mapService.getAll();
      yield put({
        type: MapsAction.GET_MAPS_RESPONSE,
        data: data,
        coordinates: [],
      });
    }
  } catch (e) {
    console.log('errror', e);
    yield put({type: MapsAction.GET_MAPS_FAILED, error: 'Cannot load deals'});
  }
}

const parseCoordinatesReponse = (resp: any) => {
  let finalResp = {};

  const respObj = resp.resourceSets[0].resources[0];
  // console.log('respArray => ', respObj);
  if (respObj.bbox && respObj.point) {
    finalResp = {bbox: respObj.bbox, coordinates: respObj.point.coordinates};
  }

  return finalResp;
};

export default getMaps;
