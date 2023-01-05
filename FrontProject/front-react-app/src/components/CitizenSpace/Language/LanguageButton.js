import React from 'react';
import 'antd/dist/antd.css';
import { Menu, Dropdown, Button, message, Space, Tooltip } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';


function LanguageButton() {

const menu = (
  <Menu>
    <Menu.Item key="1" icon={<UserOutlined />}>
      Arabe 
    </Menu.Item>
    <Menu.Item key="2" icon={<UserOutlined />}>
      Francais
    </Menu.Item>
    <Menu.Item key="3" icon={<UserOutlined />}>
      Anglais
    </Menu.Item>
  </Menu>
);
    return (
      <>
       <Space wrap>
    <Dropdown overlay={menu}>
      <Button style={{"margin-right": '10px'}}>
        Francais <DownOutlined />
      </Button>
    </Dropdown>
  </Space>
      </>
    );
  }

export default LanguageButton