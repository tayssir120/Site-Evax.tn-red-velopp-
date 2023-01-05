import { React, useState } from "react";
import { Redirect } from "react-router-dom";

import { Button, Radio, DatePicker, Form, Input, Alert } from "antd";
import "../../InscriptionPage.css";
import "antd/dist/antd.css";
import { FieldNumberOutlined, MailOutlined } from "@ant-design/icons";
import NavBar from "../../../Head/NavBar/NavBar";
import Help from "../../Help/Help";
import Footer from "../../../Footer/Footer";
import * as actions from "../../../../redux/actions/citizen/citizen";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function UpdateInscriptionFirstStep() {
  const [form] = Form.useForm();
  const citizen = useSelector((state) => state.citizen);
  const [errors, setErrors] = useState(false);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const history = useHistory();

  const updateCitizenFirstStep = () => {
    dispatch(actions.updateFirstStep(email, code));
  };
  const handlePage = () => {
    history.push(`/pageInscription`);
  };

  return (
    <>
      {" "}
      <NavBar></NavBar>
      <div className="container">
        <h3>Mise à jour de l'inscription : </h3>
        <br />
        <div className="form-container">
          {!citizen.errors ? (
            <div> </div>
          ) : (
            <Alert
              message="Veuillez Vérifier les données saisies"
              type="error"
              showIcon
              style={{ width: "880px" }}
            />
          )}
          {citizen.redirectToNewPage ? (
            <div>
              <Redirect to={`/miseàjourInscription/${code}`} />{" "}
            </div>
          ) : (
            <div> </div>
          )}
          <Form form={form} layout="vertical">
            <Form.Item
              label="Email :"
              name="Email"
              rules={[
                { required: true, message: "Le champ Email est obligatoire !" },
              ]}
            >
              <Input
                prefix={<MailOutlined />}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Veuillez saisir votre Email"
              />
            </Form.Item>
            <Form.Item
              label="Code d'inscription :"
              name="codeInscription"
              rules={[
                {
                  required: true,
                  message: "Le champ Code d'inscription est obligatoire !",
                },
              ]}
            >
              <Input
                prefix={<FieldNumberOutlined />}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Veuillez saisir votre code d'inscription"
              />
            </Form.Item>
            <div className="buttons">
              <Form.Item>
                <Button
                  shape="round"
                  htmlType="submit"
                  onClick={updateCitizenFirstStep}
                >
                  Confirmer
                </Button>
                <Button
                  type="primary"
                  danger
                  shape="round"
                  style={{ margin: "0 8px" }}
                  onClick={handlePage}
                >
                  Annuler
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
      <Help></Help>
      <Footer></Footer>
    </>
  );
}

export default UpdateInscriptionFirstStep;
