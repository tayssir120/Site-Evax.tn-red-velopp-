import React from 'react';
import { Button} from 'antd';
import {InfoCircleOutlined } from '@ant-design/icons';

function VaccinationTitles() {

    return (
      <>
        <div mode="vertical" style={{ width: "30%", display:"inline-block","backgroundColor" : "white"}} >
        <Button icon={<InfoCircleOutlined />} style={{"margin-left": '150px', "marginBottom":"40px", "marginTop": "5%"}} type="text"> Informations sur la vaccination</Button>
          <p style={{ width: "30%", "marginBottom" : "4%"}}>Numero de dose :</p>
          <p style={{ width: "30%", "marginBottom" : "4%"}}>Nom du vaccin : </p>
          <p style={{ width: "24%", "marginBottom" : "4%"}}>Fournisseur : </p>
          <p style={{ width: "24%", "marginBottom" : "4%"}}>N° lot : </p>
          <p style={{ width: "44%", "marginBottom" : "4%"}}>Vaccinateur : </p>
          <p style={{ width: "44%", "marginBottom" : "4%"}}>Heure et date du vaccin : </p>
        </div>
      </>
    );
  }

export default VaccinationTitles


