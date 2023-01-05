import React, { useState } from "react";
import "antd/dist/antd.css";
import { Redirect } from "react-router-dom";
import { Button, Input, Slider, Alert, Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as actions from "../../redux/actions/CitizenSpace/CitizenSpace";

function Authentification() {
  let history = useHistory();
  const login = useSelector((state) => state.CitizenSpace);
  const dispatch = useDispatch();
  const [code, setCode] = useState(0);
  const logEVAX = () => {
    dispatch(actions.loginEVAX(code));
    history.push(`/AuthentificationCode/${code}`);
  };
  return (
    <>
      <div mode="vertical" style={{ backgroundColor: "white" }}>
        <h3
          style={{
            "margin-left": "350px",
            marginRight: "400px",
            marginTop: "5%",
            marginBottom: "2%",
          }}
        >
          Veuillez vous connecter à votre espace citoyen
        </h3>
        
        <Form
          name="basic"
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 4,
          }}
        >
          <Form.Item
            style={{ marginLeft: "400px" }}
            label="Numéro d'inscription EVAX"
            name="Numéro d'inscription EVAX"
            rules={[
              {
                required: true,
                message: "le champ code est obligatoire!",
              },
            ]}
          >
            <Input onChange={(e) => setCode(e.target.value)} />
          </Form.Item>

          <Form.Item
            style={{ marginLeft: "450px" }}
            wrapperCol={{
              offset: 4,
              span: 4,
            }}
          >
            <Button type="primary" htmlType="submit" onClick={logEVAX}>
              Suivant
            </Button>
          </Form.Item>
        </Form>
       
        {!login.errors ? (
          <div> </div>
        ) : (
          <>
            <Alert message="Verifiez le code" type="error" />
          </>
        )}
      </div>
    </>
  );
}

export default Authentification;
