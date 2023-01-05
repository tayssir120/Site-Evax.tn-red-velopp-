import { React, useEffect, useState } from "react";
import { Input, Button, Form, Alert } from "antd";
import "./VaccinesPage.css";
import "antd/dist/antd.css";
import { FieldNumberOutlined, MailOutlined } from "@ant-design/icons";
//import Help from "../../Help/Help";
//import Footer from "../../../Footer/Footer";
import * as actions from "../../../redux/actions/Vaccines/vaccine";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../Head/NavBar/NavBar";
import { useHistory, useParams } from "react-router-dom";
import AdminNavBar from "../AdminNavBar";
function UpdateVaccineForm() {
  const [form] = Form.useForm();
  const vaccine = useSelector((state) => state.vaccines);

  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [newQuantity, setQuantity] = useState(0);
  const history = useHistory();
  let { id } = useParams();

  const updateVaccine = () => {
    dispatch(actions.updateVaccine(id, Number(newQuantity)));
    history.push(`/vaccins`);
  };
  const handlePage = () => {
    history.push(`/vaccins`);
  };
  return (
    <>
      {" "}
      <AdminNavBar></AdminNavBar>
      <div className="container">
        <h3>Modification d'un vaccin</h3>
        <br />
        <br />
        <div className="form-container">
          <Form form={form} layout="vertical">
            <Form.Item
              label="La quantité du vaccin : "
              labelAlign="left"
              name="quantitéVaccin"
              rules={[
                {
                  required: true,
                  message: "Le champ Quantité est obligatoire !",
                },
              ]}
            >
              <Input
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="Veuillez saisir la quantité du vaccin"
              />
            </Form.Item>

            <Form.Item>
              <div className="buttons">
                <Form.Item>
                  <Button
                    shape="round"
                    htmlType="submit"
                    onClick={updateVaccine}
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
export default UpdateVaccineForm;
