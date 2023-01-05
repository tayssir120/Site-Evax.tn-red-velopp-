import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import logo from "../../../new.png"
import {FileAddOutlined , CopyFilled} from '@ant-design/icons';
import { Menu, Dropdown, Button, Space } from 'antd';
import logo1 from '../../../1.PNG';
import logo3 from '../../../2.PNG';
import logo4 from '../../../Code.PNG';

import jsPDF from 'jspdf';

const pdfGenerateFrancais = () => {
  var doc = new jsPDF('landscape', 'px', 'a4', 'false');
  doc.addImage(logo1, 'PNG', 120, 20, 90, 90)
  doc.text(280,50,"Certificat de")
  doc.text(270,70,"vaccination anti")
  doc.text(290,90,"COVID")
  doc.addImage(logo3, 'PNG', 430, 20, 90, 90)
  doc.text(40,150,"Numéro d'inscription EVAX : 225245108")
  doc.text(40,180,"Nom et Prénom : Tayssir Jbélia")
  doc.text(40,210,"Type d'identifiant : Citoyen titulaire d'une carte d'identité nationale")
  doc.text(40,240,"Date de naissance : 10 août 1997")
  doc.text(300,180,"Carte d'identité nationale 11403727")
  doc.text(40,270," Référence du certificat de vaccination :ac41b259-0571-459d-b5be-4bfeaf6de157")
  doc.text(40,300," Nom du vaccin - 1ère dose : Pfizer-biontech")
  doc.text(300,300," N° lot - 1ère dose FG3528")
  doc.text(40,340," Date de la vaccination - 1ère dose 10 octobre 2021")
  doc.text(40,370," Date du COVID 1 juillet 2021")
  doc.text(300,370,"Ayant contracté le Covid ( sur la base à votre déclaration), une seule dose vous est recommandée. ")
  doc.text(40,410,"Centre de vaccination: MAISON DES JEUNES SIDI SALEM -BIZERTE VILLE")
  doc.addImage(logo4, 'PNG', 490, 190, 90, 100)
  doc.setFont('Helvertica', 'bold')
  doc.save('certificat.pdf')
}

const pdfGenerateAnglais = () => {
  var doc = new jsPDF('landscape', 'px', 'a4', 'false');
  doc.addImage(logo1, 'PNG', 120, 20, 90, 90)
  doc.text(250,50,"COVID vaccination")
  doc.text(275,70,"certificate")
  doc.addImage(logo3, 'PNG', 430, 20, 90, 90)
  doc.text(40,150,"EVAX registration number : 225245108")
  doc.text(40,180,"Last name and first name : Tayssir Jbélia")
  doc.text(40,210,"Identifier type : Citoyen titulaire d'une carte d'identité nationale")
  doc.text(40,240,"Date of Birth : 10 août 1997")
  doc.text(300,180,"National ID card: 11403727")
  doc.text(40,270," Reference of the vaccination certificat :ac41b259-0571-459d-b5be-4bfeaf6de157")
  doc.text(40,300," Vaccine name - 1st dose : Pfizer-biontech")
  doc.text(300,300," Batch N° - 1st dose: FG3528")
  doc.text(40,340," COVID Date: 10 octobre 2021")
  doc.text(40,370," Date du COVID 1 juillet 2021")
  doc.text(300,370,"Having contracted the Covid (based on your declaration)")
  doc.text(300,390,"a single dose is recommended to you")
  doc.text(40,410,"Vaccination cente: MAISON DES JEUNES SIDI SALEM -BIZERTE VILLE")
  doc.addImage(logo4, 'PNG', 490, 190, 90, 100)
  doc.setFont('Helvertica', 'bold')
  doc.save('certificat.pdf')
}

function Part1() {
  
    const menu = (
        <Menu>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" style={{"text-align": "center"}}>
                Arabe
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" onClick={pdfGenerateFrancais} style={{"text-align": "center"}}>
           Francais
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" onClick={pdfGenerateAnglais} style={{"text-align": "center"}}>
            Anglais
            </a>
          </Menu.Item>
        </Menu>
      );
    return (
      <>
       <div  mode="vertical"  style={{ width: "25%", display:"inline-block", "marginLeft" : "20px", "backgroundColor" : "white"}}>
          <img src={logo} style={{"margin-left": '120px', "marginRight": "450px", "marginBottom" : "3px"}}/>
          <Space direction="vertical"  >
            <Space wrap>
            <Dropdown overlay={menu} placement="bottomLeft" >
                <Button icon={<CopyFilled />} style={{"margin-left": '10px'}}>Consulter votre Certificat de vaccination</Button>
            </Dropdown>
            </Space>
        </Space>
        </div>
      </>
    );
  }

export default Part1


       
    