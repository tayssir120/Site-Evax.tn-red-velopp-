import React from "react";
import { Card, Row, Col, Steps } from "antd";
import {
  CheckSquareOutlined,
  EyeOutlined,
  CalendarOutlined,
  FormOutlined,
} from "@ant-design/icons";

function Stages() {
  const { Step } = Steps;
  return (
    <>
      <div>
        <Card
          bordered={false}
          style={{
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 100,
            marginBottom: 100,           
          }}
        >
          <h4 style={{ textAlign: "center", fontSize: 20, color: "#d80000" }}>
            Comment faire pour se vacciner
          </h4>
          <h2 style={{ textAlign: "center", fontSize: 40 }}>
            ETAPES DE VACCINATION CONTRE LA COVID-19
          </h2>
          <Steps className="steps">
            <Step
              status="process"
              icon={<FormOutlined style={{ fontSize: 50, color: "#d80000" }} />}
              title="INSCIPTION"
              description="La 1ère étape est de s'inscrire"
            />
            <Step
              status="process"
              icon={
                <CalendarOutlined style={{ fontSize: 50, color: "#d80000" }} />
              }
              title="Affectation RDV"
              description="La 2ème étape est de recevoir une convocation dans un centre de vaccination"
            />
            <Step
              status="process"
              icon={
                <CheckSquareOutlined
                  style={{ fontSize: 50, color: "#d80000" }}
                />
              }
              title="VACCINATION"
              description="La 3ème étape est le vaccin (primo-vaccination, puis vaccin de rappel)"
            />
            <Step
              status="process"
              icon={<EyeOutlined style={{ fontSize: 50, color: "#d80000" }} />}
              title="SUIVI"
              description="La 4ème étape est le suivi du vaccin et le téléchargement de l'attestation de vacccination"
            />
          </Steps>
        </Card>
      </div>
    </>
  );
}

export default Stages;
