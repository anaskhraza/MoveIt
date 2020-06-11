/**
 *
 * This file serve as Autosuggest reducer file
 */

import AppState from '../state/AppState';
import {iDataState} from '../state/IState';
import IAction from '../action/IAction';
import AutoSuggestAction from '../action/AutoSuggestAction';
import {Maps} from '../../model/maps/Maps';

export default class AutoSuggestReducer {
  private static readonly _initialState: any = {
    data: [],
    state: iDataState.initial,
    errorMessage: '',
  };

  public static reducer(
    state: any = AutoSuggestReducer._initialState,
    action: IAction<any, Maps>,
  ): AppState {
    switch (action.type) {
      case AutoSuggestAction.GET_AUTO_SUGGEST_REQUEST:
        return {
          ...state,
          state: iDataState.loading,
          errorMessage: '',
        };

      case AutoSuggestAction.GET_AUTO_SUGGEST_RESPONSE:
        return {
          ...state,
          data: action.data !== null ? action.data! : [],
          state: iDataState.loaded,
          errorMessage: '',
        };

      case AutoSuggestAction.GET_AUTO_SUGGEST_FAILED:
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
