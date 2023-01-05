import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard";
import Login from "./components/Admin/Login/Login";
import "./components/InscriptionPage/InscriptionPage";
//import InscriptionPage from './components/InscriptionPage/InscriptionPage';
import WithCin from "./components/InscriptionPage/Inscriptions/WithCin/WithCin";
import CitizenSpace from "./components/CitizenSpace/VaccinationRecord/CitizenSpac";
import UpdatePersonnalInfo from "./components/CitizenSpace/RegistrationUpdate/UpdatePersonnalInfo";
import AuthWithEvaxNumber from "./components/AuthWithEvaxNumber/AuthWithEvaxNumber";
import AuthWithCode from "./components/AuthWithCode/AuthWithCode";
import VaccinationButtonsDetails from "./components/CitizenSpace/VaccinationRecord/VaccinationButtonsDetails";
import Fixe from "./components/validation/fixe/fixe";
//import Fixe from "./components/validation/fixe/fixe";

import NavBar from "./components/validation/Navbar/Navbar";
import Mobile from "./components/validation/mobile/mobile";
import Verification from "./components/validation/verification/virification";
import Connect from "./components/validation/Validator/Connect/Connect";
import Register from "./components/validation/Validator/Register/Register";
import UpdateInscriptionFirstStep from "./components/InscriptionPage/Inscriptions/UpdateInscrit/UpdateInscriptionFirstStep";
import ReportAppointment from "./components/InscriptionPage/Inscriptions/ReportAppointment/ReportAppointment";
import UpdateInscription from "./components/InscriptionPage/Inscriptions/UpdateInscrit/UpdateInscription";
import InscriptionPage from "./components/InscriptionPage/InscriptionPage";
import Home from "./components/HomePage/Home";
import InscriptionOnPharmacy from "./components/InscriptionPage/Inscriptions/InscriptionOnPharmacy/InscriptionOnPharmacy";

import VaccinesList from "./components/Admin/Vaccines/VaccinesList";
import AddVaccineForm from "./components/Admin/Vaccines/AddVaccineForm";
import UpdateVaccineForm from "./components/Admin/Vaccines/UpdateVaccineForm";

//vaccination center
import CenterList from "./components/Admin/VaccinationCenter/CenterList";
import UpdateCenter from "./components/Admin/VaccinationCenter/UpdateCenter";
import AddCenter from "./components/Admin/VaccinationCenter/AddCenter";

//pharmacies
import PharmaciesList from "./components/Admin/Pharmaies/PharmaciesList";
import UpdatePharmacy from "./components/Admin/Pharmaies/UpdatePharmacy";
import AddPharmacy from "./components/Admin/Pharmaies/AddPharmacy";
import JPOList from "./components/Admin/jpo/JPOList"
import UpdateJPO from "./components/Admin/jpo/UpdateJPO"

import AssignVaccineCenter from "./components/Admin/VaccinationCenter/AssignVaccineCenter";

//jpo 
import AddJPO from "./components/Admin/jpo/AddJPO"
import ReactGa from "react-ga"
import React, {useEffect} from "react"
//volunteer
import ListVolunteer from "./components/Admin/volunteer/volunteerList"
import AddVolunteer from "./components/Admin/volunteer/AddVolunteer"
import UpdateVolunteer from "./components/Admin/volunteer/UpdateVolunteer"
function App() {
  useEffect(()=>{
    ReactGa.initialize('UA-216081650-1')
    ReactGa.pageview(window.location.pathname + window.location.search)
    console.log("test")
  })

  return (
    <Router class="body">
      <Switch>
        <Route exact path="/accueil">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/accueil" />
        </Route>
        <Route exact path="/inscriptionDansCentre">
          <WithCin />
        </Route>

        <Route exact path="/validation">
          <NavBar />
        </Route>
        <Route exact path="/validation/fixe">
          <Fixe />
        </Route>
        <Route exact path="/validation/mobile">
          <Mobile />
        </Route>
        <Route exact path="/validation/verification">
          <Verification />
        </Route>
        <Route exact path="/validation/connect">
          <Connect />
        </Route>
        <Route exact path="/validation/register">
          <Register />
        </Route>
        <Route exact path="/miseàjourInscriptionPE">
          <UpdateInscriptionFirstStep />
        </Route>
        <Route exact path="/miseàjourInscription/:code">
          <UpdateInscription />
        </Route>
        <Route exact path="/reportRendez-vous">
          <ReportAppointment />
        </Route>
        <Route exact path="/pageInscription">
          <InscriptionPage />
        </Route>
        <Route exact path="/EspaceCitoyen/:code">
          <CitizenSpace />
        </Route>
        <Route exact path="/ModifierDonnéesPersonnelles/:code">
          <UpdatePersonnalInfo />
        </Route>
        <Route exact path="/AuthentificationEvax">
          <AuthWithEvaxNumber />
        </Route>
        <Route exact path="/AuthentificationCode/:code">
          <AuthWithCode />
        </Route>
        <Route exact path="/page2">
          <VaccinationButtonsDetails />
        </Route>
        <Route exact path="/inscriptionDansPharmacie">
          <InscriptionOnPharmacy />
        </Route>

        <Route exact path="/centresDeVaccination">
          <CenterList />
        </Route>
        <Route exact path="/ajoutCentre">
          <AddCenter />
        </Route>
        <Route exact path="/majCentre/:id">
          <UpdateCenter />
        </Route>

        <Route exact path="/pharmacies">
          <PharmaciesList />
        </Route>
        <Route exact path="/majPhamacie/:id">
          <UpdatePharmacy />
        </Route>
        <Route exact path="/ajoutPharmacie">
          <AddPharmacy />
        </Route>

        <Route exact path="/vaccins">
          <VaccinesList />
        </Route>
        <Route exact path="/ajoutVaccin">
          <AddVaccineForm />
        </Route>
        <Route exact path="/modifierVaccin/:id">
          <UpdateVaccineForm />
        </Route>

        <Route exact path="/assignerVaccinCentre">
          <AssignVaccineCenter />
        </Route>
        <Route exact path="/admin/login">
          <Login />
        </Route>
        <Route exact path="/ajouterJPO">
          <AddJPO />
        </Route>
        <Route exact path="/ListJPO">
          <JPOList />
        </Route>
        <Route exact path="/majJPO/:id">
          <UpdateJPO />
        </Route>
        <Route exact path="/ajouterVolunteer">
          <AddVolunteer />
        </Route>
        <Route exact path="/ListVolunteer">
          < ListVolunteer/>
        </Route>
        <Route exact path="/majVolunteer/:id">
          <UpdateVolunteer />
        </Route>
        
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
