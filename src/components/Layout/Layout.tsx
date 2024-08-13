import React from "react";
import { BrowserRouter } from "react-router-dom"
import Routers from "../../routers/Routers.tsx";
import Header from "../Header/Header.tsx";
import "../../styles/layout.css";
import Footer from "../Footer/Footer.tsx";

const Layout = () => {
  return (

    <BrowserRouter>
      <div className="layout">
        <Header />
        <div className="main-route">
          <Routers />
        </div>
        <Footer />
      </div>
    </BrowserRouter >

  );
};

export default Layout;
