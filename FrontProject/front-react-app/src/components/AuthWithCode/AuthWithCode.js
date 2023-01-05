import React from "react";
import { Divider, Menu } from 'antd';
import Header  from "./Header";
import Footer from "./Footer";
import Authentification from "./Authentification"

function AuthWithCode() {
  return (
    <>
      <Menu mode="vertical">
       <Header/>
       <Authentification/>
       <Footer/>
      </Menu>
    </>
  );
}

export default AuthWithCode;