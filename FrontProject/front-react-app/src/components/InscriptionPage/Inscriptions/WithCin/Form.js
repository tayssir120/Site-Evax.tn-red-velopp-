import { React, useState } from "react";
import "../../InscriptionPage.css";
import { Form, Input, Button, DatePicker, Radio, Result } from "antd";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../../redux/actions/citizen/citizen";
import { useHistory /*, Redirect*/ } from "react-router-dom";
import ReactGa from "react-ga";

function Formulaire() {
  const history = useHistory();
  const handlePage = () => {
    history.push(`/pageInscription`);
  };
  const citizen = useSelector((state) => state.citizen);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [code, setCode] = useState(0);
  const [cin, setCin] = useState("");
  const [dateNais, setDateNais] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [sexe, setSexe] = useState("");
  const [gouvernorate, setGouvernorate] = useState("");
  const [delegation, setDelegation] = useState("");
  const [infectedWithCovid, setInfectedWithCovid] = useState(false);
  const [diabetic, setDiabetic] = useState(false);
  const [bloodPressure, setBloodPressure] = useState(false);
  const [chronicKidneyDisease, setChronicKidneyDisease] = useState(false);
  const [congestiveHeartFailure, setCongestiveHeartFailure] = useState(false);
  const [organTransplant, setOrganTransplant] = useState(false);
  const [chronicRespiratoryDisease, setChronicRespiratoryDisease] =
    useState(false);
  const [
    cancerTreatmentOrWeakenTheImmuneSysteme,
    setCancerTreatmentOrWeakenTheImmuneSysteme,
  ] = useState(false);
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [healthSector, setHealthSector] = useState(false);

  function onChangeDate(value, dateString) {
    //console.log("Selected Time: ", value);
    setDateNais(dateString);
  }

  const sendCode = () => {
    console.log("sending code");

    dispatch(actions.sendCode(email));
    ReactGa.event({
      category: "button send code verification",
      action: "button send code verification",
    });
    console.log("Code sended");
  };

  const verifCode = () => {
    dispatch(actions.verifCode(code));
    if (code.length != 6) {
      console.log("error");
      ReactGa.event({
        category: "Code Verification Entry Error",
        action:
          "type an alphabetic value or value length is different to 6 characters",
      });
    }
  };

  const addCin = () => {
    if (
      cin != "" &&
      dateNais != "" &&
      firstName != "" &&
      lastName != "" &&
      sexe != "" &&
      gouvernorate != "" &&
      delegation != ""
    ) {
      let citizen = {
        email: email,
        cin: cin,
        dateOfBirth: dateNais,
        firstname: firstName,
        lastname: lastName,
        gender: sexe,
        vaccinationGovernorate: gouvernorate,
        vaccinationDelegation: delegation,
        infectedWithCovid: infectedWithCovid == "true",
        diabetic: diabetic == "true",
        bloodPressure: bloodPressure == "true",
        chronicKidneyDisease: chronicKidneyDisease == "true",
        congestiveHeartFailure: congestiveHeartFailure == "true",
        organTransplant: organTransplant == "true",
        chronicRespiratoryDisease: chronicRespiratoryDisease == "true",
        cancerTreatmentOrWeakenTheImmuneSystem:
          cancerTreatmentOrWeakenTheImmuneSysteme == "true",
        weight: parseInt(weight),
        height: parseInt(height),
        healthSector: healthSector == "true",
      };
      dispatch(actions.addCin(citizen));
      //console.log(citizen);
      setTimeout(() => {
        history.push("/accueil");
        dispatch(actions.RESET_ACTION());
      }, 4000);
    }
  };

  return (
    <>
      <Form style={{ marginLeft: 50, marginTop: 50 }}>
        {
          //Données générale
        }
        <div>
          <h2
            style={{
              textAlign: "center",
              fontWeight: "normal",
              marginTop: 10,
              color: "#d80000",
            }}
          >
            Etape 1: Données Générales
          </h2>
          <Form.Item style={{ marginBottom: 0, marginLeft: 20, marginTop: 20 }}>
            <Form.Item
              label="Carte d'identité nationale :"
              name="cin"
              rules={[
                { required: true, message: "Vueillez entrer votre cin SVP!" },
              ]}
              style={{ display: "inline-block", width: "calc(30% - 8px)" }}
            >
              <Input
                placeholder="Votre numéro CIN ici"
                onChange={(e) => {
                  setCin(e.target.value);
                }}
              />
            </Form.Item>
            <Form.Item
              label="Date de naissance :"
              name="dateNais"
              rules={[
                {
                  required: true,
                  message: "Vueillez entrer votre date de naissance SVP!",
                },
              ]}
              style={{
                display: "inline-block",
                width: "calc(50% - 8px)",
                margin: "0 8px",
              }}
            >
              <DatePicker
                placeholder="Votre date de naissance ici"
                style={{ width: 300 }}
                onChange={onChangeDate}
              />
            </Form.Item>
          </Form.Item>

          <Form.Item style={{ marginBottom: 0, marginLeft: 20 }}>
            <Form.Item
              label="Email :"
              name="mail"
              rules={[
                { required: true, message: "Vueillez entrer votre Email SVP!" },
              ]}
              style={{ display: "inline-block", width: "calc(30% - 8px)" }}
            >
              <Input
                placeholder="Votre Email ici"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Item>
            <Button
              shape="round"
              style={{
                display: "inline-block",
                width: "calc(10% - 8px)",
                margin: "0 20px",
                marginTop: "30px",
                backgroundColor: "#d80000",
                color: "white",
              }}
              onClick={sendCode}
            >
              Envoyer code
            </Button>
            {(!citizen.sendCodeLoading && citizen.verifCodeLoading) ||
            (!citizen.verifCodeLoading && !citizen.sendCodeLoading) ? (
              <>
                <Form.Item
                  label="Code :"
                  name="code"
                  rules={[
                    {
                      required: true,
                      message: "Vueillez entrer le code envoyer en Email SVP!",
                    },
                  ]}
                  style={{
                    display: "inline-block",
                    width: "calc(30% - 8px)",
                    marginLeft: 35,
                  }}
                >
                  <Input
                    placeholder="Entrer le code envoyer en Email ici"
                    onChange={(e) => setCode(e.target.value)}
                  />
                </Form.Item>
                <Button
                  shape="round"
                  style={{
                    display: "inline-block",
                    width: "calc(10% - 8px)",
                    margin: "0 20px",
                    marginTop: "30px",
                    backgroundColor: "#d80000",
                    color: "white",
                  }}
                  onClick={verifCode}
                >
                  Vérifier code
                </Button>
              </>
            ) : (
              <div></div>
            )}
          </Form.Item>
        </div>

        {
          //formulaire
        }
        {!citizen.verifCodeLoading && !citizen.sendCodeLoading ? (
          <>
            <div>
              <h2
                style={{
                  textAlign: "center",
                  fontWeight: "normal",
                  marginTop: 50,
                  color: "#d80000",
                }}
              >
                Etape 2: Formulaire
              </h2>
              <Form.Item
                style={{ marginBottom: 0, marginLeft: 20, marginTop: 20 }}
              >
                <Form.Item
                  label="Nom :"
                  name="lastName"
                  rules={[
                    {
                      required: true,
                      message: "Vueillez entrer votre nom SVP!",
                    },
                  ]}
                  style={{ display: "inline-block", width: 200 }}
                >
                  <Input
                    placeholder="Votre nom ici"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Form.Item>
                <Form.Item
                  label="Prénom :"
                  name="firstName"
                  rules={[
                    {
                      required: true,
                      message: "Vueillez entrer votre prénom SVP!",
                    },
                  ]}
                  style={{
                    display: "inline-block",
                    width: 200,
                    marginLeft: "8px",
                  }}
                >
                  <Input
                    placeholder="Votre prénom ici"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Form.Item>
                <Form.Item
                  label="Sexe :"
                  name="gender"
                  rules={[
                    {
                      required: true,
                      message: "Vueillez choisir votre sexe SVP!",
                    },
                  ]}
                  style={{
                    display: "inline-block",
                    width: 200,
                    marginLeft: 60,
                  }}
                  onChange={(e) => setSexe(e.target.value)}
                >
                  <Radio.Group>
                    <Radio value="H">H</Radio>
                    <Radio value="F">F</Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item
                  label="Gouvernorat :"
                  name="governorate"
                  rules={[
                    {
                      required: true,
                      message: "Vueillez entrer votre gouvernorat SVP!",
                    },
                  ]}
                  style={{
                    display: "inline-block",
                    width: 200,
                    marginLeft: "8px",
                  }}
                >
                  <Input
                    placeholder="Votre gouvernorat ici"
                    onChange={(e) => setGouvernorate(e.target.value)}
                  />
                </Form.Item>
                <Form.Item
                  label="Délégation :"
                  name="delegation"
                  rules={[
                    {
                      required: true,
                      message: "Vueillez entrer votre délégation SVP!",
                    },
                  ]}
                  style={{
                    display: "inline-block",
                    width: 200,
                    marginLeft: "8px",
                  }}
                >
                  <Input
                    placeholder="Votre délégation ici"
                    onChange={(e) => setDelegation(e.target.value)}
                  />
                </Form.Item>
              </Form.Item>
              <div style={{ marginTop: 20 }}>
                <h5
                  style={{
                    fontSize: 20,
                    textAlign: "center",
                    fontWeight: "normal",
                  }}
                >
                  Veuillez répondre soigneusement aux questions suivantes, et la
                  preuve de la maladie sera nécessaire le jour de la
                  vaccination. En répondant à ce formulaire, vous déclarez que
                  les informations fournies sont correctes
                </h5>
                <table
                  style={{
                    marginTop: 40,
                    marginLeft: 50,
                    fontSize: 10,
                    marginBottom: 50,
                  }}
                >
                  <tr>
                    <Form.Item
                      label="Avez-vous déjà été infecté par le virus covid 19 ?"
                      name="infectedWithCovid"
                      style={{
                        marginTop: 0,
                        marginBottom: 0,
                      }}
                      onChange={(e) => setInfectedWithCovid(e.target.value)}
                    >
                      <td></td>
                      <Radio.Group>
                        <td>
                          <Radio value="True">OUI</Radio>
                        </td>
                        <td>
                          <Radio value="False">NON</Radio>
                        </td>
                      </Radio.Group>
                    </Form.Item>
                  </tr>
                  <tr>
                    <Form.Item
                      label="Avez-vous le diabète ?"
                      name="diabetic"
                      style={{
                        marginTop: 0,
                        marginBottom: 0,
                      }}
                      onChange={(e) => setDiabetic(e.target.value)}
                    >
                      <td></td>
                      <Radio.Group>
                        <td>
                          <Radio value="True">OUI</Radio>
                        </td>
                        <td>
                          <Radio value="False">NON</Radio>
                        </td>
                      </Radio.Group>
                    </Form.Item>
                  </tr>
                  <tr>
                    <Form.Item
                      label="Avez-vous une pression artérielle élevée ?"
                      name="bloodPressure"
                      style={{
                        marginTop: 0,
                        marginBottom: 0,
                      }}
                      onChange={(e) => setBloodPressure(e.target.value)}
                    >
                      <td></td>
                      <Radio.Group>
                        <td>
                          <Radio value="True">OUI</Radio>
                        </td>
                        <td>
                          <Radio value="False">NON</Radio>
                        </td>
                      </Radio.Group>
                    </Form.Item>
                  </tr>
                  <tr>
                    <Form.Item
                      label="Avez-vous une maladie rénale chronique ?"
                      name="chronicKidneyDisease"
                      style={{
                        marginTop: 0,
                        marginBottom: 0,
                      }}
                      onChange={(e) => setChronicKidneyDisease(e.target.value)}
                    >
                      <td></td>
                      <Radio.Group>
                        <td>
                          <Radio value="True">OUI</Radio>
                        </td>
                        <td>
                          <Radio value="False">NON</Radio>
                        </td>
                      </Radio.Group>
                    </Form.Item>
                  </tr>
                  <tr>
                    <Form.Item
                      label="Avez-vous une insuffisance cardiaque ?"
                      name="congestiveHeartFailure"
                      style={{
                        marginTop: 0,
                        marginBottom: 0,
                      }}
                      onChange={(e) =>
                        setCongestiveHeartFailure(e.target.value)
                      }
                    >
                      <td></td>
                      <Radio.Group>
                        <td>
                          <Radio value="True">OUI</Radio>
                        </td>
                        <td>
                          <Radio value="False">NON</Radio>
                        </td>
                      </Radio.Group>
                    </Form.Item>
                  </tr>
                  <tr>
                    <Form.Item
                      label="Avez-vous subi une greffe d'organe ?"
                      name="organTransplant"
                      style={{
                        marginTop: 0,
                        marginBottom: 0,
                      }}
                      onChange={(e) => setOrganTransplant(e.target.value)}
                    >
                      <td></td>
                      <Radio.Group>
                        <td>
                          <Radio value="True">OUI</Radio>
                        </td>
                        <td>
                          <Radio value="False">NON</Radio>
                        </td>
                      </Radio.Group>
                    </Form.Item>
                  </tr>
                  <tr>
                    <Form.Item
                      label="Avez-vous une maladie respiratoire chronique ?"
                      name="chronicRespiratoryDisease"
                      style={{
                        marginTop: 0,
                        marginBottom: 0,
                      }}
                      onChange={(e) =>
                        setChronicRespiratoryDisease(e.target.value)
                      }
                    >
                      <td></td>
                      <Radio.Group>
                        <td>
                          <Radio value="True">OUI</Radio>
                        </td>
                        <td>
                          <Radio value="False">NON</Radio>
                        </td>
                      </Radio.Group>
                    </Form.Item>
                  </tr>
                  <tr>
                    <Form.Item
                      label="Vous avez suivi un traitement anticancéreux ou pour affaiblir
                le système immunitaire ?"
                      name="cancerTreatmentOrWeakenTheImmuneSystem"
                      style={{
                        marginTop: 0,
                        marginBottom: 0,
                      }}
                      onChange={(e) =>
                        setCancerTreatmentOrWeakenTheImmuneSysteme(
                          e.target.value
                        )
                      }
                    >
                      <td></td>
                      <Radio.Group>
                        <td>
                          <Radio value="True">OUI</Radio>
                        </td>
                        <td>
                          <Radio value="False">NON</Radio>
                        </td>
                      </Radio.Group>
                    </Form.Item>
                  </tr>
                  <tr>
                    <Form.Item
                      label="Quel est votre poids s'il vous plait (kg) ?"
                      name="weight"
                      style={{
                        marginTop: 0,
                        marginBottom: 0,
                      }}
                    >
                      <td></td>
                      <td>
                        <Input
                          placeholder="weight"
                          onChange={(e) => setWeight(e.target.value)}
                        />
                      </td>
                    </Form.Item>
                  </tr>
                  <tr>
                    <Form.Item
                      label="Quelle est votre taille en centimètres (par exemple, écrivez
                  170 si votre taille est de 1m70) ?"
                      name="height"
                      style={{
                        marginTop: 0,
                        marginBottom: 0,
                      }}
                    >
                      <td></td>
                      <td>
                        <Input
                          placeholder="height"
                          onChange={(e) => setHeight(e.target.value)}
                        />
                      </td>
                    </Form.Item>
                  </tr>
                  <tr>
                    <Form.Item
                      label="Vous travaillez dans le domaine de la santé ?"
                      name="healthSector"
                      style={{
                        marginTop: 0,
                        marginBottom: 0,
                      }}
                      onChange={(e) => setHealthSector(e.target.value)}
                    >
                      <td></td>
                      <Radio.Group>
                        <td>
                          <Radio value="True">OUI</Radio>
                        </td>
                        <td>
                          <Radio value="False">NON</Radio>
                        </td>
                      </Radio.Group>
                    </Form.Item>
                  </tr>
                </table>
                <Form.Item
                  style={{ width: "40%", margin: "auto", marginBottom: 50 }}
                >
                  <Button
                    shape="round"
                    htmlType="submit"
                    style={{ backgroundColor: "#d80000", color: "white" }}
                    onClick={addCin}
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
                {!citizen.addLoading &&
                !citizen.verifCodeLoading &&
                !citizen.sendCodeLoading ? (
                  <>
                    <Result
                      status="success"
                      title="Vous êtes inscrits avec succès !"
                      subTitle="vous recevrez un email contenant votre code d'inscription"
                    />
                  </>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </>
        ) : (
          <div></div>
        )}
      </Form>
    </>
  );
}

export default Formulaire;
