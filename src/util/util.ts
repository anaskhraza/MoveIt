import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

import _ from 'lodash';

import Polyline from '@mapbox/polyline';
import Share from 'react-native-share';

import {CONSTANTS} from './Constants';
import {ShareModel} from '../model/CommonModel';

/**
 * useDataEntries is used aas a third party call
 *
 * @param callback
 * @param request
 * @param params
 */
export const useDataEntries = (
  callback: Function,
  request: Function,
  params?: any,
): any => {
  const dataHomeReducer = useSelector(state => callback(state));

  useCallDispatcher(request, params);

  return dataHomeReducer;
};

/**
 *
 * dispatch generic call
 * @param funcName
 * @param params
 * @param params1
 */
export const useCallDispatcher = (
  funcName: Function,
  params?: any,
  params1?: any,
) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(funcName(params, params1));
  }, [dispatch, funcName, params, params1]);
};

export const capitalize = (s: string) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

/**
 * Get coordinates from object
 *
 * @param coordinateObj
 */
export const getCoordinates = (coordinateObj: any): object => {
  const coodrinates = coordinateObj;
  const source = coodrinates.source;
  const dest = coodrinates.destination;
  let lat1: any = null;
  let lat2: any = null;
  let lon1: any = null;
  let lon2: any = null;
  if (source && dest) {
    lat1 = source.geometry.location.lat;
    lon1 = source.geometry.location.lng;
    lat2 = dest.geometry.location.lat;
    lon2 = dest.geometry.location.lng;
    if (!lon1 || !lon2) {
      lon1 = source.geometry.location.lon;
      lon2 = dest.geometry.location.lon;
    }
  }

  return {lat1, lat2, lon1, lon2};
};

/**
 * Parse Moovit Routes Repsonse
 *
 * @param resp
 */
export const parseMoveItRoutes = (resp: Array<any>): any => {
  const respParam: any = resp;
  let finalResp = [];
  if (respParam.summaries) {
    const summaries = respParam.summaries;
    const data = summaries.map((obj: any, index: number) => {
      return {
        ...obj,
        key: index,
        totalTime: getTotalTime(obj.startTime, obj.endTime),
        category: getCategory(obj.itinerarySummary),
      };
    });

    finalResp = data;
  }
  return finalResp;
};

/**
 * Get toal Time of duration
 *
 * @param startTime
 * @param endTime
 */
const getTotalTime = (startTime: number, endTime: number): Array<number> => {
  let diff = endTime - startTime;

  let hoursDifference = Math.floor(diff / 1000 / 60 / 60);
  diff -= hoursDifference * 1000 * 60 * 60;

  let minutesDifference = Math.floor(diff / 1000 / 60);
  diff -= minutesDifference * 1000 * 60;

  return [hoursDifference, minutesDifference];
};

/**
 *  Get Category from iteniry Summary
 *
 * @param itinerarySummary
 */
const getCategory = (itinerarySummary: Array<any>): string => {
  let category = '';
  const summaryArray = itinerarySummary;
  const groupedSummary = _.groupBy(summaryArray, 'legType');
  const keys = _.keys(groupedSummary);

  if (keys.indexOf('Subway') > -1) {
    category = 'Subway';
  } else if (keys.indexOf('Bus') > -1) {
    category = 'Bus';
  } else {
    category = 'Walk';
  }

  return category;
};

/**
 * Shape function to get shapes for different itenrities
 *
 * @param shapeArray
 */
export const getShapes = (shapeArray: Array<Object>): Array<any> => {
  let coordinates: Array<any> = [];
  const shapes = shapeArray;
  shapes.forEach((shapeObj: any) => {
    const sPolyLines = Polyline.decode(shapeObj.shape);
    coordinates = [
      ...coordinates,
      {sPolyLines: sPolyLines, type: shapeObj.type},
    ];
  });

  return coordinates;
};

/**
 * share pdf on ios
 *
 * @param {*} fileUrl
 * @param {*} type
 */
export const shareFile = (fileUrl: string, type: string): void => {
  let options = {
    type: type,
    url: fileUrl, // (Platform.OS === 'android' ? 'file://' + filePath)
  };
  Share.open(options);
};

/**
 * commpn share function
 *
 * @param {*} data
 */

export const share = (data: ShareModel): void => {
  const fileURLS = data.url;
  const fileType = data.type;

  if (
    fileType === CONSTANTS.APPLICATION_PDF ||
    fileType === CONSTANTS.APPLICATIONS_IMAGE
  ) {
    shareFile(fileURLS, fileType);
  }
};
