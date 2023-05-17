import { FirebaseApp, initializeApp } from 'firebase/app';
import { getFirestore, collection, Firestore } from 'firebase/firestore';
import { Auth, getAuth } from 'firebase/auth';
import { FirebaseStorage, getStorage } from 'firebase/storage';
import { Functions, getFunctions, httpsCallable } from 'firebase/functions';

import config from './config';

let authDbRef: Auth;
let firebaseRef: FirebaseApp;
let firestoreDbRef: Firestore;
let storageRef: FirebaseStorage;
let functionsRef: Functions;

export function setupFirebase() {
  if (!firebaseRef) {
    const options = {
      apiKey: config.apiKey,
      projectId: config.projectId,
      authDomain: config.authDomain,
      databaseURL: config.databaseURL,
      storageBucket: config.storageBucket,
      messagingSenderId: config.messagingSenderId,
    };
    firebaseRef = initializeApp(options);
  }
  return firebaseRef;
}

export function getFirestoreDB() {
  const app = setupFirebase();
  if (!firestoreDbRef) {
    firestoreDbRef = getFirestore(app);
  }
  return firestoreDbRef;
}

export function getCollection<T>(name: string) {
  const db = getFirestoreDB();
  const collectionRef = collection(db, name);
  return collectionRef;
}

export function getAuthDb(name: string) {
  const app = setupFirebase();
  if (!authDbRef) {
    authDbRef = getAuth(app);
  }
  return authDbRef;
}

export function getStorageRef() {
  const app = setupFirebase();
  if (!storageRef) {
    storageRef = getStorage(app);
  }
  return storageRef;
}

export function getFunctionsRef() {
  const app = setupFirebase();
  if (!functionsRef) {
    functionsRef = getFunctions(app);
  }
  return functionsRef;
}

export function getFunction(name: string) {
  const functions = getFunctionsRef();
  return httpsCallable(functions, name);
}
