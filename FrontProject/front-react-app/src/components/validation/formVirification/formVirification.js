import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../redux/actions/verification/verification";

import { Form, Input, Button, Alert } from "antd";
function FormVerification() {
  const verif = useSelector((state) => state.verif);

  const dispatch = useDispatch();
  const [code, setCode] = useState("");
  const verifier = () => {
    dispatch(actions.verification(code));
    console.log(verif);
  };

  return (
    <>
      <Form
        name="basic"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 4,
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
      >
        <Form.Item
          label="CIN"
          name="cin"
          rules={[
            {
              required: true,
              message: "CIN obligatoire!",
            },
          ]}
        >
          <Input onChange={(e) => setCode(e.target.value)} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 4,
            span: 4,
          }}
        >
          <Button type="primary" htmlType="submit" onClick={verifier}>
            Verifier
          </Button>
        </Form.Item>
      </Form>
      {!verif.errors ? (
        <div> </div>
      ) : (
        <>
          <Alert message="Verifiez CIN" type="error" />
        </>
      )}
      {verif.loading ? (
        <div> </div>
      ) : (
        <>
          <Alert
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 8,
            }}
            message="Vaccin du citoyen validée et email envoyé"
            type="success"
          />
        </>
      )}
    </>
  );
}

export default FormVerification;
