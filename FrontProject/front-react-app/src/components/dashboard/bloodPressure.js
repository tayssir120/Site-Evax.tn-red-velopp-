import { React, memo, useEffect } from "react";
import * as actions from "../../redux/actions/dashboard/dashboard";
import { useDispatch, useSelector } from "react-redux";
import "./dashboard.css";

function DiabeticNumber() {
  const blood = useSelector((state) => state.bloodPressure);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.nbrBloodPressure());
  }, []);

  if (!blood.loadingblood) {
    // console.log("adult :",task.action.nbr.adult)
    //console.log("jeune :",task.action.nbr.young)
    //console.log("vieux :",task.action.nbr.old)
    console.log(blood.action.nbr.nbr);
    // setAdult(task.action.nbr.adult)

    //console.log(task.action)
    //  console.log(task.action);
    //const [username, setUsername] = useState("");
    //const [pwd, setPwd] = useState("");
    // const loguser = () => {

    //};
    /*if (!task.loading) {
  
    history.push("/validation");
  }*/
    // console.log(loguser)
  }

  return (
    <>


<div className="container_dashboard">
<h4>Nombre blood pressure vaccinés </h4>

        {blood.loadingblood ? (
          <div> </div>
        ) : (
          <>
            <p>{blood.action.nbr.nbr}</p>
          </>
        )}
      </div>
    </>
  );
}

export default memo(DiabeticNumber);
