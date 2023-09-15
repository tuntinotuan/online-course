import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from "./redux-toolkit/configureStore";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import "./i18n/i18n";
// import { GoogleOAuthProvider } from "@react-oauth/google";

const container = document.getElementById("root");
const root = createRoot(container);

const persistor = persistStore(store);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <GoogleOAuthProvider clientId="859313211078-j0hmj977fcs56n7l62jugtsut18h8app.apps.googleusercontent.com"> */}
        <BrowserRouter>
          <Suspense fallback="loading">
            <App />
            <ToastContainer></ToastContainer>
          </Suspense>
        </BrowserRouter>
        {/* </GoogleOAuthProvider> */}
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
