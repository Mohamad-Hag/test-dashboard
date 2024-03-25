import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import Layout from "./components/layout/Layout";
import Header from "./components/header/Header";
import Sidebar from "./components/ui/Sidebar";
import { BrowserRouter } from "react-router-dom";
import ThemeContext from "./contexts/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Header />
        <Sidebar />
        <App />
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);
