import { signInWithEmailAndPassword } from 'firebase/auth';

// import { auth } from './firebase';
import AuthState from '../contexts/AuthState';
import { error } from 'console';
import authRepository from '@/firebase/repositories/Auth';

export default class AuthService {
  // todo: add notifications,
  static login(email: string, password: string): Promise<AuthState> {
    return new Promise((resolve, reject) => {
      authRepository
        .login(email, password)
        .then(async (auth) => {
          if (auth) {
            const name = auth.user.displayName ?? '';
            const id = auth.user.uid;
            const accessToken = await auth.user.getIdToken();
            const refreshToken = auth.user.refreshToken;
            resolve({
              // TODO:get claims correctly
              user: { id: id, claims: [], email: email },
              tokens: { accessToken: accessToken, refreshToken: refreshToken },
            });
          }
        })
        .catch((err) => {
          reject(new Error('User is not authorized'));
        });
    });
  }
}
