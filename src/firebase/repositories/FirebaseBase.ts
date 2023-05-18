import { serializeArray, serializeObject } from '@/utils/serialize';
import {
  getDocs,
  query,
  where,
  orderBy,
  limit,
  doc,
  addDoc,
  startAfter,
  updateDoc,
  setDoc,
  deleteDoc,
  limitToLast,
  endBefore,
  getDoc,
  Query,
  CollectionReference,
  DocumentData,
  WithFieldValue,
  DocumentReference,
  UpdateData,
} from 'firebase/firestore';

interface Page<T> {
  [fieldOrder: string]: T;
}

class Base<T extends DocumentData> {
  constructor(private collection: CollectionReference<T>) {
    this.collection = collection;
  }

  async getAll(): Promise<T[]> {
    const snapshot = await getDocs(this.collection);
    return serializeArray(snapshot);
  }

  async getCount(): Promise<number> {
    const snapshot = await getDocs(this.collection);
    return snapshot.size;
  }

  async getWithLimit(count: number): Promise<T[]> {
    const limitQuery = query(this.collection, limit(count));
    const snapshot = await getDocs(limitQuery);
    return serializeArray(snapshot);
  }

  async getWithLimitOrderBy(count: number, field: string, desc = false) {
    const direction = desc ? 'desc' : 'asc';
    const limitQuery = query(this.collection, orderBy(field, direction), limit(count));
    const snapshot = await getDocs(limitQuery);
    return serializeArray(snapshot);
  }

  async create(data: Omit<T, 'id' | 'createdAt'>) {
    const newDocRef = doc(this.collection);
    const newDoc = {
      ...data,
      id: newDocRef.id,
      createdAt: new Date().getTime(),
    } as WithFieldValue<T>;
    await setDoc(newDocRef, newDoc);
    return newDoc;
  }

  async createWithID(id: string, data: Omit<T, 'id' | 'createdAt'>) {
    const newDocRef = doc(this.collection.firestore, this.collection.id, id);
    const newDoc = {
      ...data,
      id: newDocRef.id,
      createdAt: new Date().getTime(),
    };
    await setDoc(newDocRef, newDoc);
    return newDoc;
  }

  async update(id: string, data: Partial<T>) {
    const ref = doc(this.collection.firestore, this.collection.id, id);
    return updateDoc(ref as DocumentReference<T>, data as UpdateData<T>);
  }

  async delete(id: string) {
    const ref = doc(this.collection.firestore, this.collection.id, id);
    return deleteDoc(ref);
  }

  async getPaginationNext(last: Page<T>, count: number, fieldOrder: 'asc' | 'desc') {
    const qry = query(
      this.collection,
      orderBy(fieldOrder),
      // eslint-disable-next-line security/detect-object-injection
      startAfter(last[fieldOrder]),
      limit(count)
    );
    const snapshot = await getDocs(qry);
    return serializeArray(snapshot);
  }

  async getPaginationPrev(first: Page<T>, count: number, fieldOrder: 'asc' | 'desc') {
    const qry = query(
      this.collection,
      orderBy(fieldOrder),
      endBefore(first[fieldOrder]),
      limitToLast(count)
    );
    const snapshot = await getDocs(qry);
    return serializeArray(snapshot);
  }

  async getByField<T>(field: string, value: T) {
    const qry = query(this.collection, where(field, '==', value));
    const snapshot = await getDocs(qry);
    return serializeArray(snapshot);
  }

  async getById(id: string) {
    const docRef = doc(this.collection, id);
    const docSnap = await getDoc(docRef);
    return serializeObject(docSnap);
  }

  async getInArray(arrayName: string, value: unknown) {
    const qry = query(this.collection, where(arrayName, 'array-contains', value));
    const snapshot = await getDocs(qry);
    return serializeArray(snapshot);
  }
}

export default Base;
