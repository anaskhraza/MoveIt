/**
 *
 * This file serve as Moovit detail reducer file
 */

import {iDataState} from '../state/IState';
import MoveItActionDetail from '../action/MoveItActionDetail';

export default class MoveItDetailReducer {
  private static readonly _initialState: any = {
    data: [],
    state: iDataState.initial,
    errorMessage: '',
  };

  public static reducer(
    state: any = MoveItDetailReducer._initialState,
    action: any,
  ): any {
    switch (action.type) {
      case MoveItActionDetail.GET_MOVE_DETAIL_REQUEST:
        return {
          ...state,
          state: iDataState.loading,
          errorMessage: '',
        };

      case MoveItActionDetail.GET_MOVE_DETAIL_RESPONSE:
        return {
          ...state,
          data: action.data !== null ? action.data! : [],
          map: action.map !== null ? action.map! : '',
          state: iDataState.loaded,
          errorMessage: '',
        };

      case MoveItActionDetail.GET_MOVE_DETAIL_FAILED:
        return {
          ...state,
          Maps: [],
          data: [],
          state: iDataState.loaded,
          errorMessage: 'Error',
        };
      default:
        return state;
    }
  }
}
