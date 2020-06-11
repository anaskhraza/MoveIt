/**
 *
 * This file serve as auto suggestion action file
 */
import IAction from './IAction';

export default class AutoSuggestAction {
  public static readonly GET_AUTO_SUGGEST_REQUEST: string =
    'AutoSuggestAction.GET_AUTO_SUGGEST_REQUEST';
  public static readonly GET_AUTO_SUGGEST_RESPONSE: string =
    'AutoSuggestAction.GET_AUTO_SUGGEST_RESPONSE';
  public static readonly GET_AUTO_SUGGEST_FAILED: string =
    'AutoSuggestAction.GET_AUTO_SUGGEST_FAILED';

  public static getAutoSuggestRequest = (
    searchTerm?: string | '',
  ): IAction<String, void> => {
    return {
      payload: searchTerm,
      type: AutoSuggestAction.GET_AUTO_SUGGEST_REQUEST,
    };
  };

  public static getAutoSuggestResponse = (
    response: Object,
  ): IAction<Object, Object> => {
    return {
      data: response,
      type: AutoSuggestAction.GET_AUTO_SUGGEST_RESPONSE,
    };
  };

  public static getAutoSuggestError = (): IAction<void, void> => {
    return {
      type: AutoSuggestAction.GET_AUTO_SUGGEST_FAILED,
    };
  };
}
