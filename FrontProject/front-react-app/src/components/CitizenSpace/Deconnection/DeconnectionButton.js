import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from "react-router-dom";
import 'antd/dist/antd.css';
import { Button, Tooltip } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';

function DeconnectionButton() {

    return (
        <>
              <Button shape="circle" icon={<LogoutOutlined />} style={{"color" : "red"}}>
              <NavLink
                    to="/AuthentificationEvax"
                    activeClassName="active"
                    isActive={(_, { pathname }) =>
                      pathname.match("/hello") || pathname === "/"
                    }
                  >
                    Déconnexion
          </NavLink>
       </Button>
  
      </>
    );
  }

export default DeconnectionButton