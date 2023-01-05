import React, {useState} from 'react';
import 'antd/dist/antd.css';
import { NavLink, useParams } from "react-router-dom";
import { Button, Menu, Input, Slider , Alert, Form} from 'antd';
import { useDispatch , useSelector} from "react-redux";
import { useHistory } from "react-router-dom"
import { Redirect } from "react-router-dom";
import * as actions from "../../redux/actions/CitizenSpace/CitizenSpace";


function Authentification() {
  let history = useHistory();
  const { code } = useParams()
  const loginwithCode = useSelector((state) => (state.citizenSpaceCode))
  const personInformation = useSelector((state) => (state.CitizenSpace))
  const dispatch = useDispatch();
  const [InputedCode, setInputedCode] = useState();

 
  const logCODE = () => {
   dispatch(actions.loginCODE(code));
   if(loginwithCode.redirectToNewPageCode == true){
    history.push(`/EspaceCitoyen/${code}`);
    dispatch(actions.PersonInfor(code));
   }
   
  
  };   
 
    return (
      <>
    
      
       <div  mode="vertical" style={{"backgroundColor" : "white"}} >
      <h3 style={{"margin-left": '350px', "marginRight": "450px", "marginTop" : "5%", "marginBottom" : "2%"}}>Veuillez vous connecter à votre espace citoyen</h3>
      <Form
    
    name="basic"
    labelCol={{
      span: 4,
    }}
    wrapperCol={{
      span:4,
    }}
    autoComplete="off"
  >
    <Form.Item
       style={{"marginLeft" : "450px"}}
      label="Code de vérification"
      name="Code de vérification"
      rules={[
        {
          required: true,
          message: 'le champ code est obligatoire!',
        },
      ]}
    >
      <Input onChange={(e) => setInputedCode(e.target.value)} />
    </Form.Item>
   
    <p style={{"marginLeft" : "260px", "marginTop" : "1.5%" , "color" : "#D80000" }}>Un e-mail a été envoyé a votre compte. Si vous n'avez recu aucun e-mail, vous pouvez cliquer ici pour le recevoir de nouveau. </p> 
    <Form.Item
        style={{"marginLeft" : "450px"}}
      wrapperCol={{
        offset: 4,
        span: 4,
      }}
    >
      <Button type="primary" htmlType="submit" onClick={logCODE}>
        Suivant
       
      </Button>
    </Form.Item>
  </Form>
 
    {!loginwithCode.errors ? (
            <div> </div>
        ) : (
          <>
          <Alert message="La connexion a échoué" type="error" />

          </>
        )}
        </div>
      </>
    );
  }

export default Authentification


