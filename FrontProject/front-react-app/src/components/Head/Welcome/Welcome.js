import React from "react";
import { Menu, Card, Button } from "antd";
import { CheckCircleOutlined, MedicineBoxOutlined } from "@ant-design/icons";
import { HashLink as Link } from 'react-router-hash-link';

function Welcome() {
  return (
    <>
      <div
        style={{
          marginLeft: "-200px",
          opacity: 1,
          width: "600px",
          height: 500,
          marginTop: 80,
        }}
      >
        <div
          style={{
            display: "inline-block",
            height: "100%",
            width: "100%",
            paddingTop: 80,
            paddingLeft: 50,
          }}
        >
          <h3 style={{ color: "white", fontSize: 30, textAlign: "left" }}>
            BIENVENUE AU PORTAIL DE VACCINATION CONTRE LE COVID-19
          </h3>
          <h4 style={{ color: "white", fontSize: 15, fontWeight: "normal" }}>
            Ensemble contre le COVID-19
          </h4>
          <Link to="/pageInscription#here">
            <Button
            size="large"
            shape="round"
            icon={<CheckCircleOutlined style={{ fontSize: 20 }} />}
            style={{
              backgroundColor: "#d80000",
              color: "white",
              borderColor: "#d80000",
              width:"100%",
              textAlign:"left"
            }}
          >
            Inscrivez-vous à la compagne de vaccination
          </Button></Link>

          <Link to="/inscriptionDansPharmacie#pharma">
          <Button
            size="large"
            shape="round"
            icon={<MedicineBoxOutlined style={{ fontSize: 20 }} />}
            style={{
              marginTop: 10,
              backgroundColor: "#ffc107",
              color: "white",
              borderColor: "#ffc107",
              width:"100%",
              textAlign:"left"
            }}
          >
            Vaccination chez une pharmacie
          </Button></Link>
        </div>
      </div>
    </>
  );
}

export default Welcome;
