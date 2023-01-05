import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Button, Menu } from 'antd';
import { UserOutlined, UserAddOutlined, DeleteOutlined } from '@ant-design/icons';
import { NavLink,useParams } from "react-router-dom";
import * as actions from "../../../redux/actions/CitizenSpace/CitizenSpace"
import { useDispatch , useSelector} from "react-redux";

function PersonnalInformations(props) { 
    console.log(props)
    return (
      <>
       <Menu  mode="vertical" >
       <Button type="text"  style={{"backgroundColor" : "white","margin-left": '20px', "marginRight": "500px", "marginBottom": "30px"}}><h3>Informations personnelles</h3></Button>
         <Button  style={{"margin-right": '20px'}} icon={<UserOutlined />}>
         <NavLink
                to={`/ModifierDonnéesPersonnelles/` + props.citizen.code}
              >
       Modifier vos données personnelles
        </NavLink>
          
         </Button>
         <Button style={{"color" : "red"}} icon={<DeleteOutlined />}>clôtuer mon dossier</Button>
        </Menu>
        
      </>
    );
  }

export default PersonnalInformations

