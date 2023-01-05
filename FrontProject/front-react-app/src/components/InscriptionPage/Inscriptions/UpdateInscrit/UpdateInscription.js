import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Form, Input, Alert, Result } from "antd";
import "antd/dist/antd.css";

import "../../InscriptionPage.css";
import NavBar from "../../../Head/NavBar/NavBar";
import Help from "../../Help/Help";
import Footer from "../../../Footer/Footer";
import {
  IdcardOutlined,
  MailOutlined,
  UserOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import * as actions from "../../../../redux/actions/citizen/citizen";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function UpdateInscription() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const citizen = useSelector((state) => state.citizen);
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [cin, setCin] = useState("");
  const [nom, setNom] = useState("");
  const [prénom, setPrénom] = useState("");
  const [birthGovernorate, setBirthGovernorate] = useState("");
  const [birthDelegation, setBirthDelegation] = useState("");
  let { code } = useParams();


  const handlePage = () => {
    history.push(`/pageInscription`);
  };


  const updateCitizenRegistration = () => {
    dispatch(
      actions.updateRegistration(
        code,
        email,
        cin,
        nom,
        prénom,
        birthGovernorate,
        birthDelegation
      )
    );
  };

  return (
    <>
      {" "}
      <NavBar></NavBar>
      <div className="container">
        <h3> Mise à jour de l'inscription :</h3>
        <div className="form-container">
          {!citizen.errors ? (
            <div> </div>
          ) : (
            <Alert
              message="Veuillez Vérifier les données saisies"
              type="error"
              showIcon
              style={{ width: "865px" }}
            />
          )}
          <Form form={form} layout="vertical">
            <Form.Item
              label="Email : "
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
              label="Numéro de la carte d'identité: "
              name="numéroCarteIdentité"
              rules={[
                { required: true, message: "Le champ CIN est obligatoire !" },
              ]}
            >
              <Input
                prefix={<IdcardOutlined />}
                onChange={(e) => setCin(e.target.value)}
                placeholder="Veuillez saisir votre numéro de la carte d'identité"
              />
            </Form.Item>
            <Form.Item
              label="Nom: "
              name="nom"
              rules={[
                { required: true, message: "Le champ Nom est obligatoire !" },
              ]}
            >
              <Input
                prefix={<UserOutlined />}
                onChange={(e) => setNom(e.target.value)}
                placeholder="Veuillez saisir votre nom"
              />
            </Form.Item>
            <Form.Item
              label="Prénom: "
              name="prénom"
              rules={[
                {
                  required: true,
                  message: "Le champ Prénom est obligatoire !",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined />}
                onChange={(e) => setPrénom(e.target.value)}
                placeholder="Veuillez saisir votre prénom"
              />
            </Form.Item>
            <Form.Item
              label="Gouvernerat: "
              name="gouvernerat"
              rules={[
                {
                  required: true,
                  message: "Le champ Gouvernerat est obligatoire !",
                },
              ]}
            >
              <Input
                prefix={<ShopOutlined />}
                onChange={(e) => setBirthGovernorate(e.target.value)}
                placeholder="Veuillez saisir votre gouvernerat"
              />
            </Form.Item>
            <Form.Item
              label="Délégation: "
              name="délégation"
              rules={[
                {
                  required: true,
                  message: "Le champ Délégation est obligatoire !",
                },
              ]}
            >
              <Input
                prefix={<ShopOutlined />}
                onChange={(e) => setBirthDelegation(e.target.value)}
                placeholder="Veuillez saisir votre délégation"
              />
            </Form.Item>
            <Form.Item>
              <Button
                shape="round"
                htmlType="submit"
                onClick={updateCitizenRegistration}
              >
                Confirmer
              </Button>{" "}
              &nbsp;
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
          </Form>
          {!citizen.loading && citizen.success ? (
          <>
            <Result
              status="success"
              title="Votre inscription est mis à jour avec succès !"
              subTitle=""
            />
          </>
        ) : (
          <div></div>
        )}
        </div>
      </div>
      <Help></Help>
      <Footer></Footer>
    </>
  );
}

export default UpdateInscription;
