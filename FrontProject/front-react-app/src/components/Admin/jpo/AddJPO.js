import { React, useEffect, useState } from "react";
import { Form, Input, Button, Result, Alert } from "antd";
import "antd/dist/antd.css";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import * as actions from "../../../redux/actions/JPO/jpo"
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../Head/NavBar/NavBar";
import { useHistory, useParams, useLocation } from "react-router-dom";
import AdminNavBar from "../AdminNavBar";

function AddJpo() {
  const history = useHistory();

const handlePage = () => {
    history.push(`/ListJPO`);
  };

  const [centerName, setCenterName] = useState("");
  const [numberPeopleToBeVaccinated, setNumberPeopleToBeVaccinated] = useState(0);
  const [chefCenter, setChefCenter] = useState("");
  const [nameOfvaccine, setNameOfvaccine] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [ageRange, setAgeRange] = useState("");
  const [centerId, SetCenterId] = useState("");

  const JPO = useSelector((state) => state.jpo);
  const dispatch = useDispatch();

  console.log(JPO);

  const AddJPO = () => {
    let jpo = {
        centerName: centerName,
        numberPeopleToBeVaccinated: numberPeopleToBeVaccinated,
        chefCenter: chefCenter,
        nameOfvaccine: nameOfvaccine,
        quantity: quantity,
        ageRange: ageRange,
        centerId: centerId
    }
    dispatch(actions.addJPO(jpo))
    setTimeout(() => {
      history.push('/ListJPO')
      dispatch(actions.RESETJPO());
    }, 5000)
  }
  return (
    <>
      <AdminNavBar />

      <div className="container">
        <h3>Ajout d'une Journée porte ouverture</h3>
        <br />
        <Form style={{ width: "90%", marginLeft: 300 }}>
          <Form.Item
            label="Nom du centre de vaccination :"
            name="name"
            rules={[{ required: true, message: "Veuillez entrer le nom SVP!" }]}
            style={{ display: "inline-block", width: "calc(60% - 8px)" }}
          >
            <Input
              placeholder="Nom du centre de vaccination"
              onChange={(e) => setCenterName(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Form.Item
              label="Nombre de personnes à vacciné :"
              name="gouv"
              rules={[
                {
                  required: true,
                  message: "Veuillez entrer le nombre de personnes a vacciné SVP!",
                },
              ]}
              style={{
                display: "inline-block",
                width: "calc(20% - 8px)",
                marginTop: -20,
              }}
            >
              <Input
                placeholder="Nombre de personnes à vacciné "
                onChange={(e) => setNumberPeopleToBeVaccinated(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              label="Chef du centre de vaccination :"
              name="deleg"
              rules={[
                {
                  required: true,
                  message: "Veuillez entrer le chef du centre SVP!",
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
                placeholder="Chef du centre de vaccination"
                onChange={(e) => setChefCenter(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              label="nom du vaccin :"
              name="adres"
              rules={[
                { required: true, message: "Veuillez entrer le nom de vaccin SVP!" },
              ]}
              style={{
                display: "inline-block",
                width: "calc(20% - 8px)",
                marginLeft: 10,
                marginTop: -20,
              }}
            >
              <Input
                placeholder="nom du vaccin"
                onChange={(e) => setNameOfvaccine(e.target.value)}
              />
            </Form.Item>
          </Form.Item>
          <Form.Item
              label="quantité du vaccin  :"
              name="quantity"
              rules={[
                { required: true, message: "Veuillez entrer la quantité SVP!" },
              ]}
              style={{
                display: "inline-block",
                width: "calc(30% - 8px)",
                marginLeft: 10,
                marginTop: -30,
              }}
            >
              <Input
                placeholder="la quantité du vaccin"
                onChange={(e) => setQuantity(e.target.value)}
              />
            </Form.Item>
          <Form.Item>
            <Form.Item
              label="Tranche d'âge:"
              name="type"
              rules={[
                { required: true, message: "Veuillez entrer le tranche d'âge SVP!" },
              ]}
              style={{
                display: "inline-block",
                width: "calc(30% - 8px)",
                marginTop: -30,
              }}
            >
              <Input
                placeholder="Tranche d'âge"
                onChange={(e) => setAgeRange(e.target.value)}
              />
            </Form.Item>
    
            <Form.Item
              label="center id :"
              name="cap"
              rules={[
                { required: true, message: "Veuillez entrer l'id SVP!" },
              ]}
              style={{
                display: "inline-block",
                width: "calc(30% - 8px)",
                marginLeft: 10,
                marginTop: -30,
              }}
            >
              <Input
                placeholder="id du centre"
                onChange={(e) => SetCenterId(e.target.value)}
              />
            </Form.Item>
          </Form.Item>
         

          <Form.Item style={{ width: "55%", margin: "auto", marginBottom: -5 }}>
            <Button
              shape="round"
              htmlType="submit"
              style={{ backgroundColor: "#d80000", color: "white" }}
              onClick={AddJPO}
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
        {!JPO.loading && !JPO.errors ? (
            <>
              <Result
                status="success"
                title="JPO ajouté avec succès !"
                subTitle=""
              />
            </>
          ) : (
            <div>
               
            </div>
          )}
      </div>
    </>
  );
}
export default AddJpo;

