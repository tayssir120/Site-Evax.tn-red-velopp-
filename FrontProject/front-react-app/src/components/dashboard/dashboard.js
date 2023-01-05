import { React, memo, useEffect } from "react";
import * as actions from "../../redux/actions/dashboard/dashboard";
import { useDispatch, useSelector } from "react-redux";
import { Pie } from "@ant-design/charts";
import DiabeticNumber from "./diabeticNumber";
import BloodPressure from "./bloodPressure";
import ChronicKidneyDisease from "./chronicKidneyDisease";
import Congestive from "./Congestive";
import AdminNavBar from "../Admin/AdminNavBar";
function Dashboard() {
  const task = useSelector((state) => state.nbrVaccinated);
  
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(actions.nbrVaccin());
    
}, []);

let data = [
    {
      type: "Adult",
      value:0,
    },
    {
      type: "Jeune",
      value: 0,
    },
    {
      type: "vieux",
      value: 0,
    },
  ];
if(!task.loadingnb){
 console.log(task.action.nbr.Adult)

  
   data = [
    {
      type: "Adult",
      value:task.action.nbr.Adult,
    },
    {
      type: "Jeune",
      value: task.action.nbr.Young,
    },
    {
      type: "vieux",
      value: task.action.nbr.Old,
    },
  ];
}
  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 0.8,
    label: {
      type: "outer",
      content: "{name} {percentage}",
    },
    interactions: [
      {
        type: "pie-legend-active",
      },
      {
        type: "element-active",
      },
    ],
  };
  return (
    <>
    <AdminNavBar> </AdminNavBar>
    <div style={{paddingTop : "5%"}}>
      
     <Pie {...config} />
        {task.loading ? (
          <div> </div>
        ) : (
          <>
           <p></p>
          </>
        )}
        </div>
        <DiabeticNumber/>
        <BloodPressure/>
        <ChronicKidneyDisease/>
        <Congestive/>
       {/* 
       
       >*/}
    </>
  );
}

export default memo(Dashboard);
