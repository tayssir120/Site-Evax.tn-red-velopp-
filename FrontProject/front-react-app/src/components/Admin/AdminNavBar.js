import React from "react";
import Logo from "../Head/Logo/Logo";
import { Menu } from "antd";
import "antd/dist/antd.css";
import { NavLink } from "react-router-dom";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HashLink as Part } from "react-router-hash-link";

function AdminNavBar() {
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
        <Menu.Item key="Tableau de bord" style={{ marginTop: "10px" }}>
          <Part to="/dashboard" />
          Tableau de bord
        </Menu.Item>
        <Menu.Item key="Vaccins" style={{ marginTop: "10px" }}>
          <Part to="/vaccins" />
          Vaccins
        </Menu.Item>
        <Menu.Item key="Centres de vaccinations" style={{ marginTop: "10px" }}>
          <Part to="/centresDeVaccination" />
          Centres de vaccinations
        </Menu.Item>
        <Menu.Item key="Pharmacies" style={{ marginTop: "10px" }}>
          <Part to="/pharmacies" />
          Pharmacies
        </Menu.Item>
        <Menu.Item key="Journées portes ouvertes" style={{ marginTop: "10px" }}>
          <Part to="/ListJPO" />
          Journées portes ouvertes
        </Menu.Item>
        <Menu.Item key="Volontaires" style={{ marginTop: "10px" }}>
          <Part to="/ListVolunteer" />
          Volontaires
        </Menu.Item>
        <Menu.Item key="logout" style={{ marginTop: "10px" }}>
        
        <NavLink
                to="/admin/login"
                activeClassName="active"
                isActive={(_, { pathname }) =>
                  pathname.match("/hello") || pathname === "/"
                }
              >
                 Déconnexion
        </NavLink>    
               
      </Menu.Item>
      </Menu>
    </>
  );
}

export default AdminNavBar;
