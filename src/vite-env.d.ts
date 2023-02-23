// to use import.meta
/// <reference types="vite/client" />

interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_APP_TITLE: string
  readonly VITE_APP_FIREBASE_API_KEY: string
  readonly VITE_APP_FIREBASE_AUTH_DOMAIN: string
  readonly VITE_APP_FIREBASE_PROJECT_ID: string
  readonly VITE_APP_FIREBASE_STORAGE_BUCKED: string
  readonly VITE_APP_FIREBASE_MESSAGING_SENDER_ID: string
  readonly VITE_APP_FIREBASE_APP_ID: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}