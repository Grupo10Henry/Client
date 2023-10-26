import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { Provider } from "react-redux"
import { store } from "./redux/store"
import "./main.css"
import "tailwindcss/tailwind.css"
import { BrowserRouter } from "react-router-dom"
import ContextProvider from "./Context/Context.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ContextProvider>
          <App />
        </ContextProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
