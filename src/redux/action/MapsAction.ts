/**
 *
 * This file serve as Maps action file
 */

import IAction from './IAction';

export default class MapAction {
  public static readonly GET_MAPS_REQUEST: string =
    'MapAction.GET_MAPS_REQUEST';
  public static readonly GET_MAPS_RESPONSE: string =
    'MapAction.GET_MAPS_RESPONSE';
  public static readonly GET_MAPS_FAILED: string = 'MapAction.GET_MAPS_FAILED';

  public static getMapsRequest = (
    searchTerm?: string | '',
  ): IAction<String, void> => {
    return {
      payload: searchTerm,
      type: MapAction.GET_MAPS_REQUEST,
    };
  };

  public static getMapsResponse = (response: any) => {
    // console.log('getMapsResponse => ', response);

    return {
      data: response,
      type: MapAction.GET_MAPS_RESPONSE,
    };
  };

  public static getMapsError = (): IAction<void, void> => {
    return {
      type: MapAction.GET_MAPS_FAILED,
    };
  };
}
