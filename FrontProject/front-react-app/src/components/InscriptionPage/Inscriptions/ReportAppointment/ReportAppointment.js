import { React, useState } from "react";
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

function ReportAppointment() {
  const [form] = Form.useForm();
  const citizen = useSelector((state) => state.citizen);
  const history = useHistory();

  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const reportAppointment = () => {
    dispatch(actions.reportAppointment(email, code));
  };
  const handlePage = () => {
    history.push(`/pageInscription`);
  };

  return (
    <>
      {" "}
      <NavBar></NavBar>
      <div className="container">
        <h3>Report d'un rendez-vous</h3>
        <br />
        {!citizen.errors ? (
          <div> </div>
        ) : (
          <Alert
            message="Veuillez Vérifier les données saisies"
            type="error"
            showIcon
            style={{ width: "880px", marginLeft: "200px" }}
          />
        )}
        {!citizen.success ? (
          <div> </div>
        ) : (
          <Alert
            message="Votre demande de report du rendez-vous a été prise en considération."
            type="success"
            showIcon
            style={{ width: "880px", marginLeft: "200px" }}
          />
        )}
        <br />
        <div className="form-container">
          <Form form={form} layout="vertical">
            <Form.Item
              label="Email : "
              labelAlign="right"
              name="Email"
              rules={[
                { required: true, message: "Le champ Email est obligatoire !" },
              ]}
            >
              <Input
                className="inputField"
                prefix={<MailOutlined />}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Veuillez saisir votre Email"
              />
            </Form.Item>
            <Form.Item
              label="Code d'inscription : "
              labelAlign="left"
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

            <Form.Item>
              <div className="buttons">
                <Form.Item>
                  <Button
                    shape="round"
                    htmlType="submit"
                    onClick={reportAppointment}
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
            </Form.Item>
          </Form>
        </div>
      </div>
      <Help></Help>
      <Footer></Footer>
    </>
  );
}

export default ReportAppointment;
