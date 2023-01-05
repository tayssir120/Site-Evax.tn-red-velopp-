import { React, useEffect, useState } from "react";
import { Form, Input, Button, Result } from "antd";
import "antd/dist/antd.css";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import * as actions from "../../../redux/actions/vaccinationCenter/center";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../Head/NavBar/NavBar";
import { useHistory, useParams, useLocation } from "react-router-dom";
import AdminNavBar from "../AdminNavBar";

function UpdateCenter() {
  const history = useHistory();
  const location = useLocation();
  const handlePage = () => {
    history.push(`/centresDeVaccination`);
  };

  let {id} = useParams();
  let centerToUpdate = location.state;

  const [name, setName] = useState(centerToUpdate.name);
  const [adres, setAdres] = useState(centerToUpdate.address);
  const [gouv, setGouv] = useState(centerToUpdate.gouv);
  const [deleg, setDeleg] = useState(centerToUpdate.deleg);
  const [type, setType] = useState(centerToUpdate.type);
  const [cap, setCap] = useState(centerToUpdate.capacity);
  const [chef, SetChef] = useState(centerToUpdate.chef);

  const vaccinationCenter = useSelector((state) => state.vaccinationCenters);
  const dispatch = useDispatch();

  console.log (centerToUpdate.name)
 
  console.log(vaccinationCenter);

  const UpdateCenter = () => {
    let center = {
      name: name,
      type: type,
      adress: adres,
      chefCenter: chef,
      capacity: cap,
      centerGovernorate: gouv,
      centerDelegation: deleg
    }
    dispatch(actions.updateCenter(id,center))
    setTimeout(() => {
      history.push('/centresDeVaccination')
      dispatch(actions.RESET_ACTION());
    }, 3000)
  }

  return (
    <>
      <AdminNavBar />

      <div className="container">
        <h3>Mise à jour d'un centre de vaccination</h3>
        <br />
        <Form style={{ width: "90%", marginLeft: 300 }}>
          <Form.Item
            label="Nom du centre de vaccination :"
            name="name"
            style={{ display: "inline-block", width: "calc(60% - 8px)" }}
          >
            <Input
              defaultValue={centerToUpdate.name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Form.Item
              label="Gouvernorat :"
              name="gouv"
              style={{
                display: "inline-block",
                width: "calc(20% - 8px)",
                marginTop: -20,
              }}
            >
              <Input
                defaultValue={centerToUpdate.gouv}
                onChange={(e) => setGouv(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              label="Délégation :"
              name="deleg"
              style={{
                display: "inline-block",
                width: "calc(20% - 8px)",
                marginLeft: 10,
                marginTop: -20,
              }}
            >
              <Input
                defaultValue={centerToUpdate.deleg}
                onChange={(e) => setDeleg(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              label="Adresse :"
              name="adres"
              style={{
                display: "inline-block",
                width: "calc(20% - 8px)",
                marginLeft: 10,
                marginTop: -20,
              }}
            >
              <Input
                defaultValue={centerToUpdate.address}
                onChange={(e) => setAdres(e.target.value)}
              />
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Form.Item
              label="Type :"
              name="type"
              style={{
                display: "inline-block",
                width: "calc(30% - 8px)",
                marginTop: -30,
              }}
            >
              <Input
                defaultValue={centerToUpdate.type}
                onChange={(e) => setType(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              label="Capacité :"
              name="cap"
              style={{
                display: "inline-block",
                width: "calc(30% - 8px)",
                marginLeft: 10,
                marginTop: -30,
              }}
            >
              <Input
                defaultValue={centerToUpdate.capacity}
                onChange={(e) => setCap(e.target.value)}
              />
            </Form.Item>
          </Form.Item>
          <Form.Item
            label="Chef du centre de vaccination :"
            name="chef"
            style={{
              display: "inline-block",
              width: "calc(60% - 8px)",
              marginTop: -30,
            }}
          >
            <Input
              defaultValue={centerToUpdate.chef}
              onChange={(e) => SetChef(e.target.value)}
            />
          </Form.Item>

          <Form.Item style={{ width: "55%", margin: "auto", marginBottom: -5 }}>
            <Button
              shape="round"
              htmlType="submit"
              style={{ backgroundColor: "#d80000", color: "white" }}
              onClick={UpdateCenter}
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
                title="Centre de vaccination mise à jour avec succès !"
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
export default UpdateCenter;
