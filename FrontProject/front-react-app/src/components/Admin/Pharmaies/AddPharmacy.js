import { React, useEffect, useState } from "react";
import { Form, Input, Button, Result } from "antd";
import "antd/dist/antd.css";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import * as actions from "../../../redux/actions/pharmacy/pharmacy";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../Head/NavBar/NavBar";
import { useHistory, useParams, useLocation } from "react-router-dom";
import AdminNavBar from "../AdminNavBar";

function AddPharmacy() {
  const history = useHistory();

  const handlePage = () => {
    history.push(`/pharmacies`);
  };

  const [name, setName] = useState("");
  const [adres, setAdres] = useState("");
  const [gouv, setGouv] = useState("");
  const [deleg, setDeleg] = useState("");
  const [type, setType] = useState("");
  const [fixNumber, setFixNumber] = useState("");
  const [mobileNumber, SetMobileNumber] = useState("");
  const [pharmacist, SetPharmacist] = useState("");

  const pharmacy = useSelector((state) => state.pharmacy);
  const dispatch = useDispatch();

  console.log(pharmacy);

  const AddPharmacy = () => {
    if (
      name != "" &&
      type != "" &&
      adres != "" &&
      fixNumber != "" &&
      mobileNumber != "" &&
      gouv != "" &&
      deleg != "" &&
      pharmacist
    ) {
      let pharmacy = {
        name: name,
        type: type,
        adress: adres,
        fixNumber: fixNumber,
        mobileNumber: mobileNumber,
        governorate: gouv,
        delegation: deleg,
        pharmacist: pharmacist,
      };
      dispatch(actions.addPharmacy(pharmacy));
      setTimeout(() => {
        history.push("/pharmacies");
        dispatch(actions.RESET_ACTION());
      }, 3000);
    }
    
  };

  return (
    <>
      <AdminNavBar />

      <div className="container">
        <h3>Ajout d'une pharmacie</h3>
        <br />
        <Form style={{ width: "90%", marginLeft: 300 }}>
          <Form.Item
            label="Nom du pharmacie :"
            name="name"
            rules={[{ required: true, message: "Veuillez entrer le nom SVP!" }]}
            style={{ display: "inline-block", width: "calc(60% - 8px)" }}
          >
            <Input
              placeholder="Nom du pharmacie"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Form.Item
              label="Gouvernorat :"
              name="gouv"
              rules={[
                {
                  required: true,
                  message: "Veuillez entrer la gouvernorat SVP!",
                },
              ]}
              style={{
                display: "inline-block",
                width: "calc(20% - 8px)",
                marginTop: -20,
              }}
            >
              <Input
                placeholder="Gouvernorat du pharmacie"
                onChange={(e) => setGouv(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              label="Délégation :"
              name="deleg"
              rules={[
                {
                  required: true,
                  message: "Veuillez entrer la délégation SVP!",
                },
              ]}
              style={{
                display: "inline-block",
                width: "calc(20% - 8px)",
                marginLeft: 10,
                marginTop: -20,
              }}
            >
              <Input
                placeholder="Délégation du pharmacie"
                onChange={(e) => setDeleg(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              label="Adresse :"
              name="adres"
              rules={[
                { required: true, message: "Veuillez entrer l'adresse SVP!" },
              ]}
              style={{
                display: "inline-block",
                width: "calc(20% - 8px)",
                marginLeft: 10,
                marginTop: -20,
              }}
            >
              <Input
                placeholder="Adresse du pharmacie"
                onChange={(e) => setAdres(e.target.value)}
              />
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Form.Item
              label="Propriétaire :"
              name="pharmacist"
              rules={[
                {
                  required: true,
                  message: "Veuillez entrer le propriétaire SVP!",
                },
              ]}
              style={{
                display: "inline-block",
                width: "calc(20% - 8px)",
                marginTop: -30,
              }}
            >
              <Input
                placeholder="Propriétaire du pharmacie"
                onChange={(e) => SetPharmacist(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              label="Numéro FIXE :"
              name="fixNumber"
              rules={[
                { required: true, message: "Veuillez entrer le numéro SVP!" },
              ]}
              style={{
                display: "inline-block",
                width: "calc(20% - 8px)",
                marginLeft: 10,
                marginTop: -30,
              }}
            >
              <Input
                placeholder="Numéro FIXE du pharmacie"
                onChange={(e) => setFixNumber(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              label="Numéro MOBILE :"
              name="mobileNumber"
              rules={[
                {
                  required: true,
                  message: "Veuillez entrer le numéro SVP!",
                },
              ]}
              style={{
                display: "inline-block",
                width: "calc(20% - 8px)",
                marginTop: -30,
                marginLeft: 10,
              }}
            >
              <Input
                placeholder="Numéro MOBILE du pharmacie"
                onChange={(e) => SetMobileNumber(e.target.value)}
              />
            </Form.Item>
          </Form.Item>

          <Form.Item
            label="Type :"
            name="type"
            rules={[
              { required: true, message: "Veuillez entrer le type SVP!" },
            ]}
            style={{
              display: "inline-block",
              width: "calc(60% - 8px)",
              marginTop: -30,
            }}
          >
            <Input
              placeholder="Type du pharmacie"
              onChange={(e) => setType(e.target.value)}
            />
          </Form.Item>

          <Form.Item style={{ width: "55%", margin: "auto", marginBottom: -5 }}>
            <Button
              shape="round"
              htmlType="submit"
              style={{ backgroundColor: "#d80000", color: "white" }}
              onClick={AddPharmacy}
            >
              Confirmer
            </Button>
            <Button
              shape="round"
              style={{
                margin: "0 8px",
                backgroundColor: "#d80000",
                color: "white",
              }}
              htmlType=""
              onClick={handlePage}
            >
              Annuler
            </Button>
          </Form.Item>
        </Form>
        {!pharmacy.loading && !pharmacy.errors ? (
          <>
            <Result
              status="success"
              title="Pharmacie ajoutée avec succès !"
              subTitle=""
            />
          </>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
}
export default AddPharmacy;
