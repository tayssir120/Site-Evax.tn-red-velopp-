import React from "react";
import Img from "./Img";
import Registred from "./Registred";
import { Menu, Card, Button, Row, Col } from "antd";

function Info() {
  return (
    <>
      <div
        style={{
          width: "600px",
          height: 500,
          marginTop: 80,
          marginLeft: 50,
          
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            
            paddingTop: 100,
            paddingLeft: 50
          }}
        >
          <Row>
            <Col>
              <Img></Img>
            </Col>
            <Col>
              <Registred></Registred>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Info;
