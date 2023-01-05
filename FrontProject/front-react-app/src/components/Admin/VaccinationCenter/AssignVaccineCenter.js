import { React, useEffect, useState } from "react";
import { Input, Button, Form } from "antd";
import "antd/dist/antd.css";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import * as actions from "../../../redux/actions/vaccinationCenter/center";
import { useDispatch, useSelector } from "react-redux";
import { useHistory /*, Redirect*/ } from "react-router-dom";
import AdminNavBar from "../AdminNavBar";
function AssignVaccineCenter() {
  const [form] = Form.useForm();
  const vaccinationCenter = useSelector((state) => state.vaccinationCenters);
  const dispatch = useDispatch();
  const [NVaccine, setNVaccine] = useState("");
  const [NCenter, setNCenter] = useState("");
  const [vquantity, setVquantity] = useState("");
  const history = useHistory();

  const assignVaccineCenter = () => {
    dispatch(actions.assignVaccineCenter(NCenter, NVaccine, Number(vquantity)));
    history.push(`/centresDeVaccination`);
  };
  const handlePage = () => {
    history.push(`/centresDeVaccination`);
  };
  return (
    <>
      {" "}
      <AdminNavBar></AdminNavBar>
      <div className="container">
        <h3>Assigner un vaccin à un Centre</h3>
        <br />
        <br />
        <div className="form-container">
          <Form form={form} layout="vertical">
            <Form.Item
              label="Nom du vaccin : "
              labelAlign="right"
              name="nomVaccin"
              rules={[
                {
                  required: true,
                  message: "Le champ Nom du vaccin est obligatoire !",
                },
              ]}
            >
              <Input
                className="inputField"
                onChange={(e) => setNVaccine(e.target.value)}
                placeholder="Veuillez saisir le nom du vaccin"
              />
            </Form.Item>
            <Form.Item
              label="Nom du centre: "
              labelAlign="left"
              name="quantitéVaccin"
              rules={[
                {
                  required: true,
                  message: "Le champ Nom du centre est obligatoire !",
                },
              ]}
            >
              <Input
                onChange={(e) => setNCenter(e.target.value)}
                placeholder="Veuillez saisir le nom du centre"
              />
            </Form.Item>
            <Form.Item
              label="Quantité du vaccin : "
              labelAlign="right"
              name="qtéVaccin"
              rules={[
                {
                  required: true,
                  message: "Le champ Quantité du vaccin est obligatoire !",
                },
              ]}
            >
              <Input
                className="inputField"
                onChange={(e) => setVquantity(e.target.value)}
                placeholder="Veuillez saisir la quantité du vaccin"
              />
            </Form.Item>

            <Form.Item>
              <div className="buttons">
                <Form.Item>
                  <Button
                    shape="round"
                    htmlType="submit"
                    onClick={assignVaccineCenter}
                  >
                    Confirmer
                  </Button>
                  <Button
                    type="primary"
                    danger
                    shape="round"
                    style={{ margin: "0 8px" }}
                    onClick={handlePage}
                  >
                    Annuler
                  </Button>
                </Form.Item>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
}
export default AssignVaccineCenter;
