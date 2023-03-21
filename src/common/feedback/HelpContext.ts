<<<<<<< HEAD
import type { ReactNode } from 'react';
import { createContext } from 'react';
=======
import type { createContext, ReactNode } from 'react';
>>>>>>> 6d42ad3 (fix: lint fix)

// @ts-ignore
export const SetHelpContext = createContext<(node: ReactNode) => void>();
