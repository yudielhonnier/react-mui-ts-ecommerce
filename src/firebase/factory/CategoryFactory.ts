import {
  CollectionReference,
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from 'firebase/firestore';
import { getCollection } from '@/firebase';
import { Category } from '@/types/models/Category';

export function createCategoryCollectionReference(): CollectionReference<Category> {
  const collection = getCollection('categories') as CollectionReference<DocumentData>;
  return collection.withConverter({
    toFirestore(category: Category): DocumentData {
      return { ...category };
    },
    fromFirestore(
      snapshot: QueryDocumentSnapshot<DocumentData>,
      options: SnapshotOptions
    ): Category {
      const data = snapshot.data(options);
      return { ...data, id: snapshot.id } as Category;
    },
  });
}
