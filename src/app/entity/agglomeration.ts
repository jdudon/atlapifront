import { Map } from './map';
import { Building } from './building';

export interface Agglomeration {
   id: number;
   name: string;
   map: Array<Map>;
   size: number;
   leader: string;
   building: Array<Building>;
}
