import React from "react";
import Contact from "./Contact/Contact";
import InscritHelp from "./InscritHelp/InscritHelp";
import { Card, Row, Col } from "antd";

function Help() {
  return (
    <>
      <div id="contact">
        <Card
          style={{
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 100,
            backgroundColor: "rgb(248, 245, 245)"
          }}
        >
          <Row>
            <Col span={12}>
              <Contact></Contact>
            </Col>
            <Col span={12}>
              <InscritHelp></InscritHelp>
            </Col>
          </Row>
        </Card>
      </div>
    </>
  );
}

export default Help;
