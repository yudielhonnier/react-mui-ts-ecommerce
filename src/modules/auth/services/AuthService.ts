import { signInWithEmailAndPassword } from 'firebase/auth';
import AuthState from '../contexts/AuthState';
import { auth } from './firebase';

export default class AuthService {
  static login(email: string, password: string): Promise<AuthState> {

    return new Promise((resolve, reject) =>
      {
        signInWithEmailAndPassword(auth, email, password);
        // TODO:add correctly values to user and tokens
       resolve({
          user: { claims: [], name: 'Pedro' },
          tokens: { accessToken: '123', refreshToken: '456' },
        });
      }
    );
  }
}
