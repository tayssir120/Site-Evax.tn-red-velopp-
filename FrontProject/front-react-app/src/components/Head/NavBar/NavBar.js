import React from "react";
import Logo from "../Logo/Logo";
import { Menu } from "antd";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HashLink as Part } from "react-router-hash-link";

function NavBar() {
  return (
    <>
      <Menu
        mode="horizontal"
        style={{
          position: "fixed",
          width: "100%",
          marginLeft: "0px",
          top: "0",
          zIndex: "500",
          boxShadow: " 0 2px 4px 0 rgba(0,0,0,.2)",
        }}
      >
        <Menu.Item key="logo" disabled>
          <Logo></Logo>
        </Menu.Item>
        <Menu.Item key="accueil" style={{ marginTop: "10px" }}>
          <Part to="/accueil#acc" />
          Accueil
        </Menu.Item>
        <Menu.Item key="pageInscription" style={{ marginTop: "10px" }}>
          <Part to="/pageInscription#here" />
          S'inscrire
        </Menu.Item>
        <Menu.Item key="contact" style={{ marginTop: "10px" }}>
          <Part to="/accueil#contact" />
          Contactez-nous
        </Menu.Item>
        <Menu.Item key="citizen" style={{ marginTop: "10px" }}>
          <Part to="/AuthentificationEvax" />
          Espace citoyen
        </Menu.Item>
        <Menu.Item key="admin" style={{ marginTop: "10px" }}>
          <Part to="/admin/login" />
          Admin
        </Menu.Item>
        <Menu.Item key="validator" style={{ marginTop: "10px" }}>
          <Part to="/validation/connect" />
          Validateur
        </Menu.Item>
      </Menu>
    </>
  );
}

export default NavBar;
