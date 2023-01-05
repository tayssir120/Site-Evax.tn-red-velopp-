import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import logo from "../../../new2.png"
import {FileAddOutlined , CopyFilled} from '@ant-design/icons';
import { Menu, Dropdown, Button, Space } from 'antd';
import logo1 from '../../../photo1.PNG';
import logo2 from '../../../photo2.PNG';
import logo3 from '../../../photo3.PNG';
import logo4 from '../../../Code.PNG';
import logo5 from '../../../tunisia.PNG';
import logo6 from '../../../code1.PNG';
import logo7 from '../../../europe.PNG';
import jsPDF from 'jspdf';

const pdfGenerate = () => {
  var doc = new jsPDF('landscape', 'px', 'a4', 'false');
  doc.addImage(logo1, 'PNG', 150, 20, 90, 100)
  doc.addImage(logo2, 'PNG', 290, 10, 90, 100)
  doc.addImage(logo3, 'PNG', 430, 20, 90, 100)
  doc.text(250,160,"VACCINE PASSPORT COVID-19")
  doc.text(280,184,"Pass Id: 225245108")
  doc.text(40,220,"Full Name: Tayssir Jbélia")
  doc.text(40,250,"Date of Birth: 10/08/1997")
  doc.text(40,280,"Guardian Full Name (for children):")
  doc.text(40,310,"Effective Date: 17/10/2021")
  doc.text(40,340,"stamp Electronic:")
  doc.addImage(logo4, 'PNG', 290, 300, 90, 100)
  doc.addImage(logo5, 'PNG', 290, 260, 90, 30)
  doc.addImage(logo7, 'PNG', 420, 260, 90, 30)
  doc.addImage(logo6, 'PNG', 420, 310, 90, 85)
  doc.text(20,420," A photo id must be available when presenting your vaccine pass for verification Children without id card must be ")
  doc.text(20,440,"accompanied by a legal guardian")
  doc.setFont('Helvertica', 'bold')
  doc.save('passeurope.pdf')
}

function Part2() {
    const menu = (
        <Menu>
          <Menu.Item icon={<CopyFilled />}>
            <a target="_blank" rel="noopener noreferrer"  onClick={pdfGenerate}  style={{"text-align": "center"}}>
             PDF
            </a>
          </Menu.Item>
        </Menu>
      );
    return (
      <>
       <div  mode="vertical"  style={{"marginLeft":"5px", width: "25%", display:"inline-block", "backgroundColor" : "white"}}>
          <img src={logo} style={{"margin-left": '100px', "marginRight": "40px", "marginBottom" : "15px"}}/>
          <Space direction="vertical">
            <Space wrap>
            <Dropdown overlay={menu} placement="bottomLeft">
                <Button icon={<CopyFilled />} style={{"color" : "red"}} style={{"margin-left": '20px'}}>Consulter votre Pass vaccinal Européen</Button>
            </Dropdown>
            </Space>
        </Space>
        </div>
      </>
    );
  }

export default Part2


       
    