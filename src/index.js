import React from "react";
import { createRoot } from "react-dom/client"; // 🆕 React 18
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from "./contexts/DataProvider";
import { AuthProvider } from "./contexts/AuthProvider";
import { UserProvider } from "./contexts/UserDataProvider";
import { AddressProvider } from "./contexts/AddressProvider";

if (
  process.env.NODE_ENV === "development" ||
  process.env.REACT_APP_ENABLE_MIRAGE === "true"
) {
  makeServer({ environment: "development" });
}


// 🆕 This replaces ReactDOM.render
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <DataProvider>
          <UserProvider>
            <AddressProvider>
              <App />
            </AddressProvider>
          </UserProvider>
        </DataProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
