import { React, useState, useEffect } from "react";
import {
  CarryOutOutlined,
  SafetyOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";
import { Card, Row, Col } from "antd";
import * as actions from "../../../redux/actions/citizen/citizen";
import { useDispatch, useSelector } from "react-redux";

function Dose1() {
  const dispatch = useDispatch();
  const count = useSelector((s) => s.citizen);

  useEffect(() => {
    dispatch(actions.countDose1());
    //console.log(count)
  }, []);

  return (
    <>
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
        {!count.loading ? (
          <p style={{ fontSize: 40, marginTop: 10 }}>
            {count.action.count1.data}
          </p>
        ) : (
          <p></p>
        )}
        <p style={{ fontSize: 20, marginTop: -30 }}>Vaccinés 1ère dose</p>
      </Card>
    </>
  );
}

export default Dose1;
