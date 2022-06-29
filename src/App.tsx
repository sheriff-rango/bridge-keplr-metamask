import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";

import { createBrowserHistory } from "history";
import "@shoelace-style/shoelace/dist/themes/light.css";
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path";
import { ToastContainer } from "react-toastify";
import { WalletManagerProvider, WalletType } from "@noahsaso/cosmodal";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import junoPresets from "./constant/junoPresets";
import Home from "./pages/Home";
import ConnectWallets from "./pages/ConnectWallets";
import ReviewTransaction from "./pages/ReviewTransaction";
import ConfirmTransaction from "./pages/ConfirmTransaction";
import Submission from "./pages/Submission";

const history = createBrowserHistory();

setBasePath(
  "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.64/dist/"
);
function App() {
  const config = junoPresets;

  return (
    <WalletManagerProvider
      defaultChainId={config.chainId}
      enabledWalletTypes={[WalletType.Keplr, WalletType.WalletConnectKeplr]}
      walletConnectClientMeta={{
        name: "Bridge Keplr Metamask",
        description: "Bridge Keplr Metamask",
        url: window.location.origin,
        icons: [""],
      }}
    >
      <div className="main">
        <Router history={history}>
          <div className="container">
            <Switch>
              <Route exact={false} path="/home" component={Home} />
              <Route exact={false} path="/connect" component={ConnectWallets} />
              <Route
                exact={false}
                path="/review"
                component={ReviewTransaction}
              />
              <Route
                exact={false}
                path="/confirm"
                component={ConfirmTransaction}
              />
              <Route exact={false} path="/submission" component={Submission} />
              <Redirect to="/home" />
            </Switch>
          </div>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            hideProgressBar
            newestOnTop
            closeOnClick
            theme="colored"
          />
        </Router>
      </div>
    </WalletManagerProvider>
  );
}

export default App;
