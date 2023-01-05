import { React, useEffect, useState } from "react";
import { List, Card, Button, Table, Tag, Space, Popconfirm } from "antd";
import "antd/dist/antd.css";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import * as actions from "../../../redux/actions/JPO/jpo"
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../Head/NavBar/NavBar";
import { useHistory /*, Redirect*/ } from "react-router-dom";
import AdminNavBar from "../AdminNavBar";

function JPO() {
    const history = useHistory();
  
    const handleAjout = () => {
      dispatch(actions.RESETJPO());
      history.push(`/ajouterJPO`);
    };

    const jpos = useSelector((state) => state.jpo);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(actions.fetchJPOs());
    }, []);
  
    console.log(JPO);    

    const columns = [
        {
          title: "Nom du centre",
          dataIndex: "centerName",
          key: "centerName",
        },
        {
          title: "Nombre de personnes à vacciné",
          dataIndex: "numberPeopleToBeVaccinated",
          key: "numberPeopleToBeVaccinated",
        },
        {
          title: "chef du centre",
          dataIndex: "chefCenter",
          key: "chefCenter",
        },
        {
          title: "Nom du vaccin",
          dataIndex: "nameOfvaccine",
          key: "nameOfvaccine",
        },
        {
          title: "quantité",
          dataIndex: "quantity",
          key: "quantity",
        },
        {
          title: "Tranche d'âge",
          dataIndex: "ageRange",
          key: "ageRange",
        },
        {
          title: "id du centre",
          dataIndex: "centerId",
          key: "centerId",
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
                  dispatch(actions.RESETJPO());
                  history.push({
                    pathname:`/majJPO/${record._id}`,
                    state: {
                      centerName: record.centerName,
                      numberPeopleToBeVaccinated: record.numberPeopleToBeVaccinated,
                      chefCenter: record.chefCenter,
                      nameOfvaccine: record.nameOfvaccine,
                      quantity: record.quantity,
                      ageRange: record.ageRange,
                      centerId: record.centerId
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
                dispatch(actions.deletejpo(record._id));
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
              Ajouter une JPO
            </Button>
    
            <h3>La liste des journées ouvertes</h3>
    
            <br />
            {!jpos.loading ? (
              <Table dataSource={jpos.list} columns={columns} />
            ) : (
              <div> </div>
            )}
          </div>
        </>
      );
    }
    export default JPO;