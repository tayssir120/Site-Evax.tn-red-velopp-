import { React, useEffect, useState } from "react";
import { List, Card, Button, Table, Tag, Space, Popconfirm } from "antd";
import "antd/dist/antd.css";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import * as actions from "../../../redux/actions/volunteer/volunteer"
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../Head/NavBar/NavBar";
import { useHistory /*, Redirect*/ } from "react-router-dom";
import AdminNavBar from "../AdminNavBar";

function Volunteer() {
    const history = useHistory();
  
    const handleAjout = () => {
      dispatch(actions.RESETVolunteer());
      history.push(`/ajouterVolunteer`);
    };

    const volunteers = useSelector((state) => state.volunteer);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(actions.fetchVolunteers());
    }, []);
  
    console.log(volunteers);    

    const columns = [
        {
          title: "Nom du volontaire",
          dataIndex: "firstName",
          key: "firstName",
        },
        {
          title: "Prénom du volontaire",
          dataIndex: "lastName",
          key: "lastName",
        },
        {
          title: "chef du centre",
          dataIndex: "chefCenter",
          key: "chefCenter",
        },
        {
          title: "Téléphone du volontaire",
          dataIndex: "tel",
          key: "tel",
        },
        {
          title: "Position du volontaire",
          dataIndex: "position",
          key: "position",
        },
        {
          title: "Lieu de travail",
          dataIndex: "workPlace",
          key: "workPlace",
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
                  dispatch(actions.RESETVolunteer());
                  history.push({
                    pathname:`/majVolunteer/${record._id}`,
                    state: {
                      firstName: record.firstName,
                      lastName: record.lastName,
                      tel: record.tel,
                      position: record.position,
                      workPlace: record.workPlace
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
                dispatch(actions.deleteVolunteer(record._id));
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
              Ajouter un volontaire
            </Button>
    
            <h3>La liste des journées ouvertes</h3>
    
            <br />
            {!volunteers.loading ? (
              <Table dataSource={volunteers.list} columns={columns} />
            ) : (
              <div> </div>
            )}
          </div>
        </>
      );
    }
    export default Volunteer;