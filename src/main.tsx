import { createTheme, ThemeProvider } from '@mui/material';
import { blue, lightBlue } from '@mui/material/colors';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import AppSpin from './common/feedback/AppSpin';
import reducer, { initialState } from './context/reducer';
import { StateProvider } from './context/StateProvider';
import I18n from './providers/I18n';
import ReactQuery from './providers/ReactQuery';
import Routes from './routing/Routes';
import { Provider } from 'react-redux';
import { store } from '@/store/store';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: lightBlue[500],
    },
  },
  components: {
    MuiToolbar: {
      styleOverrides: {
        dense: {
          height: 44,
          minHeight: 44,
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <StateProvider initialState={initialState} reducer={reducer}>
        <ReactQuery>
          <Suspense fallback={<AppSpin.Screen />}>
            <ThemeProvider theme={theme}>
              <I18n>
                <Routes />
              </I18n>
            </ThemeProvider>
          </Suspense>
        </ReactQuery>
      </StateProvider>
    </Provider>
  </React.StrictMode>
);
