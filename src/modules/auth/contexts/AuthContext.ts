import { createContext } from 'react';

import AuthFunctions from './AuthFunctions';
import AuthState from './AuthState';

export const AuthStateContext = createContext<AuthState | undefined>(undefined);

// @ts-ignore
export const AuthFunctionsContext = createContext<AuthFunctions>();
