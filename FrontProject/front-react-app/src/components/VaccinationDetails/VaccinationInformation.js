import React from 'react';
import { Button} from 'antd';
import {InfoCircleOutlined } from '@ant-design/icons';

function VaccinationTitles() {

    return (
      <>
        <div mode="vertical" style={{ width: "30%", display:"inline-block","backgroundColor" : "white"}} >
          <p style={{ width: "30%", "marginBottom" : "4%"}}>1</p>
          <p style={{ width: "30%", "marginBottom" : "4%"}}>Pfizer-biontech</p>
          <p style={{ width: "24%", "marginBottom" : "4%"}}> Pfizer</p>
          <p style={{ width: "24%", "marginBottom" : "4%"}}> FG3528</p>
          <p style={{ width: "55%", "marginBottom" : "4%"}}> Bizerte Agent Mobile Pfizer 29</p>
          <p style={{ width: "44%", "marginBottom" : "4%"}}> 10 octobre 2021, 15:19</p>
        </div>
      </>
    );
  }

export default VaccinationTitles


