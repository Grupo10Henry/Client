import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { Provider } from "react-redux"
import { persistor, store } from "./redux/store"
import { HashRouter } from "react-router-dom"
import ContextProvider from "./Context/Context.jsx"
import { PersistGate } from "redux-persist/integration/react"
import { GoogleOAuthProvider } from '@react-oauth/google';

import "./main.css"
import "tailwindcss/tailwind.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="93809201822-grqufhb5jii5ga2qn69hv1f458mrvcs3.apps.googleusercontent.com">
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <HashRouter>
          <ContextProvider>
            <App />
          </ContextProvider>
        </HashRouter>
      </Provider>
    </PersistGate>
</GoogleOAuthProvider>
  </React.StrictMode>
)
