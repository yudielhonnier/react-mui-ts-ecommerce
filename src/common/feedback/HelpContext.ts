import type { ReactNode } from 'react';
import { createContext } from 'react';

// @ts-ignore
export const SetHelpContext = createContext<(node: ReactNode) => void>();
