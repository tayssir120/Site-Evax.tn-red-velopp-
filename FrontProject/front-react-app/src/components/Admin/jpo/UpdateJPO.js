import { React, useEffect, useState } from "react";
import { Form, Input, Button, Result } from "antd";
import "antd/dist/antd.css";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import * as actions from "../../../redux/actions/JPO/jpo";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../Head/NavBar/NavBar";
import { useHistory, useParams, useLocation } from "react-router-dom";
import AdminNavBar from "../AdminNavBar";


function UpdateJPO() {
    const history = useHistory();
    const location = useLocation();
    const handlePage = () => {
      history.push(`/ListJPO`);
    };
    let {id} = useParams();
    let JpoToUpdate = location.state;

  const [centerName, setCenterName] = useState(JpoToUpdate.centerName);
  const [numberPeopleToBeVaccinated, setNumberPeopleToBeVaccinated] = useState(JpoToUpdate.numberPeopleToBeVaccinated);
  const [chefCenter, setChefCenter] = useState(JpoToUpdate.chefCenter);
  const [nameOfvaccine, setNameOfvaccine] = useState(JpoToUpdate.nameOfvaccine);
  const [quantity, setQuantity] = useState(JpoToUpdate.quantity);
  const [ageRange, setAgeRange] = useState(JpoToUpdate.ageRange);
  const [centerId, SetCenterId] = useState(JpoToUpdate.centerId);

  const jpo = useSelector((state) => state.jpo);
  const dispatch = useDispatch();
  
  console.log(location.state);
  console.log(jpo);

  const UpdateJPO = () => {
    let jpo = {
        centerName: centerName,
        numberPeopleToBeVaccinated: numberPeopleToBeVaccinated,
        chefCenter: chefCenter,
        nameOfvaccine: nameOfvaccine,
        quantity: quantity,
        ageRange: ageRange,
        centerId: centerId
    }
    dispatch(actions.updateJPO(id, jpo))
   /* setTimeout(() => {
      
      //dispatch(actions.RESETJPO());
    }, 5000)*/
  }
  return (
    <>
      <AdminNavBar />

      <div className="container">
        <h3>Mise à jour d'une journée porte ouverte</h3>
        <br />
        <Form style={{ width: "90%", marginLeft: 300 }}>
          <Form.Item
            label="Nom du centre de vaccination :"
            name="centerName"
            style={{ display: "inline-block", width: "calc(60% - 8px)" }}
          >
            <Input
              defaultValue={JpoToUpdate.centerName}
              onChange={(e) => setCenterName(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Form.Item
              label="Nombre de personnes à vacciné :"
              name="numberPeopleToBeVaccinated"
              style={{
                display: "inline-block",
                width: "calc(20% - 8px)",
                marginTop: -20,
              }}
            >
              <Input
                defaultValue={JpoToUpdate.numberPeopleToBeVaccinated}
                onChange={(e) => setNumberPeopleToBeVaccinated(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              label=" chef du centre:"
              name="chefCenter"
              style={{
                display: "inline-block",
                width: "calc(20% - 8px)",
                marginLeft: 10,
                marginTop: -20,
              }}
            >
              <Input
                defaultValue={JpoToUpdate.chefCenter}
                onChange={(e) => setChefCenter(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              label="Nom du vaccin :"
              name="nameOfvaccine"
              style={{
                display: "inline-block",
                width: "calc(20% - 8px)",
                marginLeft: 10,
                marginTop: -20,
              }}
            >
              <Input
                defaultValue={JpoToUpdate.nameOfvaccine}
                onChange={(e) => setNameOfvaccine(e.target.value)}
              />
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Form.Item
              label="Quantité :"
              name="quantity"
              style={{
                display: "inline-block",
                width: "calc(30% - 8px)",
                marginTop: -30,
              }}
            >
              <Input
                defaultValue={JpoToUpdate.quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              label="Tranche d'âge :"
              name="ageRange"
              style={{
                display: "inline-block",
                width: "calc(30% - 8px)",
                marginLeft: 10,
                marginTop: -30,
              }}
            >
              <Input
                defaultValue={JpoToUpdate.ageRange}
                onChange={(e) => setAgeRange(e.target.value)}
              />
            </Form.Item>
          </Form.Item>
          <Form.Item
            label="Id du centre :"
            name="centerId"
            style={{
              display: "inline-block",
              width: "calc(60% - 8px)",
              marginTop: -30,
            }}
          >
            <Input
              defaultValue={JpoToUpdate.centerId}
              onChange={(e) => SetCenterId(e.target.value)}
            />
          </Form.Item>

          <Form.Item style={{ width: "55%", margin: "auto", marginBottom: -5 }}>
            <Button
              shape="round"
              htmlType="submit"
              style={{ backgroundColor: "#d80000", color: "white" }}
              onClick={UpdateJPO}
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
        {!jpo.loading && !jpo.errors ? (
            <>
              <Result
                status="success"
                title="JPO mise à jour avec succès !"
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
export default UpdateJPO;
