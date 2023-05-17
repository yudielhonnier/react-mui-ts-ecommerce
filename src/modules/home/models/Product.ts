import { DocumentData } from 'firebase/firestore';

export default interface Product extends DocumentData {
  id: string;
  name: string;
  type: string;
  price: number;
  rating: number;
  quantity: number;
  image: string;
  decription: string;
}
