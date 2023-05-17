import { getCollection } from '@/firebase';
import FirebaseBase from '@/firebase/repositories/FirebaseBase';
import Product from '@/modules/home/models/Product';
import { DocumentData } from 'firebase/firestore';
import { createProductCollectionReference } from '../factory/ProductFactory';

class ProductRepository extends FirebaseBase<Product> {
  constructor() {
    super(createProductCollectionReference());
  }
}

const productRepository = new ProductRepository();

export default productRepository;
