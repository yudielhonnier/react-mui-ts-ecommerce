import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { StateProvider } from "./context/StateProvider";
import reducer, { initialState } from "./context/reducer";
import ReactQuery from "./providers/ReactQuery";
import I18n from "./providers/I18n";
import Routes from "./routing/Routes";
import AppSpin from "./common/feedback/AppSpin";
import { createTheme, ThemeProvider } from "@mui/material";
import { blue, lightBlue } from "@mui/material/colors";

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
          height: 40,
          minHeight: 40,
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
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
  </React.StrictMode>
);
