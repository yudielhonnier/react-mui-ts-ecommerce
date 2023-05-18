import { useMutation } from '@tanstack/react-query';

import AuthState from '../contexts/AuthState';
import AuthService from '../services/AuthService';

export default function useSignIn() {
  const { mutateAsync, isLoading } = useMutation<
    AuthState,
    Error,
    { email: string; password: string }
  >(({ email, password }) => AuthService.login(email, password));
  return { signIn: mutateAsync, isLoading };
}
