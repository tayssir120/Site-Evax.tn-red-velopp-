import user from "./user";

import CitizenSpace from "./CitizenSpace";
import citizenSpaceCode from "./code";
import citizen from "./citizen";
import statistic from "./statistic";
import countAll from "./countAll";
import vaccinationCenters from "./vaccinationCenters";
import pharmacy from "./pharmacy"
import vaccines from "./vaccine";
import nbrVaccin from "./dashboard"
import jpo from "./jpo";
import volunteer from "./volunteer"

import admin from "./admin";
import bloodPressure from "./bloodPressureNumber" 
import congestivenbr from "./congestive"
import nbrVaccinated from "./nbrVaccinate"
import mobile from "./validationMobile"
import fixe from "./validationFixe"
import verif from "./verificationCode"
import { combineReducers } from "redux";

const rootReducer = () => {
  return combineReducers({
    user,
    nbrVaccinated,
    mobile,
    fixe,
    verif,
    CitizenSpace,
    citizenSpaceCode,
    statistic,
    countAll,
    vaccinationCenters,
    pharmacy,
    vaccines,
    citizen,
    jpo,
    volunteer,

    bloodPressure,
    congestivenbr,
    nbrVaccin,

    admin
  });
};

export default rootReducer;
