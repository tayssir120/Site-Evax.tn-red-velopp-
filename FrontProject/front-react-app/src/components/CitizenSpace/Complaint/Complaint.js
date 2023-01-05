import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Menu, Dropdown, Button, Space } from 'antd';

function Complaint() {
    
const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" style={{"text-align": "center"}}>
             Remplir des questionnaires de suivi médicale
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com" style={{"text-align": "center"}}>
        déclarer des abus ou des écarts lors du processus de vaccination
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com" style={{"text-align": "center"}}>
        Réclamation
        </a>
      </Menu.Item>
    </Menu>
  );
    return (
      <>
        <Space direction="vertical">
    <Space wrap>
      <Dropdown overlay={menu} placement="bottomLeft">
        <Button style={{"color" : "red"}} style={{"margin-right": '10px'}}>Réclamation</Button>
      </Dropdown>
    </Space>
  </Space>
      </>
    );
  }

export default Complaint