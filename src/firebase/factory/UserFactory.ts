import User from '@/modules/auth/models/User';
import {
  CollectionReference,
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from 'firebase/firestore';
import { getCollection } from '@/firebase';

export function createUserCollectionReference(): CollectionReference<User> {
  const collection = getCollection('users') as CollectionReference<DocumentData>;
  return collection.withConverter({
    toFirestore(user: User): DocumentData {
      return { ...user };
    },
    fromFirestore(snapshot: QueryDocumentSnapshot<DocumentData>, options: SnapshotOptions): User {
      const data = snapshot.data(options);
      return { ...data, id: snapshot.id } as User;
    },
  });
}
