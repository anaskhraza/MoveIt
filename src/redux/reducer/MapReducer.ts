/**
 *
 * This file serve as Map reducer file
 */

import AppState from '../state/AppState';
import {iDataState} from '../state/IState';

import MapsAction from '../action/MapsAction';

export default class AppReducer {
  private static readonly _initialState: any = {
    Maps: [],
    coordinates: [],
    state: iDataState.initial,
    errorMessage: '',
  };

  public static reducer(
    state: AppState = AppReducer._initialState,
    action: any,
  ): any {
    // console.log('action reducer=> ', action);
    switch (action.type) {
      case MapsAction.GET_MAPS_REQUEST:
        return {
          ...state,
          state: iDataState.loading,
          errorMessage: '',
        };

      case MapsAction.GET_MAPS_RESPONSE:
        return {
          ...state,
          Maps: action.data !== null ? action.data! : [],
          coordinates: action.coordinates !== null ? action.coordinates : [],
          state: iDataState.loaded,
          errorMessage: '',
        };

      case MapsAction.GET_MAPS_FAILED:
        return {
          ...state,
          Maps: [],
          state: iDataState.loaded,
          errorMessage: 'Error',
        };
      default:
        return state;
    }
  }
}
