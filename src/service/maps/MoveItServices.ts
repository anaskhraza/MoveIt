import CommonService from '../CommonService';
import Map from '../../model/maps/Maps';
import {
  API_GET_SUGGESTED,
  MOOVIT_API_KEY,
  MOOVIT_AREA_CODE,
  API_GET_DETAILED,
  API_GET_WALK_ROUTES,
} from '../../util/Constants';

const Headers: any = {
  'Content-Type': 'application/x-www-form-urlencoded',
  API_KEY: MOOVIT_API_KEY,
  MOOVIT_METRO_ID: MOOVIT_AREA_CODE,
};

class MoveItServices extends CommonService<Map> {
  constructor() {
    super();
    this.rootURL = '';
  }

  async getRoutes(
    coord1: Array<string>,
    coord2: Array<string>,
    transitType: Array<string>,
  ) {
    try {
      const [lat1, lon1]: Array<string> = coord1;
      const [lat2, lon2]: Array<string> = coord2;
      let data: any = {
        from: {lat: lat1, lon: lon1},
        to: {lat: lat2, lon: lon2},
        timeType: 2,
        transitTypes: transitType, //['Tram', 'Subway', 'Rail', 'Bus'],
        modeTypes: ['PublicTransit'],
        searchType: 'Fastest',
      };
      let URL = `${API_GET_SUGGESTED}`;
      if (transitType.length > 0 && transitType[0] === 'Walk') {
        data = {
          from: {lat: lat1, lon: lon1},
          to: {lat: lat2, lon: lon2},
          timeType: 2,
        };
        URL = API_GET_WALK_ROUTES;
      }

      this.rootURL = URL;

      console.log('posr Data', data);
      const optVal = {
        headers: Headers,
        method: 'POST',
        body: JSON.stringify(data),
      };
      let response: any = await this.postData(optVal);
      if (transitType[0] === 'Walk') {
        response = {summaries: [response]};
      }
      console.log('response => ', response);
      return response;
    } catch (error) {
      console.log('error => ', error);
      throw error;
    }
  }

  async getRouteDetail(itenaryIdParam: string) {
    try {
      const itenaryId: string = itenaryIdParam;
      // console.log('  => ', itenaryId);

      const URL = `${API_GET_DETAILED}`;
      this.rootURL = URL;
      const data = {itineraryId: itenaryId};
      const optVal = {
        headers: Headers,
        method: 'POST',
        body: JSON.stringify(data),
      };
      const response = await this.postData(optVal);

      return response;
    } catch (error) {
      console.log('error => ', error);
      throw error;
    }
  }
}

export const moveItServices = new MoveItServices();
