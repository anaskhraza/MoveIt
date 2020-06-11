/**
 * Obseleted NOT IN USE
 */

import CommonService from '../CommonService';
import Map from '../../model/maps/Maps';

class MapService extends CommonService<Map> {
  constructor() {
    super();
    this.rootURL = '';
  }

  async getAutoSuggest(query: string): Promise<Map[]> {
    try {
      const suggestURL = `http://dev.virtualearth.net/REST/v1/Autosuggest?query=${query}&userCircularMapView=25.35485,51.1839,100000000&includeEntityTypes=Address,Place&countryFilter=QA&userRegion=QA&key=AgZ24OCoHOKRYKwSjYxRVnSNEpsGF_0ytdlWyZ9eIGHxKzVz7AhS2xJX0em5wT1T`;

      const response = await fetch(suggestURL);
      if (!response.ok) {
        throw new Error('Cannot get data');
      }

      return response.json();
    } catch (error) {
      console.log('error => ', error);
      throw error;
    }
  }

  async getCoordinates(
    localityParam: string,
    addressParam: string,
  ): Promise<Map[]> {
    try {
      const locality = encodeURIComponent(localityParam);
      const address = encodeURIComponent(addressParam);
      const suggestURL = `http://dev.virtualearth.net/REST/v1/Locations?countryRegion=QA&locality=${locality}&addressLine=${address}&key=AgZ24OCoHOKRYKwSjYxRVnSNEpsGF_0ytdlWyZ9eIGHxKzVz7AhS2xJX0em5wT1T`;

      const response = await fetch(suggestURL);
      if (!response.ok) {
        throw new Error('Cannot get data');
      }

      return response.json();
    } catch (error) {
      console.log('error => ', error);
      throw error;
    }
  }

  async getPinPointMap(
    coordinates1: Array<String>,
    coordinates2: Array<String>,
  ): Promise<Map[]> {
    try {
      let resp: any = {data: ''};
      const [lat1, long1] = coordinates1;
      const [lat2, long2] = coordinates2;

      const suggestURL = `https://dev.virtualearth.net/REST/v1/Imagery/Map/Road/Routes?wp.0=${lat1},${long1};64;1&wp.1=${lat2},${long2};66;2&mapSize=800,800&key=AgZ24OCoHOKRYKwSjYxRVnSNEpsGF_0ytdlWyZ9eIGHxKzVz7AhS2xJX0em5wT1T`;

      const response = await fetch(suggestURL);
      if (!response.ok) {
        throw new Error('Cannot get data');
      }

      if (response.url) {
        resp.data = response.url;
      }
      return resp;
    } catch (error) {
      console.log('error => ', error);
      throw error;
    }
  }

  async getPinPointMapFromArray(coordinates: Array<String>): Promise<Map[]> {
    try {
      let resp: any = {data: ''};
      let coordinatesParam = coordinates || [];
      let coordinatesParamCount = coordinatesParam.length;
      if (coordinatesParam.length > 25) {
        coordinatesParam = coordinatesParam.slice(0, 24);
        coordinatesParamCount = 24;
      }
      let coordString = '';
      coordinatesParam.forEach((obj, index) => {
        if (index === 0) {
          coordString += `wp.${index}=${obj.toString()};64;1&`;
        } else if (index === coordinatesParamCount - 1) {
          coordString += `wp.${index}=${obj.toString()};66;2&`;
        } else {
          coordString += `wp.${index}=${obj.toString()}&`;
        }
      });

      const suggestURL = `https://dev.virtualearth.net/REST/v1/Imagery/Map/Road/Routes?${coordString}mapSize=800,800&key=AgZ24OCoHOKRYKwSjYxRVnSNEpsGF_0ytdlWyZ9eIGHxKzVz7AhS2xJX0em5wT1T`;

      const response = await fetch(suggestURL);
      if (!response.ok) {
        throw new Error('Cannot get data');
      }

      if (response.url) {
        resp.data = response.url;
      }
      return resp;
    } catch (error) {
      console.log('error => ', error);
      throw error;
    }
  }

  async getAll(): Promise<Map[]> {
    try {
      const rootURL =
        'https://dev.virtualearth.net/REST/v1/Imagery/Map/Road/25.3548,51.1839/9?mapSize=800,800&mapLayer=Basemap,Buildings&key=AgZ24OCoHOKRYKwSjYxRVnSNEpsGF_0ytdlWyZ9eIGHxKzVz7AhS2xJX0em5wT1T';
      let resp: any = {data: ''};

      const response = await fetch(rootURL);
      if (!response.ok) {
        throw new Error('Cannot get data');
      }
      if (response.url) {
        resp.data = response.url;
      }
      return resp;
    } catch (error) {
      console.log('error => ', error);
      throw error;
    }
  }

  async searchData(search: String): Promise<Map[]> {
    try {
      const response = await fetch(this.rootURL + '?searchTerm=' + search);
      if (!response.ok) {
        throw new Error('cannot get data');
      }
      return response.json();
    } catch (error) {
      console.log('error => ', error);
      throw error;
    }
  }
}

export const mapService = new MapService();
