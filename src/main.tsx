import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { StateProvider } from "./context/StateProvider";
import reducer, { initialState } from "./context/reducer";
import ReactQuery from "./providers/ReactQuery";
import I18n from "./providers/I18n";
import Routes from "./routing/Routes";
import AppSpin from "./common/feedback/AppSpin";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <ReactQuery>
        <Suspense fallback={<AppSpin.Screen />}>
          <I18n>
            <Routes />
          </I18n>
        </Suspense>
      </ReactQuery>
    </StateProvider>
  </React.StrictMode>
);
