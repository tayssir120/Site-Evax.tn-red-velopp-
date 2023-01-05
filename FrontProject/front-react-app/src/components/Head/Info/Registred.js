import { Card } from "antd";
import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../redux/actions/citizen/citizen";

function Registred() {
  let state = { date: new Date() };

  const dispatch = useDispatch();
  const count = useSelector((s) => s.countAll);

  useEffect(() => {
    dispatch(actions.countInscrit());
  }, []);
  if (!count.countInscritLoading) {
    console.log(count.action);
  }else{
    console.log(count.action);
  }

  return (
    <>
      <Card
        style={{
          color: "white",
          textAlign: "center",
          marginLeft: 0,
          backgroundColor: "rgba(139, 138, 138, 0.5)",
          borderColor: "rgba(139, 138, 138, 0.5)",
          width: "250px",
          height: "300px",
        }}
      >
        <h6 style={{ color: "white", fontSize: 25 }}>Nombre d'inscrits : </h6>
        {(!count.countInscritLoading && !count.errors) ? (
          <h6 style={{ color: "white", fontSize: 20 }}>
            {count.action.numberAll.data}
          </h6>
        ) : (
          <h6></h6>
        )}
        <h6 style={{ color: "white", fontSize: 15 }}>
          {state.date.getHours()}:{state.date.getMinutes()}:
          {state.date.getSeconds()}
        </h6>
        <h6 style={{ color: "white", fontSize: 15 }}>
          {state.date.toLocaleDateString()}
        </h6>
      </Card>
    </>
  );
}

export default Registred;
