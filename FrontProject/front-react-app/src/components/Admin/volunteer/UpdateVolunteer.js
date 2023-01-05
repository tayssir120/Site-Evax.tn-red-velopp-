import { React, useEffect, useState } from "react";
import { Form, Input, Button, Result } from "antd";
import "antd/dist/antd.css";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import * as actions from "../../../redux/actions/volunteer/volunteer";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../Head/NavBar/NavBar";
import { useHistory, useParams, useLocation } from "react-router-dom";
import AdminNavBar from "../AdminNavBar";


function UpdateVolunteer() {
    const history = useHistory();
    const location = useLocation();
    const handlePage = () => {
      history.push(`/ListVolunteer`);
    };
    let {id} = useParams();
    let VolunteerToUpdate = location.state;

  const [firstName, setFirstName] = useState(VolunteerToUpdate.firstName);
  const [lastName, setLastName] = useState(VolunteerToUpdate.lastName);
  const [tel, setTel] = useState(VolunteerToUpdate.tel);
  const [position, setPosition] = useState(VolunteerToUpdate.position);
  const [workPlace, setWorkPlace] = useState(VolunteerToUpdate.workPlace);

  const volunteer = useSelector((state) => state.volunteer);
  const dispatch = useDispatch();
  
  console.log(VolunteerToUpdate);
  console.log(volunteer);

  const UpdateVolunteer = () => {
    let volunteer = {
        firstName: firstName,
        lastName: lastName,
        tel: tel,
        position: position,
        workPlace: workPlace
    }
    dispatch(actions.updateVolunteer(id, volunteer))
    history.push('/ListVolunteer')
   /* setTimeout(() => {
      
      //dispatch(actions.RESETJPO());
    }, 5000)*/
  }
  return (
    <>
      <AdminNavBar />
      <div className="container">
        <h3>Mise à jour d'un volontaire</h3>
        <br />
        <Form style={{ width: "90%", marginLeft: 300 }}>
          <Form.Item
            label="Nom du volontaire :"
            name="firstName"
            style={{ display: "inline-block", width: "calc(60% - 8px)" }}
          >
            <Input
              defaultValue={VolunteerToUpdate.firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Form.Item
              label="Prénom du volontaire :"
              name="lastName"
              style={{
                display: "inline-block",
                width: "calc(20% - 8px)",
                marginTop: -20,
              }}
            >
              <Input
                defaultValue={VolunteerToUpdate.lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              label=" Téléphone du volontaire:"
              name="tel"
              style={{
                display: "inline-block",
                width: "calc(20% - 8px)",
                marginLeft: 10,
                marginTop: -20,
              }}
            >
              <Input
                defaultValue={VolunteerToUpdate.tel}
                onChange={(e) => setTel(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              label="Position du volontaire :"
              name="position"
              style={{
                display: "inline-block",
                width: "calc(20% - 8px)",
                marginLeft: 10,
                marginTop: -20,
              }}
            >
              <Input
                defaultValue={VolunteerToUpdate.position}
                onChange={(e) => setPosition(e.target.value)}
              />
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Form.Item
              label="Lieu de travail :"
              name="workPlace"
              style={{
                display: "inline-block",
                width: "calc(30% - 8px)",
                marginTop: -30,
              }}
            >
              <Input
                defaultValue={VolunteerToUpdate.workPlace}
                onChange={(e) => setWorkPlace(e.target.value)}
              />
            </Form.Item>
          </Form.Item>

          <Form.Item style={{ width: "55%", margin: "auto", marginBottom: -5 }}>
            <Button
              shape="round"
              htmlType="submit"
              style={{ backgroundColor: "#d80000", color: "white" }}
              onClick={UpdateVolunteer}
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
        {!volunteer.loading && !volunteer.errors ? (
            <>
              <Result
                status="success"
                title="Volunteer mise à jour avec succès !"
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
export default UpdateVolunteer;
