/**
 *
 * This file serve as Moovit Detail Saga file
 */

import {put} from 'redux-saga/effects';
import {moveItServices} from '../../service/maps/MoveItServices';
import MoveItActionDetail from '../action/MoveItActionDetail';

import {getCoordinates, parseMoveItRoutes, capitalize} from '../../util/util';

// import IAction from '../action/IAction';

function* getMoveDetail(action: any) {
  try {
    const paramObj: any = action.payload;
    const {coordinates, route} = paramObj;
    console.log('route => ', route);
    let respArrayItenary: Array<any> = [];
    let sourceAddr: string = '';
    let destinationAddr: string = '';
    let index = 0;
    let transitType = ['Tram', 'Subway', 'Rail', 'Bus'];

    if (route && route !== 'car') {
      transitType = [capitalize(route)];
    }

    const {lat1, lat2, lon1, lon2}: any = getCoordinates(coordinates) || null;

    if (coordinates.source && coordinates.source.formatted_address) {
      sourceAddr = coordinates.source.formatted_address;
    }
    if (coordinates.destination && coordinates.destination.formatted_address) {
      destinationAddr = coordinates.destination.formatted_address;
    }

    if ((lat1, lat2, lon1, lon2)) {
      const [coord1, coord2] = [[lat1, lon1], [lat2, lon2]];
      if (coord1.length > 0 && coord2.length > 0) {
        const resp1 = yield moveItServices.getRoutes(
          coord1,
          coord2,
          transitType,
        );
        const resp = parseMoveItRoutes(resp1);
        for (const obj of resp) {
          if (obj.itineraryId) {
            const resp2 = yield moveItServices.getRouteDetail(obj.itineraryId);
            console.log('resp2 ', resp2);
            const interimResp = parseMoveItDetail(
              resp2,
              sourceAddr,
              destinationAddr,
              index,
              obj.totalTime,
            );
            respArrayItenary.push(interimResp);
            index = index + 1;
          }
        }

        yield put(MoveItActionDetail.getMoveItResponse(respArrayItenary));
      } else {
        yield put(MoveItActionDetail.getMoveItError());
      }
    } else {
      yield put(MoveItActionDetail.getMoveItError());
    }
  } catch (e) {
    console.log('errror', e);
    yield put(MoveItActionDetail.getMoveItError());
  }
}

const parseMoveItDetail = (
  resp: any,
  sourceAddr: string,
  destinationAddr: string,
  index: number,
  totalTime: Array<any>,
) => {
  const respParam: any = resp;
  let stepsResp2: any = {};
  let isAddress: any = false;
  let stepsResp1: any = {};
  let responseItenary: any = [];
  let shapes = [];
  try {
    if (respParam.itinerary) {
      const itinerary = respParam.itinerary;
      const legs = itinerary.legs;

      for (let i = 0; i < legs.length; i++) {
        const legType = legs[i].legType || '';
        if (legType === 'Walk') {
          if (i + 1 < legs.length) {
            stepsResp1 = parseStepsWalkDetail(legs[i], legs[i + 1], isAddress);
          } else {
            isAddress = true;
            stepsResp1 = parseStepsWalkDetail(
              legs[i],
              destinationAddr,
              isAddress,
            );
          }

          responseItenary.push(stepsResp1);
        } else if (legType === 'Bus' || legType === 'Subway') {
          stepsResp2 = parseStepsConvoyDetail(legs[i]);
          responseItenary.push(stepsResp2);
        } else {
          const stepsResp3 = parseStepsWaitDetail(legs[i]);
          responseItenary.push(stepsResp3);
        }
      }
    }
    shapes = responseItenary.map((obj: any) =>
      obj.shape ? {shape: obj.shape, type: obj.type} : undefined,
    );
    shapes = shapes.filter((item: any) => item);
    responseItenary = completeJourneyItenary(
      responseItenary,
      sourceAddr,
      destinationAddr,
      stepsResp2,
      totalTime,
    );
  } catch (ex) {
    console.log('error => ', ex);
  }
  const itenaries = {
    legs: responseItenary,
    shapes: shapes,
    index: index,
    totalTime: totalTime,
  };
  return itenaries;
};

