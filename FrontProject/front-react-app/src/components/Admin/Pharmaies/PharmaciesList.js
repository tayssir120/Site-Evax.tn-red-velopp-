import { React, useEffect, useState } from "react";
import { List, Card, Button, Table, Tag, Space, Popconfirm } from "antd";
import "antd/dist/antd.css";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import * as actions from "../../../redux/actions/pharmacy/pharmacy";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../Head/NavBar/NavBar";
import { useHistory /*, Redirect*/ } from "react-router-dom";
import AdminNavBar from "../AdminNavBar";

function PharmaciesLisat() {
  const history = useHistory();

  const handlePage = () => {
    dispatch(actions.RESET_ACTION());
    history.push(`/ajoutPharmacie`);
  };

  const pharmacy = useSelector((state) => state.pharmacy);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchPharmacies());
  }, []);

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
      dataIndex: "governorate",
      key: "governorate",
    },
    {
      title: "Délégation",
      dataIndex: "delegation",
      key: "delegation",
    },
    {
      title: "Numéro FIXE",
      dataIndex: "fixNumber",
      key: "fixNumber",
    },
    {
      title: "Numéro MOBILE",
      dataIndex: "mobileNumber",
      key: "mobileNumber",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Propriétaire",
      dataIndex: "pharmacist",
      key: "pharmacist",
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
              pathname: `/majPhamacie/${record._id}`,
              state: {
                name: record.name,
                gouv: record.governorate,
                deleg: record.delegation,
                address: record.adress,
                type: record.type,
                fixNumber: record.fixNumber,
                mobileNumber: record.mobileNumber,
                pharmacist: record.pharmacist,
              },
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
            dispatch(actions.deletePharmacy(record._id));
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
        <Button
          type="primary"
          danger
          style={{ marginLeft: 20 }}
          onClick={handlePage}
        >
          Ajouter une pharmacie
        </Button>
        <h3>La liste des pharmacies</h3>
        <br />
        {!pharmacy.loading ? (
          <Table dataSource={pharmacy.list} columns={columns} />
        ) : (
          <div> </div>
        )}
      </div>
    </>
  );
}
export default PharmaciesLisat;
