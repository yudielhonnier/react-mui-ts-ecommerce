import { createContext, Dispatch, useContext, useReducer } from 'react';

import reducer, { Action, AppState, initialState } from './reducer';

interface StateProviderProps {
  children: React.ReactNode;
  initialState: typeof initialState;
  reducer: typeof reducer;
}

export const StateContext = createContext<{
  state: AppState;
  dispatch: Dispatch<Action>;
}>({
  state: initialState,
  dispatch: (value: Action) => {
    null;
  },
});

export const StateProvider = ({ reducer, initialState, children }: StateProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <StateContext.Provider value={{ state, dispatch }}>{children}</StateContext.Provider>;
};

export const useStateValue = () => useContext(StateContext);
