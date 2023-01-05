import React from "react";
import { PhoneOutlined, GlobalOutlined } from "@ant-design/icons";
import { Card, Row, Col } from "antd";

function Contact() {
  return (
    <>
      <Card
        style={{
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: 10,
          height: "90%",
          boxShadow: " 0 2px 4px 0 rgba(0,0,0,.2)",
        }}
      >
        <h5 style={{  fontSize: 40 }}>Contactez nous pour plus d'information.</h5>
        <p style={{ fontSize: 20 }}>
          Appel Gratuit : Centre d'appel disponible Du lundi au Vendredi de 09h
          à 17h.
        </p>
        <p style={{ fontSize: 15 }}>
          <PhoneOutlined style={{fontSize: 20, color: "#d80000" }}/>
          &emsp; +(216) 8010 20 21
        </p>
        <p style={{ fontSize: 15 }}> 
          <GlobalOutlined style={{ fontSize: 20, color: "#d80000" }}/>
          &emsp; www.evax.tn
        </p>
      </Card>
    </>
  );
}

export default Contact;
