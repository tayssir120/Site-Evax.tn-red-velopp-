import { React, memo, useEffect } from "react";
import * as actions from "../../redux/actions/dashboard/dashboard";
import { useDispatch, useSelector } from "react-redux";
import "./dashboard.css";

function ChronicKidneyDisease() {
  const task = useSelector((state) => state.nbrVaccin);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.nbrchronicKidneyDisease());
  }, []);

  if (!task.loading) {
    // console.log("adult :",task.action.nbr.adult)
    //console.log("jeune :",task.action.nbr.young)
    //console.log("vieux :",task.action.nbr.old)
    console.log(task.action.nbr.nbr);
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
        <h4>Nombre chronic Kidney Disease vaccinés </h4>

        {task.loading ? (
          <div> </div>
        ) : (
          <>
            <p>{task.action.nbr.nbr}</p>
          </>
        )}
      </div>
    </>
  );
}

export default memo(ChronicKidneyDisease);
