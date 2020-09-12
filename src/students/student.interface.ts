
import {Document} from 'mongoose'
export interface Student extends Document  {
  name: string;
  age: number;
  email: string;
  course: number;
}
