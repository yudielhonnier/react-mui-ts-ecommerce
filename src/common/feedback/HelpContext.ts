import type { createContext, ReactNode } from 'react'

// @ts-ignore
export const SetHelpContext = createContext<(node: ReactNode) => void>()
