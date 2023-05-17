import Product from '@/modules/home/models/Product';
import {
  CollectionReference,
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from 'firebase/firestore';

class ProductCollectionReference extends CollectionReference<Product> {
  public converter = {
    toFirestore(product: Product): DocumentData {
      return { ...product };
    },
    fromFirestore(
      snapshot: QueryDocumentSnapshot<DocumentData>,
      options: SnapshotOptions
    ): Product {
      const data = snapshot.data(options);
      return { ...data, id: snapshot.id };
    },
  };
}
