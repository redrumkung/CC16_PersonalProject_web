// import React from 'react';
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import AuthContextProvider from "./features/auth/contexts/AuthContext.jsx";
import PostContextProvider from "./features/create/contexts/PostContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <AuthContextProvider>
    <PostContextProvider>
    <App />
  </PostContextProvider>
  </AuthContextProvider>
  // </React.StrictMode>,
);
