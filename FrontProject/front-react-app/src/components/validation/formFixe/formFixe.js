import {React,useState} from "react"
import "./formFixe.css" 
import * as actions from "../../../redux/actions/validation/validation";
import * as action from "../../../redux/actions/reset";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Button, Select ,Alert } from 'antd';
function FormFixe() {
  const dispatch = useDispatch();
  const fixe = useSelector((state) => (state.fixe))
  const { Option } = Select;
 
  const [code, setCode] = useState();
  const [vaccine, setVaccine] = useState("");
  function handleChange(value) {
    console.log(value);
    setVaccine(value)
  }


  const validate = () => {
      let date = new Date()
      console.log(fixe.loading)
     dispatch(actions.validationfixe(code, vaccine,date));
     if(fixe.loading){
       
      document.getElementById("create-course-form").reset();
     } 
     setTimeout(() => {
     
      dispatch(actions.RESET_ACTION());
    }, 2000);
    };
   // console.log(loguser)
   
  return (
      <>
    <Form id="create-course-form"
      name="basic"
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span:4,
      }}
      initialValues={{
        remember: true,
      }}
      autoComplete="off"
    >
      <Form.Item
        label="Code"
        name="code"
        rules={[
          {
            required: true,
            message: 'code obligatoire!',
          },
        ]}
      >
        <Input onChange={(e) => setCode(e.target.value)} />
      </Form.Item>
     
      <Form.Item
        label="Vaccin"
        name="Vaccin"
        rules={[
          {
            required: true,
            message: 'vaccin obligatoire!',
          },
        ]}
      >
      <Select defaultValue="..." style={{ width: 120 }} onChange={handleChange}>
        <Option value="Janssen">Janssen</Option>
        <Option value="Pfizer">Pfizer</Option>
        <Option value="Astrazeneca" > Astrazeneca</Option>
      
    </Select>
    </Form.Item>
     

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" onClick={validate}>
          Valider
        </Button>&nbsp;&nbsp;
        <Button  htmlType="reset" >
          Annuler
        </Button>
      </Form.Item>
      
    </Form>
    {fixe.loading ? (
          <div> </div>
        ) : (
          <>
            <Alert message="Vaccin du citoyen validée et email envoyé" type="success" />

          </>
        )}
    {!fixe.errors ? (
          <div> </div>
        ) : (
          <>
          <Alert message="Verifiez le code" type="error" />

          </>
        )}
    </>
  )
}

export default FormFixe