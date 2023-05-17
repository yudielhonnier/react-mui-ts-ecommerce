import { DocumentData } from 'firebase/firestore';

export default interface Product extends DocumentData {
  id: string;
  name: string;
  productType: string;
  price: number;
  rating: number;
  quantity: number;
  image: string;
  decriptionProd: string;
}
