import { createContext, useContext, useReducer, Dispatch } from "react";

import reducer, { initialState, AppState, Action } from "./reducer";

interface StateProviderProps {
  children: React.ReactNode;
  initialState: typeof initialState;
  reducer: typeof reducer;
}

export const StateContext = createContext<{
  state: AppState;
  dispatch: Dispatch<Action>;
}>({ state: initialState, dispatch: (action: Action) => {} });

export const StateProvider = ({
  reducer,
  initialState,
  children,
}: StateProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
