import { React, useState } from "react";
import * as actions from "../../redux/actions/admin/admin";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Button, Alert } from "antd";
import AdminNavBar from "./AdminNavBar";
function Admin() {
  const dispatch = useDispatch();
  const loginAdmin = useSelector((state) => state.user);

  const [login, setLogin] = useState("");
  const [pwd, setPwd] = useState("");

  const validate = () => {
    dispatch(actions.adminLogin(login, pwd));
  };
  // console.log(loguser)

  return (
    <>
      <AdminNavBar/>
      <Form
        id="create-course-form"
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
          label="Login"
          name="Login"
          rules={[
            {
              required: true,
              message: "Please input the Login!",
            },
          ]}
        >
          <Input onChange={(e) => setLogin(e.target.value)} />
        </Form.Item>
        <Form.Item
          label="Mot de passe"
          name="Mot de passe"
          rules={[
            {
              required: true,
              message: "Please input the password!",
            },
          ]}
        >
          <Input.Password onChange={(e) => setPwd(e.target.value)} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" onClick={validate}>
            Valider
          </Button>
        </Form.Item>
      </Form>
      {loginAdmin.loading ? (
        <div> </div>
      ) : (
        <>
          <Alert message="succés" type="success" />
        </>
      )}
      {loginAdmin.errors ? (
        <Alert message="Verifiez vos coordonnées" type="error" />
      ) : (
        <>
          <div></div>
        </>
      )}
    </>
  );
}

export default Admin;
