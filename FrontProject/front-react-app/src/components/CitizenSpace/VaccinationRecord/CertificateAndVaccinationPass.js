import React, {useState} from 'react';
import 'antd/dist/antd.css';
import {FileAddOutlined , CopyFilled} from '@ant-design/icons';
import { Menu, Dropdown, Button, Space } from 'antd';
import Part1 from './Part1';
import Part2 from './Part2';
import Part3 from './Part3';
import logo from "../../../Capture2.PNG"
import {CalendarOutlined } from '@ant-design/icons';
import DateOfAppointment from './DateOfAppointment';


function CertificateAndVaccinationPass() {
  
    return (
      <div>
  <Menu  mode="horizental" >
  <DateOfAppointment/>
  <Part1/>
  <Part2/>
  <Part3/>

   </Menu>

</div>
    );
  }

export default CertificateAndVaccinationPass




       
    