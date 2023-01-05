import React from "react";
import "../../InscriptionPage.css";
import { Button } from "antd";
import { useHistory } from "react-router-dom";

function Link({ icon, text, page }) {
  const history = useHistory();
  return (
    <>
      <Button
        class="Link"
        onClick={() => {
          history.push(`/{page}`);
        }}
        style={{
          height: 150,
          width: 400,
          boxShadow: " 0 2px 4px 0 rgba(0,0,0,.2)",
          
        }}
      >
        {icon}
        <br />
        {text}
      </Button>
    </>
  );
}

export default Link;
