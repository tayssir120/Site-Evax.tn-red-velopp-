import React , {useEffect} from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from "react-router-dom";
import 'antd/dist/antd.css';
import { Button, Menu , Divider} from 'antd';
import { useDispatch , useSelector} from "react-redux";
import { MessageOutlined } from '@ant-design/icons';
import CertificateAndVaccinationPass from './CertificateAndVaccinationPass';
import DateOfAppointment from "./DateOfAppointment"
import NavBar from '../NavBar/NavBar';
import PersonnalInformations from '../PersonalInformations/PersonalInformations';
import Footer from '../Footer/Footer';
import { useHistory, useParams, useLocation } from "react-router-dom";
import * as actions from "../../../redux/actions/CitizenSpace/CitizenSpace";

function CitizenSpace() {
        let {code} = useParams() 
        console.log(code)
        const personInformation = useSelector((state) => (state.CitizenSpace))
        const dispatch = useDispatch();
        
        useEffect(() => {
          dispatch(actions.PersonInfor(code));
          console.log(personInformation.action.PersonInfor)
        }, []);

    return (
      <>
        
      <NavBar/>
       <Divider />
       
       {!personInformation.PersonLoading && !personInformation.errors && !personInformation.updated? (
         <>
         <PersonnalInformations
          citizen = {personInformation.action.PersonInfor}
          />
              <div  mode="inline" style={{"backgroundColor" : "white"}}  >
            <p style={{ width: "24%", display:"inline-block", "marginLeft": "3%"}}>N° EVAX : {personInformation.action.PersonInfor.code}</p>
            <p style={{ width: "24%", display:"inline-block"}}>	Nom et Prénom  : {personInformation.action.PersonInfor.firstname} {personInformation.action.PersonInfor.lastname}</p>
          <p style={{ width: "24%", display:"inline-block"}}>Carte d'identité nationale : {personInformation.action.PersonInfor.cin}</p>
          <p style={{ width: "24%", display:"inline-block"}}>Date de naissance : {personInformation.action.PersonInfor.dateOfBirth}</p>
         </div>
        </>
        ) : (
          <>
           <p>erreur</p>
          </>
        )}

      
    
      
       <Divider />
      <Menu  mode="vertical" >
      <Button type="text" style={{"margin-left": '20px', "marginRight": "700px"}}><h3>Dossier de vaccination</h3></Button>
        <Button style={{"margin-right": '20px', "borderColor" : "red", "color" : "red","margin-left":"860px",width:"180px"}} >
        <NavLink
                to="/page2"
              >
        Détails de la vaccination
       </NavLink>
       </Button>
        <Button icon={<MessageOutlined />} type="primary" disabled>
         Déclarer les effets indésirables 
       </Button>
       </Menu>
       <CertificateAndVaccinationPass/>
       <Divider />
       <Footer/>

   </>    
    );
  }
export default CitizenSpace

