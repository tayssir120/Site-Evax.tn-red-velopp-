import { React, useEffect } from "react";
import {  Button, Table, Alert } from "antd";
import "antd/dist/antd.css";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import * as actions from "../../../redux/actions/vaccinationCenter/center";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../Head/NavBar/NavBar";
import { useHistory /*, Redirect*/ } from "react-router-dom";
import AdminNavBar from "../AdminNavBar";

function VaccinationCenter() {
  const history = useHistory();

  const handleAjout = () => {
    dispatch(actions.RESET_ACTION());
    history.push(`/ajoutCentre`);
  };
  const handleAssign = () => {
    dispatch(actions.RESET_ACTION());
    history.push(`/assignerVaccinCentre`);
  };
  const handleAffect = () => {
    dispatch(actions.affecte());
    setTimeout(() => {
      dispatch(actions.RESET());
    }, 3000);

  };

  const vaccinationCenter = useSelector((state) => state.vaccinationCenters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchCenters());
  }, []);

  console.log(vaccinationCenter);

  const columns = [
    {
      title: "Nom",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Adresse",
      dataIndex: "adress",
      key: "adress",
    },
    {
      title: "Gouvernorat",
      dataIndex: "centerGovernorate",
      key: "centerGovernorate",
    },
    {
      title: "Délégation",
      dataIndex: "centerDelegation",
      key: "centerDelegation",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Capacité",
      dataIndex: "capacity",
      key: "capacity",
    },
    {
      title: "Chef centre",
      dataIndex: "chefCenter",
      key: "chefCenter",
    },
    {
      title: "Liste des vaccins",
      dataIndex: "vaccines",
      key: "vaccines",
      render: (text, record) => (
        record.vaccines.map((item) => (
          <li>{item},</li>
          )        
      ))
    },
    {
      title: "Modifier",
      key: "key",
      dataIndex: "key",
      render: (text, record) => (
        <Button
          shape="circle"
          icon={<EditOutlined />}
          onClick={() => {
            dispatch(actions.RESET_ACTION());
            console.log(record);
            history.push({
              pathname:`/majCentre/${record._id}`,
              state: {
                name: record.name,
                gouv: record.centerGovernorate,
                deleg: record.centerDelegation,
                address: record.adress,
                type: record.type,
                capacity: record.capacity,
                chef: record.chefCenter
              }
            });
          }}
          type="primary"
        />
      ),
    },
    {
      title: "Supprimer",
      key: "key",
      dataIndex: "key",
      render: (text, record) => (
        <Button
          shape="circle"
          icon={<DeleteOutlined />}
          onClick={() => {
            console.log(record);
            dispatch(actions.deleteCenter(record._id));
            window.location.reload(false);
          }}
          danger
        />
      ),
    },
  ];

  return (
    <>
      <AdminNavBar />

      <div className="container">
        <Button type="primary" danger style={{ marginLeft: 20 }} onClick={handleAjout}>
          Ajouter un centre
        </Button>

        <Button type="primary" danger style={{ marginLeft: 10 }} onClick={handleAssign}>
          Assigner un vaccin à un centre
        </Button>
        <Button type="primary" danger style={{ marginLeft: 10 }} onClick={handleAffect}>
          Affecter un citoyen à un RDV
        </Button>

{
  !vaccinationCenter.loadingR ? (
    <Alert message="Citoyen affecté à un RDV" type="success" />):

        (
          <p></p>
        )}
        <h3>La liste des centres de vaccination</h3>

        <br />
        {!vaccinationCenter.loading ? (
          <Table dataSource={vaccinationCenter.list} columns={columns} />
        ) : (
          <div> </div>
        )}
      </div>
    </>
  );
}
export default VaccinationCenter;
