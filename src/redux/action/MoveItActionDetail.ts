/**
 *
 * This file serve as Moovit detail action file
 */

import IAction from './IAction';

export default class MoveItAction {
    public static readonly GET_MOVE_DETAIL_REQUEST: string = 'MoveItAction.GET_MOVE_DETAIL_REQUEST';
    public static readonly GET_MOVE_DETAIL_RESPONSE: string =
        'MoveItAction.GET_MOVE_DETAIL_RESPONSE';
    public static readonly GET_MOVE_DETAIL_FAILED: string = 'MoveItAction.GET_MOVE_DETAIL_FAILED';

    public static getMoveItRequest = (coordinates: any, route: string): IAction<any, void> => {
        return {
            type: MoveItAction.GET_MOVE_DETAIL_REQUEST,
            payload: { coordinates: coordinates, route: route },
        };
    };

    public static getMoveItResponse = (response1: Object): any => {
        return {
            data: response1,
            type: MoveItAction.GET_MOVE_DETAIL_RESPONSE,
        };
    };

    public static getMoveItError = (): IAction<void, void> => {
        return {
            type: MoveItAction.GET_MOVE_DETAIL_FAILED,
        };
    };

    public static getMoveItErrorDefault = (): IAction<void, void> => {
        return {
            type: MoveItAction.GET_MOVE_DETAIL_DEFAULT,
        };
    };
}
