import { React, useEffect, useState } from "react";
import { Form, Input, Button, Result } from "antd";
import "antd/dist/antd.css";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import * as actions from "../../../redux/actions/vaccinationCenter/center";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../Head/NavBar/NavBar";
import { useHistory, useParams, useLocation } from "react-router-dom";
import AdminNavBar from "../AdminNavBar";

function AddCenter() {
  const history = useHistory();

  const handlePage = () => {
    history.push(`/centresDeVaccination`);
  };

  const [name, setName] = useState("");
  const [adres, setAdres] = useState("");
  const [gouv, setGouv] = useState("");
  const [deleg, setDeleg] = useState("");
  const [type, setType] = useState("");
  const [cap, setCap] = useState("");
  const [chef, SetChef] = useState("");

  const vaccinationCenter = useSelector((state) => state.vaccinationCenters);
  const dispatch = useDispatch();

  console.log(vaccinationCenter);

  const AddCenter = () => {
    if (
      name != "" &&
      type != "" &&
      adres != "" &&
      chef != "" &&
      cap != "" &&
      gouv != "" &&
      deleg
    ) {
      let center = {
        name: name,
        type: type,
        adress: adres,
        chefCenter: chef,
        capacity: cap,
        centerGovernorate: gouv,
        centerDelegation: deleg,
        
      };
      dispatch(actions.addCenter(center));
      setTimeout(() => {
        //history.push("/centresDeVaccination");
        dispatch(actions.RESET_ACTION());
        document.getElementById("create-course-form").reset();
      }, 6000);
    }
  };

  return (
    <>
      <AdminNavBar />

      <div className="container">
        <h3>Ajout d'un centre de vaccination</h3>
        <br />
        <Form style={{ width: "90%", marginLeft: 300 }} id="create-course-form">
          <Form.Item
            label="Nom du centre de vaccination :"
            name="name"
            rules={[{ required: true, message: "Veuillez entrer le nom SVP!" }]}
            style={{ display: "inline-block", width: "calc(60% - 8px)" }}
          >
            <Input
              placeholder="Nom du centre de vaccination"
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
                placeholder="Gouvernorat du centre de vaccination"
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
                placeholder="Délégation du centre de vaccination"
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
                placeholder="Adresse du centre de vaccination"
                onChange={(e) => setAdres(e.target.value)}
              />
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Form.Item
              label="Type :"
              name="type"
              rules={[
                { required: true, message: "Veuillez entrer le type SVP!" },
              ]}
              style={{
                display: "inline-block",
                width: "calc(30% - 8px)",
                marginTop: -30,
              }}
            >
              <Input
                placeholder="Type du centre de vaccination"
                onChange={(e) => setType(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              label="Capacité :"
              name="cap"
              rules={[
                { required: true, message: "Veuillez entrer la capacité SVP!" },
              ]}
              style={{
                display: "inline-block",
                width: "calc(30% - 8px)",
                marginLeft: 10,
                marginTop: -30,
              }}
            >
              <Input
                placeholder="Capacité du centre de vaccination"
                onChange={(e) => setCap(e.target.value)}
              />
            </Form.Item>
          </Form.Item>
          <Form.Item
            label="Chef du centre de vaccination :"
            name="chef"
            rules={[
              {
                required: true,
                message: "Veuillez entrer le chef centre SVP!",
              },
            ]}
            style={{
              display: "inline-block",
              width: "calc(60% - 8px)",
              marginTop: -30,
            }}
          >
            <Input
              placeholder="Chef du centre de vaccination"
              onChange={(e) => SetChef(e.target.value)}
            />
          </Form.Item>

          <Form.Item style={{ width: "55%", margin: "auto", marginBottom: -5 }}>
            <Button
              shape="round"
              htmlType="submit"
              style={{ backgroundColor: "#d80000", color: "white" }}
              onClick={AddCenter}
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
        {!vaccinationCenter.loading && !vaccinationCenter.errors ? (
          <>
            <Result
              status="success"
              title="Centre de vaccination ajouté avec succès !"
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
export default AddCenter;
