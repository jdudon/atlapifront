import { Map } from './map';

export interface User {
   id: number;
   username: string;
   roles: Array<string>;
   password: string;
   email: string;
   maps: Array<Map>;
}
