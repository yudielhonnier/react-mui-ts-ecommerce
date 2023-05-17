import { getCollection } from '@/firebase';
import FirebaseBase from '@/firebase/repositories/FirebaseBase';
import Product from '@/modules/home/models/Product';
import { DocumentData } from 'firebase/firestore';

class ProductRepository extends FirebaseBase<Product> {
  constructor() {
    super(getCollection<Product>('products'));
  }
}

const productRepository = new ProductRepository();

export default productRepository;
