import React, { useState } from "react";
import "./formMobile.css";
import { Form, Input, Button, Select, Radio, DatePicker, Space, Alert } from "antd";
import * as actions from "../../../redux/actions/validationMobile/validationMobile";

import { useDispatch, useSelector } from "react-redux";
function FormMobile() {
  const dispatch = useDispatch();
  const [value, setValue] = useState(1);
  const [cin, setCin] = useState("");
  const [fn, setFn] = useState("");
  const [ln, setLn] = useState("");
  const [gender, setGender] = useState("");
  const [fathername, setFathername] = useState("");
  const [mothername, setMothername] = useState("");
  const mobile = useSelector((state) => (state.mobile))

  const [email, setEmail] = useState("");

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const { Option } = Select;
  function handleChange(value) {
    console.log(value);
  }
  let data = {
    cin: cin,
    email: email,
    firstname: fn,
    lastname: ln,
    gender: gender,
    fatherName: fathername,
    motherFirstname: mothername,
  };
  

  const validate = () => {
    dispatch(actions.validationMobile(data));
    if(mobile.loading){
      document.getElementById("form").reset();
     }
    
     setTimeout(() => {
     
      dispatch(actions.RESET_ACTION());
    }, 2000);
  };

  return (
    <>
 {!mobile.errors ? (
          <div> </div>
        ) : (
          <>
          <Alert message="Verifiez le code" type="error" />

          </>
        )}
          {mobile.loading ? (
          <div> </div>
        ) : (
          <>
            <Alert  labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 8,
        }} message="Vaccin du citoyen validée et email envoyé" type="success" />

          </>
        )}

      <Form id="form"
        name="basic"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 8,
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
      >
        <Form.Item
          label="CIN"
          name="CIN"
          rules={[
            {
              required: true,
              message: "CIN obligatoire!",
            },
          ]}
        >
          <Input onChange={(e) => setCin(e.target.value)} />
        </Form.Item>
        <Form.Item
          label="Email"
          name="Email"
          rules={[
            {
              required: true,
              message: "Email obligatoire!",
            },
          ]}
        >
          <Input onChange={(e) => setEmail(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Nom"
          name="Nom"
          rules={[
            {
              required: true,
              message: "Nom obligatoire!",
            },
          ]}
        >
          <Input onChange={(e) => setFn(e.target.value)} />
        </Form.Item>
        <Form.Item
          label="Prenom"
          name="Prenom"
          rules={[
            {
              required: true,
              message: "Prenom obligatoire!",
            },
          ]}
        >
          <Input onChange={(e) => setLn(e.target.value)}/>
        </Form.Item>
        <Form.Item
          label="Sexe"
          name="Sexe"
          rules={[
            {
              required: true,
              message: "Choisissez le sexe!",
            },
          ]}
        >
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={"Homme"}>Homme</Radio>
            <Radio value={"Femme"}>Femme</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="Date de naissance"
          name="Date de naissance"
          rules={[
            {
              required: false,
              message: "Please input the name!",
            },
          ]}
        >
          <Space direction="vertical">
            <DatePicker onChange={onChange} />
          </Space>
        </Form.Item>
        <Form.Item
          label="Gouvernorat"
          name="Gouvernorat"
          rules={[
            {
              required: true,
              message: "Gouvernorat obligatoire!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Delegation"
          name="Delegation"
          rules={[
            {
              required: true,
              message: "delegation obligatoire!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Vaccin"
          name="Vaccin"
          rules={[
            {
              required: true,
              message: "vaccin obligatoire!",
            },
          ]}
        >
          <Select
            defaultValue="..."
            style={{ width: 120 }}
            onChange={handleChange}
          >
            <Option value="Janssen">Janssen</Option>
            <Option value="Pfizer">Pfizer</Option>
            <Option value="Astrazeneca"> Astrazeneca</Option>
          </Select>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" onClick={validate}>
            Valider
          </Button>&nbsp;&nbsp;
          <Button  htmlType="reset" >
          Annuler
        </Button>
        </Form.Item>
      </Form>
     
    </>
  );
}

export default FormMobile;
