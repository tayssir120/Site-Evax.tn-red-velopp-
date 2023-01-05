import { React, useEffect } from "react";
import { List, Card, Button } from "antd";
import "./VaccinesPage.css";
import "antd/dist/antd.css";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
//import Help from "../../Help/Help";
//import Footer from "../../../Footer/Footer";
import * as actions from "../../../redux/actions/Vaccines/vaccine";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import NavBar from "../../Head/NavBar/NavBar";
import AdminNavBar from "../AdminNavBar";
function VaccinesList() {
  const vaccine = useSelector((state) => state.vaccines);
  const dispatch = useDispatch();
  if (vaccine.success) {
    console.log(vaccine);
  }
  useEffect(() => {
    dispatch(actions.getAllVaccines());
  }, []);
  const history = useHistory();
  const handlePageAdd = () => {
    history.push(`/ajoutVaccin`);
  };

  return (
    <>
      <AdminNavBar> </AdminNavBar>
      <div className="container">
        <Button
          type="primary"
          danger
          style={{ marginLeft: 20 }}
          onClick={handlePageAdd}
        >
          Ajouter un vaccin
        </Button>
        <h3>La liste des vaccins</h3>
        <br />

        <div className="form-container">
          {vaccine.success ? (
            <List
              grid={{ gutter: 16, column: 4 }}
              dataSource={vaccine.list}
              renderItem={(v) => (
                <List.Item>
                  <Card style={{ textAlign: "center" }} title={v.name}>
                    <center>
                      {" "}
                      La quantité du vaccin : {v.quantity} pièce(s)
                    </center>
                    <div style={{ paddingTop: 10 }}>
                      <Button
                        shape="circle"
                        icon={<EditOutlined />}
                        onClick={() => history.push(`/modifierVaccin/${v._id}`)}
                        value={v.id}
                      />
                      <Button
                        shape="circle"
                        icon={<DeleteOutlined />}
                        onClick={() => {
                          dispatch(actions.deleteVaccine(v._id));
                          window.location.reload(false);

                        }}
                        danger
                      />
                    </div>
                  </Card>
                </List.Item>
              )}
            />
          ) : (
            <div> </div>
          )}
        </div>
      </div>
    </>
  );
}
export default VaccinesList;
