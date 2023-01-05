import React,  { useRef } from 'react';
import 'antd/dist/antd.css';
import logo from "../../../new1.png"
import { CopyFilled} from '@ant-design/icons';
import { Menu, Dropdown, Button, Space } from 'antd';
import logo1 from '../../../photo1.PNG';
import logo2 from '../../../photo2.PNG';
import logo3 from '../../../photo3.PNG';
import logo4 from '../../../Code.PNG';
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
  doc.text(20,420," A photo id must be available when presenting your vaccine pass for verification Children without id card must be ")
  doc.text(20,440,"accompanied by a legal guardian")
  doc.setFont('Helvertica', 'bold')
  doc.save('passvaccinal.pdf')
 
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
       <div  mode="vertical"  style={{ width: "25%", display:"inline-block", "backgroundColor" : "white"}}>
          <img src={logo} style={{"margin-left": '125px', "marginRight": "45px"}}/>
          <Space direction="vertical">
            <Space wrap>
            <Dropdown overlay={menu} placement="bottomLeft">
                <Button icon={<CopyFilled />} style={{"color" : "red"}} style={{"margin-left": '60px'}}>Consulter votre Pass vaccinal</Button>
            </Dropdown>
            </Space>
        </Space>
        </div>
      </>
    );
  }

export default Part2


       
    