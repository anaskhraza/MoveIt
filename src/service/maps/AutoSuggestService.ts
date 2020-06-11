import CommonService from '../CommonService';
import Map from '../../model/maps/Maps';
import {API_GET_PLACES_DETAIL, GOOGLE_API_KEY} from '../../util/Constants';

class AutoSuggestServices extends CommonService<Map> {
  constructor() {
    super();
    this.rootURL = '';
  }

  async getAutoSuggest(query: string): Promise<Map[]> {
    const queryParam = query.replace(/\s/g, '+');
    const suggestURL = `${API_GET_PLACES_DETAIL}${queryParam}&key=${GOOGLE_API_KEY}`;

    this.rootURL = suggestURL;
    return await this.getAll();
  }
}

export const autoSuggestService = new AutoSuggestServices();
