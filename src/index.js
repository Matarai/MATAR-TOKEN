import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  ThirdwebProvider,
  metamaskWallet,
  walletConnect,
} from "@thirdweb-dev/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "./styles/globals.css";
import { Toaster } from "sonner";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = process.env.REACT_APP_ACTIVE_CHAIN;

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <ThirdwebProvider
          supportedWallets={[
            metamaskWallet({
              recommended: true,
            }),
          ]}
          activeChain={activeChain}
          clientId={process.env.REACT_APP_CLIENT_ID}
        >
          <Toaster />
          <App />
        </ThirdwebProvider>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
