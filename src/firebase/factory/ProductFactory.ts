import Product from '@/modules/home/models/Product';
import {
  CollectionReference,
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from 'firebase/firestore';
import { getCollection } from '@/firebase';

export function createProductCollectionReference(): CollectionReference<Product> {
  const collection = getCollection('products') as CollectionReference<DocumentData>;
  return collection.withConverter({
    toFirestore(product: Product): DocumentData {
      return { ...product };
    },
    fromFirestore(
      snapshot: QueryDocumentSnapshot<DocumentData>,
      options: SnapshotOptions
    ): Product {
      const data = snapshot.data(options);
      return { ...data, id: snapshot.id } as Product;
    },
  });
}
