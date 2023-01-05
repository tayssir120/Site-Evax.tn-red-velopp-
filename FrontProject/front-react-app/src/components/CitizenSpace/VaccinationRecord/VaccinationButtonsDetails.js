import React , {useState} from 'react';
import ReactDOM from 'react-dom';
import { NavLink,useParams } from "react-router-dom";
import 'antd/dist/antd.css';
import { Button, Menu, Input, Slider , Alert, Divider} from 'antd';
import { useDispatch , useSelector} from "react-redux";
import * as actions from "../../../redux/actions/CitizenSpace/CitizenSpace";
import { MessageOutlined } from '@ant-design/icons';
import VaccinationDetails from '../../VaccinationDetails/VaccinationDetails';
import Footer from "../Footer/Footer"
import PersonnalInformations from '../PersonalInformations/PersonalInformations';
import NavBar from "../NavBar/NavBar"

function VaccinationButtons() {

    
    return (
      <>
      <NavBar/>
       <Divider/>
       <PersonnalInformations/>
       <Divider/>
      <Menu  mode="vertical" >
      <Button type="text" style={{"margin-left": '20px', "marginRight": "700px"}}><h3>Dossier de vaccination</h3></Button>
        <Button style={{"margin-right": '20px', "borderColor" : "red", "color" : "red","margin-left":"860px",width:"180px"}} >
        <NavLink
                to={`/EspaceCitoyen/1515841`}
              >
        Détails de la vaccination
       </NavLink>
       </Button>
        <Button icon={<MessageOutlined />} type="primary" disabled>
         Déclarer les effets indésirables 
       </Button>
       </Menu>
       <VaccinationDetails/>
       <Divider />
       <Footer/>
   </>    
    );
  }
export default VaccinationButtons

