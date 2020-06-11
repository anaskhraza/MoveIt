/**
 *
 * This file serve as Moovit action file
 */

import IAction from './IAction';

export default class MoveItAction {
  public static readonly GET_MOVE_ROUTES_REQUEST: string =
    'MoveItAction.GET_MOVE_ROUTES_REQUEST';
  public static readonly GET_MOVE_ROUTES_RESPONSE: string =
    'MoveItAction.GET_MOVE_ROUTES_RESPONSE';
  public static readonly GET_MOVE_ROUTES_FAILED: string =
    'MoveItAction.GET_MOVE_ROUTES_FAILED';

  public static getMoveItRequest = (
    coordinates: any,
  ): IAction<String, void> => {
    return {
      type: MoveItAction.GET_MOVE_ROUTES_REQUEST,
      payload: coordinates,
    };
  };

  public static getMoveItResponse = (
    response: Object,
  ): IAction<Object, any> => {
    return {
      data: response,
      type: MoveItAction.GET_MOVE_ROUTES_RESPONSE,
    };
  };

  public static getMoveItError = (): IAction<void, void> => {
    return {
      type: MoveItAction.GET_MOVE_ROUTES_FAILED,
    };
  };
}
