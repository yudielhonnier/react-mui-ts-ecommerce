import { DocumentData } from 'firebase/firestore';
import { IconPath } from './IconPath';

export interface Category extends DocumentData {
  id: string;
  name: string;
  image: string;
}
