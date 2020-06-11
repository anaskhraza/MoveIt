import {Maps} from '../../model/maps/Maps';
import IState from './IState';

export default interface AppState extends IState {
  Maps: Maps;
}
