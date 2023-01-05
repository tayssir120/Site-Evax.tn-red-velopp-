import { React, useEffect, useState } from "react";
import { Form, Input, Button, Result, Alert } from "antd";
import "antd/dist/antd.css";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import * as actions from "../../../redux/actions/volunteer/volunteer"
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../Head/NavBar/NavBar";
import { useHistory, useParams, useLocation } from "react-router-dom";
import AdminNavBar from "../AdminNavBar";

function AddVolunteer() {
  const history = useHistory();

const handlePage = () => {
    history.push(`/ListVolunteer`);
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState(0);
  const [tel, setTel] = useState("");
  const [position, setPosition] = useState("");
  const [workPlace, setWorkPlace] = useState(0);

  const Volunteer = useSelector((state) => state.volunteer);
  const dispatch = useDispatch();

  console.log(Volunteer);

  const AddVolunteer = () => {
    let volunteer = {
        firstName: firstName,
        lastName: lastName,
        tel: tel,
        position: position,
        workPlace: workPlace
    }
    dispatch(actions.addVolunteer(volunteer))
    setTimeout(() => {
      history.push('/ListVolunteer')
      dispatch(actions.RESETVolunteer());
    }, 5000)
  }
  return (
    <>
      <AdminNavBar />

      <div className="container">
        <h3>Ajout d'un volontaire</h3>
        <br />
        <Form style={{ width: "90%", marginLeft: 300 }}>
          <Form.Item
            label="Nom :"
            name="firstName"
            rules={[{ required: true, message: "Veuillez entrer le nom SVP!" }]}
            style={{ display: "inline-block", width: "calc(60% - 8px)" }}
          >
            <Input
              placeholder="Nom du volontaire"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Form.Item
              label="Prénom :"
              name="lastName"
              rules={[
                {
                  required: true,
                  message: "Veuillez entrer le prénom SVP!",
                },
              ]}
              style={{
                display: "inline-block",
                width: "calc(20% - 8px)",
                marginTop: -20,
              }}
            >
              <Input
                placeholder="Prénom du volontaire "
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              label="Télephone du volontaire :"
              name="tel"
              rules={[
                {
                  required: true,
                  message: "Veuillez entrer le téléphone SVP!",
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
                placeholder="Telephone du volontaire"
                onChange={(e) => setTel(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              label="position :"
              name="position"
              rules={[
                { required: true, message: "Veuillez entrer la positionn du volontaire SVP!" },
              ]}
              style={{
                display: "inline-block",
                width: "calc(20% - 8px)",
                marginLeft: 10,
                marginTop: -20,
              }}
            >
              <Input
                placeholder="position du volontaire"
                onChange={(e) => setPosition(e.target.value)}
              />
            </Form.Item>
          </Form.Item>
          <Form.Item
              label="lieu de travail :"
              name="workPlace"
              rules={[
                { required: true, message: "Veuillez entrer le lieu de travail SVP!" },
              ]}
              style={{
                display: "inline-block",
                width: "calc(30% - 8px)",
                marginLeft: 10,
                marginTop: -30,
              }}
            >
              <Input
                placeholder="lieu de travail"
                onChange={(e) => setWorkPlace(e.target.value)}
              />
            </Form.Item>
          <Form.Item>     
          </Form.Item>
         

          <Form.Item style={{ width: "55%", margin: "auto", marginBottom: -5 }}>
            <Button
              shape="round"
              htmlType="submit"
              style={{ backgroundColor: "#d80000", color: "white" }}
              onClick={AddVolunteer}
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
        {!Volunteer.loading && !Volunteer.errors ? (
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
export default AddVolunteer;

