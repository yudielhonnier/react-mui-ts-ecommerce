import { useEffect, useState } from 'react';
// import SignIn from "./components/SignIn";
import { Outlet } from 'react-router-dom';

import { AuthFunctionsContext, AuthStateContext } from './contexts/AuthContext';
import AuthFunctions from './contexts/AuthFunctions';
import AuthState from './contexts/AuthState';
import { auth } from './services/firebase';
import SignIn from './components/SignIn';

export default function AuthProvider() {
  // TODO: INVESTIGATE IF THIS UNDEFINED IS CORRECTLY
  const [authState, setAuthState] = useState<AuthState | undefined>();
  const functions: AuthFunctions = {
    login: setAuthState,
    logout: () => setAuthState(undefined),
  };

  useEffect(() => {
    console.log('authState', authState);
    auth.onAuthStateChanged((authUser) => {
      // TODO:MAKE SOME WITH THIS AUTHUSER
      if (authUser) {
        console.log('authUser', authUser);
      }
    });
  }, [authState]);

  return (
    <AuthFunctionsContext.Provider value={functions}>
      <AuthStateContext.Provider value={authState}>
        {/* {authState ? <Outlet /> : <SignIn />} */}
        <Outlet />
      </AuthStateContext.Provider>
    </AuthFunctionsContext.Provider>
  );
}
