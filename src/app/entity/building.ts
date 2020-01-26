import { Agglomeration } from './agglomeration';

export interface Building {
   id: number;
   name: string;
   function: string;
   agglomeration: Array<Agglomeration>;
   size: number;
   leader: string;
}
