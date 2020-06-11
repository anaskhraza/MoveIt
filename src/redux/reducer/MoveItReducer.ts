/**
 *
 * This file serve as Moovit reducer file
 */

import AppState from '../state/AppState';
import {iDataState} from '../state/IState';
import IAction from '../action/IAction';
import MoveItAction from '../action/MoveItAction';
import {Maps} from '../../model/maps/Maps';

export default class MoveItReducer {
  private static readonly _initialState: any = {
    data: [],
    state: iDataState.initial,
    errorMessage: '',
  };

  public static reducer(
    state: any = MoveItReducer._initialState,
    action: IAction<any, Maps>,
  ): AppState {
    switch (action.type) {
      case MoveItAction.GET_MOVE_ROUTES_REQUEST:
        return {
          ...state,
          state: iDataState.loading,
          errorMessage: '',
        };

      case MoveItAction.GET_MOVE_ROUTES_RESPONSE:
        return {
          ...state,
          data: action.data !== null ? action.data! : [],
          state: iDataState.loaded,
          errorMessage: '',
        };

      case MoveItAction.GET_MOVE_ROUTES_FAILED:
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
