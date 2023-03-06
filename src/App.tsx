import AppSpin from './common/feedback/AppSpin';
import reducer, { initialState } from './context/reducer';
import { StateProvider } from './context/StateProvider';
import I18n from './providers/I18n';
import ReactQuery from './providers/ReactQuery';
import Routes from './routing/Routes';
import { Provider } from 'react-redux';
import { store } from '@/store/store';

import { ThemeProvider, CssBaseline } from '@mui/material';
import { Suspense } from 'react';

import { ColorModeContext, useMode } from './theme';
import { Theme } from '@mui/material/styles';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode as { toggleColorMode: () => void }}>
      <Provider store={store}>
        <StateProvider initialState={initialState} reducer={reducer}>
          <ReactQuery>
            <Suspense fallback={<AppSpin.Screen />}>
              <ThemeProvider theme={theme as Theme}>
                <I18n>
                  <CssBaseline />
                  <Routes />
                </I18n>
              </ThemeProvider>
            </Suspense>
          </ReactQuery>
        </StateProvider>
      </Provider>
    </ColorModeContext.Provider>
  );
}

export default App;
