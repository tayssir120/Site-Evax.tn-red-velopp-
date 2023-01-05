import React from "react";
import {
  MobileOutlined,
  MessageOutlined,
  PhoneOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { Card, Row, Col } from "antd";

function InscritHelp() {
  return (
    <>
    <Card
        style={{
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
          height: "90%",
          boxShadow: " 0 2px 4px 0 rgba(0,0,0,.2)",
        }}
      >
        <h5 style={{fontSize: 40 }}>Voulez-vous vous inscrire ?</h5>
        <p style={{ fontSize: 20 }}>Pour vous inscrire vous pouvez :</p>
        <p style={{ fontSize: 15 }}>
          <MobileOutlined style={{fontSize: 20, color: "#d80000" }}/>
          &emsp; Composer le <b>#2021*</b>
        </p>
        <p style={{ fontSize: 15 }}>
          <MessageOutlined style={{fontSize: 20, color: "#d80000" }}/>
          &emsp; Envoyer un SMS à <b>85 355</b>
        </p>
        <p style={{ fontSize: 15 }}>
          <PhoneOutlined style={{fontSize: 20, color: "#d80000" }}/>
          &emsp; Appeler le <b>80 102 021</b> du lundi au vendredi de 09h à 17h
        </p>
        <p style={{ fontSize: 15 }}>
          <GlobalOutlined style={{fontSize: 20, color: "#d80000" }}/>
          &emsp; Visiter notre site Evax
        </p>
      </Card>
    </>
  );
}

export default InscritHelp;
