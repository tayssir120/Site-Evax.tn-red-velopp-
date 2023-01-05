import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Button, Menu } from 'antd';
import logo from "../../../Capture2.PNG"
import {CalendarOutlined } from '@ant-design/icons';

function DateOfAppointment() {
    return (
      <>
       <Menu  mode="vertical"  style={{ width: "25%", display:"inline-block", "backgroundColor" : "white", "marginLeft": "-50px"}} >
          <Button icon={<CalendarOutlined />} style={{"margin-left": '110px', "marginBottom":"10px"}} type="text"> Date du rendez-vous</Button>
          <img src={logo} style={{"margin-left": '170px', "marginRight": "45px"}}/>
          <Button type="text"style={{"margin-left": '40px', "marginTop":"10px", "textSize": "12px"}}><h3>Aucun rendez-vous prévu</h3></Button>
        </Menu>
      </>
    );
  }

export default DateOfAppointment


       
    
