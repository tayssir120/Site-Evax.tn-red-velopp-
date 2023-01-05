import { React, useState, memo } from "react";
import { Form, Input, Button, Alert } from "antd";
import * as actions from "../../../../redux/actions/validator/index";
import { useDispatch, useSelector } from "react-redux";
import "antd/dist/antd.css";
import action from "../../../../redux/actions/reset"
import { useHistory } from "react-router-dom";
function FormConnect() {
  const task = useSelector((state) => state.user);
  const history = useHistory();
  
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");
  const loguser = () => {
    
    dispatch(actions.loginUser(username, pwd));
    dispatch(action.reset())
  };
  if (!task.loading) {
  
    history.push("/validation");
  }
  // console.log(loguser)
  return (
    <>
      <div
        style={{
          marginTop: "139px",
          width: "50% ",
          border: "black solid 1px",
          borderRadius: "2%",
          marginLeft: "25%",
          marginRight: "25%",
          padding: "2%",
        }}
      >
        <h2 style={{textAlign : "center" }}>Validateur</h2>
        <Form
          name="basic"
          labelCol={{
            span: 6,
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
            label="Login"
            name="Login"
            rules={[
              {
                required: true,
                message: "Please input the code!",
              },
            ]}
          >
            <Input onChange={(e) => setUsername(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="Mot de passe"
            name="mdp"
            rules={[
              {
                required: true,
                message: "Please input the code!",
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
            <Button type="primary" htmlType="submit" onClick={loguser}>
              Valider
            </Button>&nbsp;&nbsp;
            <Button  htmlType="reset" >
              Annuler
            </Button>
          </Form.Item>
        </Form>
        {task.loading ? (
          <div> </div>
        ) : (
          <>
            <p>{task.action.loginUser}</p>
          </>
        )}
        {!task.errors ? (
          <div> </div>
        ) : (
          <>
            <Alert message="Verifiez vos coordonnées" type="error" />
          </>
        )}
      </div>
    </>
  );
}

export default memo(FormConnect);