const completeJourneyItenary = (
  itenaries: Array<any>,
  sourceAddr: string,
  destinationAddr: string,
  stepsResp2: any,
  totalTime: Array<any>,
) => {
  let itenaryArray: Array<any> = itenaries;
  if (itenaryArray.length > 0) {
    itenaryArray.unshift({
      startLocation: itenaryArray[0].startLocation,
      destLocation: {},
      destination: sourceAddr,
      type: 'Start',
    });

    itenaryArray.push({
      destLocation: itenaryArray[itenaryArray.length - 1].destLocation,
      startLocation: {},
      destination: destinationAddr,
      stops: stepsResp2.stopsNo || '',
      totalTime: totalTime,
      type: 'end',
    });
  }

  return itenaryArray;
};

const parseStepsWalkDetail = (obj: any, nextObj: any, isAddr: boolean) => {
  let destination: string = '';
  if (isAddr) {
    destination = nextObj;
  } else {
    const countStep = nextObj.stops.length;
    destination = countStep > 0 ? nextObj.stops[0].stopName : '';
  }
  const startTime = obj.startTime;
  const endTime = obj.endTime;
  const shape = obj.shape;
  const startLocation = obj.walkingOrigin.location;
  const destLocation = obj.walkingDestination.location;
  const duration = getTotalTime(startTime, endTime);
  const walkSteps = obj.walkingSteps;
  const lengthArray = walkSteps.map((obj1: any) => obj1.lengthInMeters);
  const stepsWalk = lengthArray.reduce((a: any, b: any) => {
    return parseInt(a, 10) + parseInt(b, 10);
  });

  return {
    duration: duration,
    length: getDistance(stepsWalk),
    journey: [],
    type: 'Walk',
    shape: shape,
    startLocation: startLocation,
    destLocation: destLocation,
    destName: destination,
  };
};

const parseStepsConvoyDetail = (obj: any) => {
  const startTime = obj.startTime;
  const endTime = obj.endTime;
  const shape = obj.shape;
  const duration = getTotalTime(startTime, endTime);
  const lineDetails = obj.lineGroup;
  const stops = obj.stops;
  const countStep = stops.length;
  const sourceStopName = countStep > 0 ? stops[0].stopName : '';
  const destinationStopName =
    countStep > 0 ? stops[countStep - 1].stopName : '';
  const startLocation = countStep > 0 ? stops[0].location : '';
  const destLocation = countStep > 0 ? stops[countStep - 1].location : '';

  const steps = [sourceStopName, destinationStopName];

  return {
    duration: duration,
    lineNumber: lineDetails.lineNumber,
    agencyName: lineDetails.agencyName,
    caption1: lineDetails.caption1,
    stopsNo: countStep,
    shape: shape,
    journey: steps,
    type: obj.legType,
    startLocation: startLocation,
    destLocation: destLocation,
  };
};

const parseStepsWaitDetail = (obj: any) => {
  let destLocation = {location: {lat: '', lon: ''}};
  let startLocation = {location: {lat: '', lon: ''}};
  const startTime = obj.startTime;
  const endTime = obj.endTime;
  const duration = getTotalTime(startTime, endTime);
  const destination = obj.line.destination;
  const transitType = obj.lineGroup.transitType;
  const lineNumber = obj.line.lineNumber;
  if (obj.stops && obj.stops.length > 0) {
    destLocation = obj.stops[0].location;
    startLocation = obj.stops[0].location;
  }
  return {
    duration: duration,
    destLocation: destLocation,
    startLocation: startLocation,
    type: obj.legType,
    destination: destination,
    transitType: transitType,
    lineNumber: lineNumber,
  };
};

const getDistance = (length: any) => {
  const km = length / 1000;
  if (Math.floor(km) === 0) {
    return `${parseInt(length, 10)} m`;
  } else {
    return `${km.toFixed(1)} Km`;
  }
};

const getTotalTime = (startTime: number, endTime: number) => {
  let stringTime = '';
  let diff = endTime - startTime;

  let hoursDifference = Math.floor(diff / 1000 / 60 / 60);
  diff -= hoursDifference * 1000 * 60 * 60;

  let minutesDifference = Math.floor(diff / 1000 / 60);
  diff -= minutesDifference * 1000 * 60;
  if (hoursDifference === 0) {
    stringTime = `${minutesDifference} min`;
  } else {
    stringTime = `${hoursDifference} h ${minutesDifference} min`;
  }
  return stringTime;
};

export default getMoveDetail;
