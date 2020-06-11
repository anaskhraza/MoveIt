import Maps from '../../../model/maps/Maps';
import IState from '../IState';

export default interface MapsState extends IState {
  maps?: Maps;
}
