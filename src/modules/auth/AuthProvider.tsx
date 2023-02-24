import { useEffect, useState } from "react";
import AuthState from "./contexts/AuthState";
import AuthFunctions from "./contexts/AuthFunctions";
import { AuthFunctionsContext, AuthStateContext } from "./contexts/AuthContext";
import SignIn from "./components/SignIn";
import { Outlet } from "react-router-dom";
import { auth } from "./services/firebase";

export default function AuthProvider() {
  const [authState, setAuthState] = useState<AuthState | null>(null);
  const functions: AuthFunctions = {
    login: setAuthState,
    logout: () => setAuthState(null),
  };
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("authUser", authUser);
      if (authUser) {
      }
    });
  }, []);

  return (
    <AuthFunctionsContext.Provider value={functions}>
      <AuthStateContext.Provider value={authState!}>
        {/* TODO:SignIn route is undefine */}
        {authState ? <Outlet /> : <SignIn />}
      </AuthStateContext.Provider>
    </AuthFunctionsContext.Provider>
  );
}
