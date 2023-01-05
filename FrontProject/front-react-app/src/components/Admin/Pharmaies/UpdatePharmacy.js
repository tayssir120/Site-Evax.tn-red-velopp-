import { React, useEffect, useState } from "react";
import { Form, Input, Button, Result } from "antd";
import "antd/dist/antd.css";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import * as actions from "../../../redux/actions/pharmacy/pharmacy";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../Head/NavBar/NavBar";
import { useHistory, useParams, useLocation } from "react-router-dom";
import AdminNavBar from "../AdminNavBar";

function UpdatePharmacy() {
  const history = useHistory();
  const location = useLocation();

  const handlePage = () => {
    history.push(`/pharmacies`);
  };

  let { id } = useParams();
  let PharmacyToUpdate = location.state;

  console.log(PharmacyToUpdate)

  const [name, setName] = useState(PharmacyToUpdate.name);
  const [adres, setAdres] = useState(PharmacyToUpdate.address);
  const [gouv, setGouv] = useState(PharmacyToUpdate.gouv);
  const [deleg, setDeleg] = useState(PharmacyToUpdate.deleg);
  const [type, setType] = useState(PharmacyToUpdate.type);
  const [fixNumber, setFixNumber] = useState(PharmacyToUpdate.fixNumber);
  const [mobileNumber, SetMobileNumber] = useState(
    PharmacyToUpdate.mobileNumber
  );
  const [pharmacist, SetPharmacist] = useState(PharmacyToUpdate.pharmacist);

  const pharmacy = useSelector((state) => state.pharmacy);
  const dispatch = useDispatch();

  const UpdatePharmacy = () => {
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
    dispatch(actions.updatePharmacy(id, pharmacy));
    setTimeout(() => {
      history.push("/pharmacies");
      dispatch(actions.RESET_ACTION());
    }, 3000);
  };

  return (
    <>
      <AdminNavBar />

      <div className="container">
        <h3>Mise à jour d'une pharmacie</h3>
        <br />
        <Form style={{ width: "90%", marginLeft: 300 }}>
          <Form.Item
            label="Nom du pharmacie :"
            name="name"
            style={{ display: "inline-block", width: "calc(60% - 8px)" }}
          >
            <Input
              defaultValue={PharmacyToUpdate.name}
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
                defaultValue={PharmacyToUpdate.gouv}
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
                defaultValue={PharmacyToUpdate.deleg}
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
                defaultValue={PharmacyToUpdate.address}
                onChange={(e) => setAdres(e.target.value)}
              />
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Form.Item
              label="Propriétaire :"
              name="pharmacist"
              style={{
                display: "inline-block",
                width: "calc(20% - 8px)",
                marginTop: -30,
              }}
            >
              <Input
                defaultValue={PharmacyToUpdate.pharmacist}
                onChange={(e) => SetPharmacist(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              label="Numéro FIXE :"
              name="fixNumber"
              style={{
                display: "inline-block",
                width: "calc(20% - 8px)",
                marginLeft: 10,
                marginTop: -30,
              }}
            >
              <Input
                defaultValue={PharmacyToUpdate.fixNumber}
                onChange={(e) => setFixNumber(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              label="Numéro MOBILE :"
              name="mobileNumber"
              style={{
                display: "inline-block",
                width: "calc(20% - 8px)",
                marginTop: -30,
                marginLeft: 10,
              }}
            >
              <Input
                defaultValue={PharmacyToUpdate.mobileNumber}
                onChange={(e) => SetMobileNumber(e.target.value)}
              />
            </Form.Item>
          </Form.Item>

          <Form.Item
            label="Type :"
            name="type"
            style={{
              display: "inline-block",
              width: "calc(60% - 8px)",
              marginTop: -30,
            }}
          >
            <Input
              defaultValue={PharmacyToUpdate.type}
              onChange={(e) => setType(e.target.value)}
            />
          </Form.Item>

          <Form.Item style={{ width: "55%", margin: "auto", marginBottom: -5 }}>
            <Button
              shape="round"
              htmlType="submit"
              style={{ backgroundColor: "#d80000", color: "white" }}
              onClick={UpdatePharmacy}
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
              title="Pharmacie mise à jour avec succès !"
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
export default UpdatePharmacy;
