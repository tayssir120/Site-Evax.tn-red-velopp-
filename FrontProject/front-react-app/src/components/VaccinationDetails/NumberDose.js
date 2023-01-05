import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Button, Menu,Dropdown,Space } from 'antd';
import {DownOutlined,EditOutlined } from '@ant-design/icons';


function NumberDose() {
    const menu = (
        <Menu>
          <Menu.Item key="1" >
            1ére dose 
          </Menu.Item>
          <Menu.Item key="2">
            2éme dose
          </Menu.Item>
          <Menu.Item key="3" >
            3éme dose
          </Menu.Item>
        </Menu>
      );
    return (
      <>
       <div  mode="vertical" style={{"width": "40%", display:"inline-block","backgroundColor": "white", "marginTop": "5px"}} >
          <Button icon={<EditOutlined />} style={{"margin-left": '175px',"marginBottom":"3%"}} type="text">Sélectionner une dose</Button>
            <Space wrap>
            <Dropdown overlay={menu}>
            <Button style={{ "marginLeft" : "220px"}}>
                1ére dose <DownOutlined />
            </Button>
            </Dropdown>
        </Space>
        </div>
      </>
    );
  }

export default NumberDose


       
    
