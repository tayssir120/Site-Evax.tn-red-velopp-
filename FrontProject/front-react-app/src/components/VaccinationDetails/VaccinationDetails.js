import React from "react";
import { Divider, Menu } from 'antd';
import NumberDose from "./NumberDose";
import VaccinationTitles from "./VaccinationTitles"
import VaccinationInformation from "./VaccinationInformation"

function VaccinationDetails() {

  return (
    <>
      <Menu mode="vertical" style={{ width: "100%", display:"inline-block"}}>
      <NumberDose/>
      <VaccinationTitles/>
      <VaccinationInformation/>
      </Menu>
    </>
  );
}

export default VaccinationDetails;


  