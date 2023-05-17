import { DocumentSnapshot, DocumentData, QuerySnapshot } from 'firebase/firestore';

export function serializeObject(data: DocumentSnapshot<DocumentData>) {
  let newData = {};
  if (data.exists()) {
    newData = { id: data.id, ...data.data() };
  }
  return newData;
}

export function serializeArray(QuerySnapshot: QuerySnapshot<unknown>) {
  const data = QuerySnapshot.docs.reduce(
    (acc: any, curr: any) => [...acc, serializeObject(curr)],
    []
  );
  return data;
}
