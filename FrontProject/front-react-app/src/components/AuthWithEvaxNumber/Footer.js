import React from "react";
import logo from "../../Capture1.PNG";
import { Menu, Dropdown, Button, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

function Footer() {
  const menu = {
    /*    <Menu>
          <Menu.Item key="1" >
            Arabe 
          </Menu.Item>
          <Menu.Item key="2">
            Francais
          </Menu.Item>
          <Menu.Item key="3" >
            Anglais
          </Menu.Item>
        </Menu> */
  };
  return (
    <>
      <div>
        <p style={{ marginTop: "6%", marginLeft: "15%" }}>
          Les citoyens Tunisiens à l’étranger, inscrits sur Evax, peuvent
          accéder à leur espace citoyen. Ils recevront le code d’accès sur le
          numéro Tunisien.
        </p>
        <img
          src={logo}
          width="185"
          height="35"
          style={{ "margin-right": "500px", marginLeft: "40%" }}
        />
        <div>
          {/*  <Space wrap>
            <Dropdown overlay={menu}>
              <Button
                style={{
                  "margin-right": "10px",
                  marginLeft: "545%",
                  "margin-top": "5%",
                  marginBottom: "145%",
                }}
              >
                Francais <DownOutlined />
              </Button>
            </Dropdown>
          </Space> */}
        </div>
      </div>
    </>
  );
}

export default Footer;
