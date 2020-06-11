import {
  SUBWAYG,
  SUBWAYG1,
  CARG,
  CARG1,
  BIKEG,
  BIKEG1,
  WALKG,
  WALKG1,
} from '../assets/index';

export const ROUTE_OPTION = [
  {type: 'subway', image: SUBWAYG, image1: SUBWAYG1},
  {type: 'bus', image: CARG, image1: CARG1},
  {type: 'bike', image: BIKEG, image1: BIKEG1},
  {type: 'walk', image: WALKG, image1: WALKG1},
];

export const CONSTANTS = {
  APPLICATION_PDF: 'application/pdf',
  APPLICATIONS_IMAGE: 'application/image',
  IOS: 'ios',
  ANDROID: 'android',
};

export const MOOVIT_API_KEY = 'mannai_61523782009';
export const MOOVIT_AREA_CODE = '5877';
export const GOOGLE_API_KEY = 'AIzaSyBDYWcB8XZZGZieUwAmtRC8rTGHpxP4VFo';
export const API_GET_SUGGESTED =
  'https://api.moovitapp.com/services-app/services/EX/API/GetSuggestedRoutes';
export const API_GET_DETAILED =
  'https://api.moovitapp.com/services-app/services/EX/API/GetDetailedItineraryShape';
export const API_GET_PLACES_DETAIL =
  'https://maps.googleapis.com/maps/api/place/textsearch/json?query=';
export const API_GET_WALK_ROUTES =
  'https://api.moovitapp.com/services-app/services/EX/API/GetWalkingRoutes';
