/**
 *
 * This file serve as Autosuggest saga file
 */

import {put} from 'redux-saga/effects';
import {autoSuggestService} from '../../service/maps/AutoSuggestService';
import AutoSuggestAction from '../action/AutoSuggestAction';

function* getAutoSuggest(action: any) {
  try {
    const searchTerm: any = action.payload;

    if (searchTerm) {
      const resp1 = yield autoSuggestService.getAutoSuggest(searchTerm);
      console.log('resp1 =>', resp1);
      const addrArray: any = parseAutoSuggestReponse(resp1);

      yield put(AutoSuggestAction.getAutoSuggestResponse(addrArray));
    } else {
      yield put(AutoSuggestAction.getAutoSuggestError());
    }
  } catch (e) {
    console.log('errror', e);
    yield put(AutoSuggestAction.getAutoSuggestError());
  }
}

const parseAutoSuggestReponse = (resp: any) => {
  let finalResp = {};

  const respArray = resp.results;

  finalResp = respArray;
  return finalResp;
};

export default getAutoSuggest;
