import { React, useState, useEffect } from "react";
import {
  CarryOutOutlined,
  SafetyOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";
import { Card, Row, Col } from "antd";
import * as actions from "../../../redux/actions/citizen/citizen";
import { useDispatch, useSelector } from "react-redux";

function Statistic({C1, C2, C3, loading}) {
  /*const dispatch = useDispatch();
  const count = useSelector((s) => s.citizen);
  const [C1, setC1] = useState(0);
  const [C2, setC2] = useState(0);
  const [C3, setC3] = useState(0);

  useEffect(() => {
    dispatch(actions.statistic());
    setC1(count.action.countAll.data)
    setC2(count.action.count1.data)
    setC3(count.action.count2.data)
    //console.log(count)
  }, []);*/

  return (
    <>
      <div>
        <Card
          style={{
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 100,
            marginBottom: 100,
            backgroundColor: "rgb(248, 245, 245)",
          }}
        >
          <h4 style={{ textAlign: "center", fontSize: 20, color: "#d80000" }}>
            Le Vaccin En Tunisie
          </h4>
          <h2 style={{ textAlign: "center", fontSize: 40 }}>
            Plus De Statistiques Sur Les Campagnes De Vaccination
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
                <CarryOutOutlined
                  className="icon"
                  style={{ fontSize: 50, color: "#d80000" }}
                />
                {!loading ? (
                  <p style={{ fontSize: 40, marginTop: 10 }}>
                    {C1}
                  </p>
                ) : (
                  <p></p>
                )}
                <p style={{ fontSize: 20, marginTop: -30 }}>Inscrits</p>
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
                <SafetyOutlined
                  className="icon"
                  style={{ fontSize: 50, color: "#d80000" }}
                />
                {!loading ? (
                  <p style={{ fontSize: 40, marginTop: 10 }}>
                    {C2}
                  </p>
                ) : (
                  <p></p>
                )}
                <p style={{ fontSize: 20, marginTop: -30 }}>
                  Vaccinés 1ère dose
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
                <SafetyCertificateOutlined
                  className="icon"
                  style={{ fontSize: 50, color: "#d80000" }}
                />
                {!loading  ? (
                  <p style={{ fontSize: 40, marginTop: 10 }}>
                    {C3}
                  </p>
                ) : (
                  <p></p>
                )}
                <p style={{ fontSize: 20, marginTop: -30 }}>
                  Vaccinés 2ème dose
                </p>
              </Card>
            </Col>
          </Row>
        </Card>
      </div>
    </>
  );
}

export default Statistic;
