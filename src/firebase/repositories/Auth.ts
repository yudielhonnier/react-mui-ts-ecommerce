import { getAuthDb } from '@/firebase';
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
  signInAnonymously,
  signInWithCustomToken,
  updateEmail,
  Auth,
  NextOrObserver,
  User,
} from 'firebase/auth';

class AuthRepository {
  // googleProvider: GoogleAuthProvider;
  auth: Auth;
  constructor() {
    this.auth = getAuthDb();
    // this.googleProvider = new GoogleAuthProvider();
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email.toLowerCase(), password);
  }

  // handleSignout() {
  //   return signOut(this.auth);
  // }

  // sendEmailRecoveryPassword(email) {
  //   return sendPasswordResetEmail(this.auth, email.toLowerCase());
  // }
  // getCurrentUser() {
  //   return this.auth.currentUser;
  // }
  setAuthStateChange(callback: NextOrObserver<User>) {
    return onAuthStateChanged(this.auth, callback);
  }
  createUser(email: string, pass: string) {
    return createUserWithEmailAndPassword(this.auth, email, pass);
  }
  // updateCurrentUser(data) {
  //   return updateProfile(this.auth.currentUser, data);
  // }
  // signWithGoogle() {
  //   return signInWithPopup(this.auth, this.googleProvider);
  // }
  // signAnonymous() {
  //   return signInAnonymously(this.auth);
  // }
  // signWithCustomToken(token) {
  //   return signInWithCustomToken(this.auth, token);
  // }
  // updateUserEmail(email) {
  //   return updateEmail(this.auth.currentUser, email);
  // }
}

const authRepository = new AuthRepository();

export default authRepository;
