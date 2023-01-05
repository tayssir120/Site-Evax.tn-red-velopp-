import { React, useState } from "react";
import {
  Form,
  Space,
  Row,
  DatePicker,
  Col,
  Select,
  Button,
  Item,
  Result,
} from "antd";
import "antd/dist/antd.css";
import location from "./Location.json";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../../redux/actions/citizen/citizen";
import { useHistory /*, Redirect*/ } from "react-router-dom";
import ReactGa from "react-ga";

function Formulaire() {
  const history = useHistory();
  const handlePage = () => {
    ReactGa.event({
      category: "button cancel add on pharmacy",
      action: "cancel add citizen on pharmacy",
    });
    history.push(`/pageInscription`);
  };
  const { Option } = Select;
  const [gouvernorat, setGouvernorate] = useState("");
  const [delegation, setDelegation] = useState([]);
  const [commun, setCommun] = useState([]);
  const [pharmacy, setPharmacy] = useState([]);
  const [address, setAddress] = useState("");

  const citizen = useSelector((state) => state.citizen);
  const dispatch = useDispatch();

  const [selectedDeleg, setSelectedDeleg] = useState("");
  const [selectedPharma, setSelectedPharma] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  function handleChange(value) {
    console.log(`selected ${value}`);
    setGouvernorate(location.gouvernorate[value].name);
    setDelegation(location.gouvernorate[value].delegation);
    //console.log("right delegation", location.gouvernorate[value].delegation);
  }
  //console.log("selected gouve: ", gouvernorat)
  //console.log("selected delegation", delegation);

  function handleChangeDelegation(value) {
    console.log(`selected ${value}`);
    setCommun(delegation[value].commun);
    setSelectedDeleg(delegation[value].name);
    //console.log("name of delegation", delegation[value].name);
  }
  //console.log("selected delegation: ", selectedDeleg);
  //console.log("selected commun", commun);

  function handleChangeCommun(value) {
    console.log(`selected ${value}`);
    setPharmacy(commun[value].pharmacy);
    //console.log("right pharmacy", commun[value].pharmacy);
  }
  //console.log("selected pharmacy", pharmacy);

  function handleChangePharmacy(value) {
    console.log(`selected ${value}`);
    setAddress(pharmacy[value].address);
    setSelectedPharma(pharmacy[value].name);
    //console.log("right address", pharmacy[value].address);
  }
  //console.log("selected pharmacy : ", selectedPharma);
  //console.log("address", address);

  function onChangeDate(value, dateString) {
    //console.log("Selected Time: ", value);
    setSelectedDate(dateString);
  }
  //console.log("Formatted Selected Time: ", selectedDate);

  function onOk(value) {
    console.log("onOk: ", value);
  }

  const addOnPharmacy = () => {
    ReactGa.event({
      category: "button add on pharmacy",
      action: "add citizen on pharmacy",
    });

    if (
      gouvernorat != "" &&
      selectedDeleg != "" &&
      selectedDate != "" &&
      selectedPharma
    ) {
      let citizen = {
        vaccinationGovernorate: gouvernorat,
        vaccinationDelegation: selectedDeleg,
        dateOfAppointment: selectedDate,
        vaccinationLocation: selectedPharma,
      };
      dispatch(actions.addOnPharmacy(citizen));
      console.log(citizen);
      setTimeout(() => {
        history.push("/accueil");
        dispatch(actions.RESET_ACTION());
      }, 3000);
    }
  };

  return (
    <>
      <div style={{ marginTop: 50 }} id="pharma">
        <h3
          style={{
            textAlign: "center",
            fontSize: 30,
            color: "#d80000",
            fontWeight: "normal",
          }}
        >
          Choisissez Une Pharmacie Et Une Date De Vaccination
        </h3>
        <hr />
        <Form style={{ marginLeft: 50 }}>
          {
            //Phase 1: Veuillez rechercher et sélectionner la pharmacie de votre choix.
          }
          <Row>
            <Col span={12}>
              <div>
                <h2
                  style={{
                    textAlign: "left",
                    fontSize: 15,
                    marginTop: 10,
                  }}
                >
                  Phase 1: Veuillez rechercher et sélectionner la pharmacie de
                  votre choix.
                </h2>
                <div style={{ width: "100%" }}>
                  <Form.Item
                    name="gouv"
                    rules={[
                      {
                        required: true,
                        message: "Vueillez choisir la gouvernourat SVP!",
                      },
                    ]}
                  >
                    <Select
                      style={{
                        width: "80%",
                        marginBottom: 5,
                        paddingTop: 5,
                        paddingLeft: 5,
                      }}
                      onChange={handleChange}
                      placeholder="Choisir le gouvernourat"
                    >
                      {location.gouvernorate.map((g) => (
                        <Option value={location.gouvernorate.indexOf(g)}>
                          {g.name}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>

                  <Form.Item
                    name="deleg"
                    rules={[
                      {
                        required: true,
                        message: "Vueillez choisir la délégation SVP!",
                      },
                    ]}
                  >
                    <Select
                      style={{
                        width: "80%",
                        marginBottom: 5,
                        paddingTop: 5,
                        paddingLeft: 5,
                      }}
                      onChange={handleChangeDelegation}
                      placeholder="Choisir la délégation"
                    >
                      {delegation.map((d) => (
                        <Option value={delegation.indexOf(d)}>{d.name}</Option>
                      ))}
                    </Select>
                  </Form.Item>

                  <Form.Item
                    name="comm"
                    rules={[
                      {
                        required: true,
                        message: "Vueillez choisir la commune SVP!",
                      },
                    ]}
                  >
                    <Select
                      style={{
                        width: "80%",
                        marginBottom: 5,
                        paddingTop: 5,
                        paddingLeft: 5,
                      }}
                      onChange={handleChangeCommun}
                      placeholder="Choisir la commune"
                    >
                      {commun.map((c) => (
                        <Option value={commun.indexOf(c)}>{c.name}</Option>
                      ))}
                    </Select>
                  </Form.Item>

                  <Form.Item
                    name="phar"
                    rules={[
                      {
                        required: true,
                        message: "Vueillez choisir la pharmacie SVP!",
                      },
                    ]}
                  >
                    <Select
                      style={{
                        width: "80%",
                        marginBottom: 5,
                        paddingTop: 5,
                        paddingLeft: 5,
                      }}
                      onChange={handleChangePharmacy}
                      placeholder="Choisir la pharmacie"
                    >
                      {pharmacy.map((p) => (
                        <Option value={pharmacy.indexOf(p)}>{p.name}</Option>
                      ))}
                    </Select>
                  </Form.Item>

                  <p style={{ marginLeft: 10, frontSize: 20, color: "green" }}>
                    {address}
                  </p>
                </div>
              </div>
            </Col>
            {
              //Phase 2: choix du date
            }
            <Col span={12}>
              <div>
                <h2
                  style={{
                    marginTop: 10,
                    textAlign: "left",
                    fontSize: 15,
                  }}
                >
                  Phase 2: Veuillez sélectionner la date de votre choix.
                </h2>
                <div style={{ width: "100%", marginTop: 50 }}>
                  <Form.Item name="date">
                    <Space
                      direction="vertical"
                      size={12}
                      style={{ paddingTop: 2, paddingLeft: 5 }}
                    >
                      <DatePicker
                        placeholder="Choisir la date"
                        showTime
                        onChange={onChangeDate}
                        onOk={onOk}
                        style={{
                          width: "200%",
                          marginBottom: 5,
                        }}
                      />
                    </Space>
                  </Form.Item>

                  <Form.Item style={{ marginLeft: 10, marginTop: 25 }}>
                    <Button
                      shape="round"
                      htmlType="submit"
                      style={{ backgroundColor: "#d80000", color: "white" }}
                      onClick={addOnPharmacy}
                    >
                      Confirmer la demande d'inscription
                    </Button>
                    <Button
                      shape="round"
                      style={{
                        margin: "0 8px",
                        backgroundColor: "#d80000",
                        color: "white",
                      }}
                      htmlType=""
                      onClick={handlePage}
                    >
                      Annuler
                    </Button>
                  </Form.Item>
                </div>
              </div>
            </Col>
          </Row>
        </Form>
      </div>
      {!citizen.addOnPharmacyLoading && !citizen.errors ? (
        <>
          <Result
            status="success"
            title="Vous êtes inscrits avec succès !"
            subTitle=""
          />
        </>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default Formulaire;
