import * as types from "../../types/citizen";
import * as api from "../../../services/citizens.service";
import { type } from "@testing-library/user-event/dist/type";

export const reportAppointment = (email, code) => async (dispatch) => {
  dispatch({
    type: types.REPORT_REQUEST,
  });

  try {
    let data = { email: email, code: code };
    const reportAppointment = await api.reportAppointment(data);

    dispatch({
      type: types.REPORT_SUCCESS,
      reportAppointment,
    });
  } catch (e) {
    dispatch({
      type: types.REPORT_FAILURE,
    });
  }
};
export const updateFirstStep = (email, code) => async (dispatch) => {
  dispatch({
    type: types.UPDATEFS_REQUEST,
  });

  try {
    let data = { email: email, code: code };
    const updateCitizenFirstStep = await api.updateCitizenFirstStep(data);

    dispatch({
      type: types.UPDATEFS_SUCCESS,
      updateCitizenFirstStep,
    });
  } catch (e) {
    dispatch({
      type: types.UPDATEFS_FAILURE,
    });
  }
};


//action of Count Inscrit
export const countInscrit = () => async (dispatch) => {
  dispatch({
    type: types.COUNT_INSCRIT_REQUEST,
  });
  try {
    const numberAll = await api.countAll();
    dispatch({
      type: types.COUNT_INSCRIT_SUCCESS,
      numberAll,
    });
    //console.log("number of citizen", numberAll);
  } catch (e) {
    dispatch({
      type: types.COUNT_INSCRIT_FAILURE,
    });
    //console.log(e)
  }
};

//action of statistic
export const statistic = () => async (dispatch) => {
  dispatch({
    type: types.STATISTIC_REQUEST,
  });
  try {
    const countAll = await api.countAll();
    const count1 = await api.countDose1();
    const count2 = await api.countDose2();
    dispatch({
      type: types.STATISTIC_SUCCESS,
      countAll,
      count1,
      count2,
    });
    //console.log("number of citizen", numberAll);
  } catch (e) {
    dispatch({
      type: types.STATISTIC_FAILURE,
    });
    //console.log(e)
  }
};

//action of Count dose 2
/*export const countDose2 = () => async (dispatch) => {
  dispatch({
    type: types.COUNT_DOSE2_REQUEST,
  });
  try {
    const count2 = await api.countDose2();
    dispatch({
      type: types.COUNT_DOSE2_SUCCESS,
      count2,
    });
    //console.log("number of citizen", numberAll);
  } catch (e) {
    dispatch({
      type: types.COUNT_DOSE2_FAILURE,
    });
    //console.log(e)
  }
};*/

//action of send code to email
export const sendCode = (email) => async (dispatch) => {
  dispatch({
    type: types.SEND_MAIL_REQUEST,
  });

  try {
    let data = { email: email };
    const response = await api.sendCode(data);

    dispatch({
      type: types.SEND_MAIL_SUCCESS,
      response,
    });
  } catch (e) {
    dispatch({
      type: types.SEND_MAIL_FAILURE,
    });
  }
};

//action of verif code
export const verifCode = (code) => async (dispatch) => {
  dispatch({
    type: types.VERIF_CODE_REQUEST,
  });
  try {
    let data = { InputedCode: code };
    const response = await api.verifCode(data);
    dispatch({
      type: types.VERIF_CODE_SUCCESS,
      response,
    });
  } catch (e) {
    dispatch({
      type: types.VERIF_CODE_FAILURE,
    });
  }
}

//action of add with cin
export const addCin = (citizen) => async (dispatch) => {
  dispatch({
    type: types.ADD_CITIZEN_WITH_CIN_REQUEST,
  });
  try {
    const response = await api.addCin(citizen);
    dispatch({
      type: types.ADD_CITIZEN_WITH_CIN_SUCCESS,
      response,
    });
  } catch (e) {
    dispatch({
      type: types.ADD_CITIZEN_WITH_CIN_FAILURE,
    });
    console.log(e)
  }
}

//action of add on pharmacy
export const addOnPharmacy = (citizen) => async (dispatch) => {
  dispatch({
    type: types.ADD_ON_PHARMACY_REQUEST,
  });
  try {
    const response = await api.addOnPharmacy(citizen);
    //console.log (response)
    dispatch({
      type: types.ADD_ON_PHARMACY_SUCCESS,
      response,
    });
  } catch (e) {
    dispatch({
      type: types.ADD_ON_PHARMACY_FAILURE,
    });
    console.log(e)
  }
}

//action of reset state
export const RESET_ACTION = () => async (dispatch) => {
  dispatch({
    type: types.RESET,
  });
}

export const updateRegistration =
  (code, email, cin, firstname, lastname, birthGovernorate, birthDelegation) =>
  async (dispatch) => {
    dispatch({
      type: types.UPDATEREGISTRATION_REQUEST,
    });

    try {
      let data = {
        email: email,
        firstname: firstname,
        lastname: lastname,
        cin: cin,
        birthGovernorate: birthGovernorate,
        birthDelegation: birthDelegation,
      };
      const updateRegistration = await api.updateCitizen(code, data);
      //console.log(code);

      dispatch({
        type: types.UPDATEREGISTRATION_SUCCESS,
        updateRegistration,
      });
    } catch (e) {
      dispatch({
        type: types.UPDATEREGISTRATION_FAILURE,
      });
    }
  };

