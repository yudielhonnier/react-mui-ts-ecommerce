import { useEffect, useState } from 'react';
// import SignIn from "./components/SignIn";
import { Outlet } from 'react-router-dom';

import { AuthFunctionsContext, AuthStateContext } from './contexts/AuthContext';
import AuthFunctions from './contexts/AuthFunctions';
import AuthState from './contexts/AuthState';
import { auth } from './services/firebase';

export default function AuthProvider() {
  const [authState, setAuthState] = useState<AuthState | null>(null);
  const functions: AuthFunctions = {
    login: setAuthState,
    logout: () => setAuthState(null),
  };

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // TODO:MAKE SOME WITH THIS AUTHUSER
      // if (authUser) {
      // }
    });
  }, []);

  return (
    <AuthFunctionsContext.Provider value={functions}>
      {/* //TODO:FIX THIS NULL ASSERTION */}
      <AuthStateContext.Provider value={authState!}>
        {/* TODO:CONNECT TO FIREBASE */}
        {/* {authState ? <Outlet /> : <SignIn />} */}
        <Outlet />
      </AuthStateContext.Provider>
    </AuthFunctionsContext.Provider>
  );
}
