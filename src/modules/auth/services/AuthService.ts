import { signInWithEmailAndPassword } from 'firebase/auth'

import { auth } from './firebase'
import AuthState from '../contexts/AuthState'

export default class AuthService {
  static login(email: string, password: string): Promise<AuthState> {
    return new Promise((resolve) => {
      signInWithEmailAndPassword(auth, email, password)
      // TODO:add correctly values to user and tokens
      resolve({
        user: { claims: [], name: 'Pedro' },
        tokens: { accessToken: '123', refreshToken: '456' },
      })
    })
  }
}
