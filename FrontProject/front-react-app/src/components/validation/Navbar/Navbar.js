import React from "react"
import "./Navbar.css" 
import { Menu } from 'antd';
import { NavLink } from "react-router-dom";
import Logo from "../../Head/Logo/Logo";  
import { useDispatch, useSelector } from "react-redux";

import { UsergroupAddOutlined ,UserOutlined,CheckOutlined, LogoutOutlined} from '@ant-design/icons';
function Navbar() {
  
  
  return (
      <>
<Menu mode="horizontal">
<Menu.Item key="logo" disabled>
          <Logo></Logo>
        </Menu.Item>
      <Menu.Item key="fixe" >   
        <NavLink
                to="/validation/fixe"
                activeClassName="active"
                isActive={(_, { pathname }) =>
                  pathname.match("/hello") || pathname === "/"
                }
              >
             <UserOutlined /> Fixe
        </NavLink>
          
      </Menu.Item>
      <Menu.Item key="mobile" >
        <NavLink
                to="/validation/mobile"
                activeClassName="active"
                isActive={(_, { pathname }) =>
                  pathname.match("/hello") || pathname === "/"
                }
              >
                 <UsergroupAddOutlined /> Mobile
        </NavLink>        
      </Menu.Item>
      <Menu.Item key="verification" >
        <NavLink
                to="/validation/verification"
                activeClassName="active"
                isActive={(_, { pathname }) =>
                  pathname.match("/hello") || pathname === "/"
                }
              >
                 <CheckOutlined /> Verification Code
        </NavLink>        
      </Menu.Item>
      <Menu.Item key="logout" >
        
        <NavLink
                to="/validation/connect"
                activeClassName="active"
                isActive={(_, { pathname }) =>
                  pathname.match("/hello") || pathname === "/"
                }
              >
                 <LogoutOutlined /> Déconnexion
        </NavLink>        
      </Menu.Item>
      
        
</Menu>
   
            </>
  )
}

export default Navbar