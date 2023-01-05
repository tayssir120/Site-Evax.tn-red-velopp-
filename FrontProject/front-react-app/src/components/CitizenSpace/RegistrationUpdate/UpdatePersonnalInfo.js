import React, { useState } from "react";
import { Button, Menu, Divider } from 'antd';
import { DatePicker, Space, Input, Radio, Form } from 'antd';
import { NavLink, useParams } from "react-router-dom";
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { Alert } from 'antd';
import { useLocation } from "react-router-dom";
import * as actions from "../../../redux/actions/CitizenSpace/CitizenSpace";

function onChange(date, dateString) {
  console.log(date, dateString);
}

function UpdatePersonnalInfo() {
  const history = useHistory();
  const location = useLocation();
  let { code } = useParams();
  let CitizenToUpdate = location.state;
  const [infectedWithCovid, setInfectedWithCovid] = useState(false);
  const [infectionDate, setInfectionDate] = useState("");
  const citizenSpace = useSelector((state) => state.CitizenSpace);
  const dispatch = useDispatch();

  const UpdateCitizen = () => {
    let citizen = {
      infectedWithCovid: infectedWithCovid,
      infectionDate: infectionDate
    }

    dispatch(actions.PersonUpdate(code, citizen))
    history.push(`/EspaceCitoyen/${code}`)
    /* setTimeout(() => {
       
       //dispatch(actions.RESETJPO());
     }, 5000)*/
  }
  return (
    <>
      <Menu>
        <div mode="vertical" >
          <Button type="text" style={{ "margin-left": '20px', "marginRight": "450px", }}><h3>Modifier vos données personnelles</h3></Button>
          <Divider />
          <Form>
          <Form.Item
            label="Avez-vous été atteint de la COVID-19 ?:"
            name="infectedWithCovid"
            >
            <Radio.Group >
              <Radio value="True">OUI</Radio>
              <Radio value="False">NON</Radio>
            </Radio.Group>
          </Form.Item>
         
          <div mode="vertical" style={{ width: "50%", display: "inline-block" }} >
            <Space direction="vertical">
              <DatePicker onChange={onChange} />
            </Space>
          </div>
        
        <div style={{ width: "30%", display: "inline-block" }} >
          <Button onClick={UpdateCitizen} style={{ "margin-right": '20px', "margin-left": "30px", "marginTop": "20px", "background-color": "#D80000", color: "white", width: "350px" }} >

            Confirmer
          </Button>
        </div>

        <div style={{ width: "30%", display: "inline-block" }}>
          <Button style={{ "margin-right": '20px', "margin-left": "30px", "marginTop": "20px", width: "350px" }}>
            <NavLink
              to={`/EspaceCitoyen/` + code}
            >
              Annuler
            </NavLink>
          </Button>
        </div>
        <Divider />
        <div style={{ width: "30%", "margin-left": "500px", display: "inline-block" }}>
          <Alert message="Success Tips" type="success" showIcon />
        </div>
        </Form>
        </div>
      </Menu>
    </>
  );

}
export default UpdatePersonnalInfo;