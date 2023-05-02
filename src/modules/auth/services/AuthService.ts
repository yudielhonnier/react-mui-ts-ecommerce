import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from './firebase';
import AuthState from '../contexts/AuthState';
import { error } from 'console';

export default class AuthService {
  // todo: add notifications,
  static login(email: string, password: string): Promise<AuthState> {
    return new Promise((resolve, reject) => {
      signInWithEmailAndPassword(auth, email, password)
        .then(async (auth) => {
          if (auth) {
            const name = auth.user.displayName ?? '';
            const accessToken = await auth.user.getIdToken();
            const refreshToken = auth.user.refreshToken;

            resolve({
              // TODO:get claims correctly
              user: { claims: [], email: email },
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
