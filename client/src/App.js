import React from "react";
import Router from "./Router";
import axios from "axios"
import { AuthContextProvider } from "./Context/AuthContext";
import 'bootstrap/dist/css/bootstrap.min.css';

axios.default.withCredentials = true

function App() {
  return (
    <AuthContextProvider>
      <Router />
    </AuthContextProvider>
  );
}

export default App;