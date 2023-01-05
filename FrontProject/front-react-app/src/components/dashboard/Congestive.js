import { React, memo, useEffect } from "react";
import * as actions from "../../redux/actions/dashboard/dashboard";
import { useDispatch, useSelector } from "react-redux";
import "./dashboard.css";

function Congestive() {
  const cong = useSelector((state) => state.congestivenbr);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.nbrcingestive());
  }, []);

  console.log(cong);
  if (!cong.loadingcong) {
    // console.log("adult :",task.action.nbr.adult)
    //console.log("jeune :",task.action.nbr.young)
    //console.log("vieux :",task.action.nbr.old)
    console.log(cong.action.nbr.nbr);
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
    <h4>Nombre des congestives vaccinés </h4>

        {cong.loadingcong ? (
          <div> </div>
        ) : (
          <>
            <p>{cong.action.nbr.nbr}</p>
          </>
        )}
      </div>
    </>
  );
}

export default memo(Congestive);
