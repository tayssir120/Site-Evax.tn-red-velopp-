import React from "react";
import {
  DollarOutlined,
  ExclamationCircleOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { Card, Row, Col } from "antd";

function Questions() {
  return (
    <>
      <div>
        <Card
          bordered={false}
          style={{
            width: "90%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 100,
            marginBottom: 100,
          }}
        >
          <h2 style={{ textAlign: "center", fontSize: 30, color: "#d80000" }}>
            Questions fréquentes sur EVAX
          </h2>
          <Row>
            <Col span={8}>
              <Card
                style={{
                  width: "90%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  height: "90%",
                  textAlign: "center",
                  boxShadow: " 0 2px 4px 0 rgba(0,0,0,.2)",
                }}
              >
                <DollarOutlined
                  className="icon"
                  style={{ fontSize: 50, color: "#d80000" }}
                />

                <p
                  style={{
                    fontSize: 20,

                    fontWeight: "bold",
                  }}
                >
                  La vaccination contre la Covid-19 sera-t-elle gratuite ?
                </p>
                <p style={{ fontSize: 15 }}>
                  Oui. La vaccination sera gratuite pour tous en Tunisie, mais
                  selon la priorité établie par l es autorités.
                </p>
              </Card>
            </Col>
            <Col span={8}>
              <Card
                style={{
                  width: "90%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  height: "90%",
                  textAlign: "center",
                  boxShadow: " 0 2px 4px 0 rgba(0,0,0,.2)",
                }}
              >
                <ExclamationCircleOutlined
                  className="icon"
                  style={{ fontSize: 50, color: "#d80000" }}
                />

                <p
                  style={{
                    fontSize: 20,

                    fontWeight: "bold",
                  }}
                >
                  Que faire en cas de problème lors de l'inscription ?
                </p>
                <p style={{ fontSize: 15 }}>
                  Un numéro vert gratuit a été mis en place pour accompagner les
                  citoyens tout au long de la campagne de vaccination.
                  <span style={{ color: "green", fontWeight: "bold" }}>
                    {" "}
                    Le numéro vert : 80102021
                  </span>
                  , ouvert du lundi au vendredi de 09h à 17h
                </p>
              </Card>
            </Col>
            <Col span={8}>
              <Card
                style={{
                  width: "90%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  height: "90%",
                  textAlign: "center",
                  boxShadow: " 0 2px 4px 0 rgba(0,0,0,.2)",
                }}
              >
                <QuestionCircleOutlined
                  className="icon"
                  style={{ fontSize: 50, color: "#d80000" }}
                />

                <p
                  style={{
                    fontSize: 20,

                    fontWeight: "bold",
                  }}
                >
                  Quels sont les objectifs de la vaccination ?
                </p>
                <p style={{ fontSize: 15 }}>
                  Le premier objectif de la vaccination, c’est de faire baisser
                  le nombre des formes graves de COVID-19. Les résultats des
                  études cliniques des candidats vaccins semblent converger pour
                  démontrer un fait principal : la vaccination permet de réduire
                  massivement la mortalité due au virus et à ses formes graves.
                </p>
              </Card>
            </Col>
          </Row>
        </Card>
      </div>
    </>
  );
}

export default Questions;
