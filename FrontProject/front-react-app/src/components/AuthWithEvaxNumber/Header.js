import React from "react"
import logo from "../../Capture.PNG"

function Header() {

  return (
    <>
    <div>
     <img src={logo} width="170" height="60" style={{"margin-right": '105px', "margin-left": '40%', "marginTop": "5%", "backgroundColor" : "gray"}} />
     </div>
    </>
  )
}

export default Header