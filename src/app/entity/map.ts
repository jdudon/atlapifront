import { User } from './user';
import { Agglomeration } from './agglomeration';

export interface Map {
   id: number;
   name: string;
   user: User;
   biomes: Array<string>;
   universeType: number;
   interestPoint: Array<string>;
   agglomeration: Array<Agglomeration>;
}
