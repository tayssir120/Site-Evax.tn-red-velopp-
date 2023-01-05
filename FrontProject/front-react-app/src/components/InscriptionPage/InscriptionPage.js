import React from "react";
import "./InscriptionPage.css";
import {
  UserOutlined,
  FormOutlined,
  CalendarOutlined,
  MedicineBoxOutlined,
} from "@ant-design/icons";
import Head from "../Head/Head";
import Link from "./Inscriptions/LinkItem/Link";
import Help from "./Help/Help";
import Footer from "../Footer/Footer";
import { Row, Col } from "antd";
import { HashLink as GoTo } from "react-router-hash-link";

function InscriptionPage() {
  return (
    <>
      <Head></Head>
      <Row
        gutter={[16, 16]}
        style={{
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 100,
          marginBottom: 100,
        }}
      >
        <Col span={8}>
          <GoTo to="/inscriptionDansCentre">
            <Link
              icon={
                <UserOutlined
                  className="icon"
                  style={{ fontSize: 50, color: "#d80000" }}
                />
              }
              text={"Citoyen titulaire d'une carte d'identité nationale"}
            ></Link>
          </GoTo>
        </Col>
        {/*<Col span={8}>
          <Link
            icon={
              <UserOutlined
                className="icon"
                style={{ fontSize: 50, color: "#d80000" }}
              />
            }
            text={"Citoyen qui ne possède pas d'une carte d'identité nationale"}
          ></Link>
        </Col>
        <Col span={8}>
          <Link
            icon={
              <UserOutlined
                className="icon"
                style={{ fontSize: 50, color: "#d80000" }}
              />
            }
            text={"Citoyen étranger"}
          ></Link>
        </Col>*/}

        <Col span={8}>
          <GoTo to="/miseàjourInscriptionPE">
            <Link
              icon={
                <FormOutlined
                  className="icon"
                  style={{ fontSize: 50, color: "#d80000" }}
                />
              }
              text={"Mise à jour de l'inscription"}
            ></Link>
          </GoTo>
        </Col>
        <Col span={8}>
          <GoTo to="/reportRendez-vous">
            <Link
              icon={
                <CalendarOutlined
                  className="icon"
                  style={{ fontSize: 50, color: "#d80000" }}
                />
              }
              text={"Reporter un rendez-vous"}
            ></Link>
          </GoTo>
        </Col>
        <Col span={8} />
        <Col span={8}>
          <GoTo to="/inscriptionDansPharmacie#pharma">
            <Link
              icon={
                <MedicineBoxOutlined
                  className="icon"
                  style={{ fontSize: 50, color: "#d80000" }}
                />
              }
              text={"Prenez un rendez-vous de vaccination chez une pharmacie"}
            ></Link>
          </GoTo>
        </Col>
      </Row>
      <Help></Help>
      <Footer></Footer>
    </>
  );
}

export default InscriptionPage;
