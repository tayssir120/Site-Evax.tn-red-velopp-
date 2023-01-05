import React from "react";
import NavBar from "./NavBar/NavBar";
import { Layout, Row, Col, Divider } from "antd";
import Welcome from "./Welcome/Welcome";
import Info from "./Info/Info";
import "antd/dist/antd.css";

function Head() {
  const { Header } = Layout;
  return (
    <>
      <div className="header" id="acc">
        <NavBar></NavBar>
        <Row justify="center" align="middle">
          <Col flex={2.5}>
            <Info></Info>
          </Col>
          <Col flex={2.5}>
            <Welcome></Welcome>
          </Col>
        </Row>
      </div>
      <div id="here"></div>
    </>
  );
}

export default Head;
