import React from "react";
import Logo from "../Logo/Logo"
import Logo1 from "../Logo/Logo1"
import Complaint from "../Complaint/Complaint"
import LanguageButton from "../Language/LanguageButton";
import DeconnectionButton from "../Deconnection/DeconnectionButton";

import { Menu } from "antd";

function NavBar() {
  return (
    <>
      <Menu  mode="vertical" >
        <Logo/>
        <Logo1/>  
        <Complaint/>
        <LanguageButton/>
        <DeconnectionButton/>
      </Menu>
    </>
  );
}

export default NavBar;
