import * as types from "../../types/dashboard";
import * as api from "../../../services/dashboad.service";

export const nbrVaccin = () => async (dispatch) => {
  dispatch({
    type: types.VACCIN_NUMBER_REQUEST,
  });
  
  try {
   // let data={login : user , pwd :pwd}
    const nbr = await api.VaccinatedNumber();
   console.log(nbr)
    dispatch({
      type: types.VACCIN_NUMBER_SUCCESS,
      nbr,
    });
  } catch (e) {
   
    dispatch({
      type: types.VACCIN_NUMBER_FAILURE,
     
    });
  }
};


export const nbrcingestive = () => async (dispatch) => {
  dispatch({
    type: types.CONGESTIVE_NUMBER_REQUEST,
  });
  
  try {
   // let data={login : user , pwd :pwd}
    const nbr = await api.congestiveHeartFailureVaccinatedNumber();
   console.log(nbr)
    dispatch({
      type: types.CONGESTIVE_NUMBER_SUCCESS,
      nbr,
    });
  } catch (e) {
   
    dispatch({
      type: types.CONGESTIVE_NUMBER_FAILURE,
     
    });
  }
};
export const nbrchronicKidneyDisease = () => async (dispatch) => {
  dispatch({
    type: types.CHRONICKIDNEYDISEASE_NUMBER_REQUEST,
  });
  
  try {
   // let data={login : user , pwd :pwd}
    const nbr = await api.chronicKidneyDiseaseVaccinatedNumber();
   
    dispatch({
      type: types.CHRONICKIDNEYDISEASE_NUMBER_SUCCESS,
      nbr,
    });
  } catch (e) {
   
    dispatch({
      type: types.CHRONICKIDNEYDISEASE_NUMBER_FAILURE,
     
    });
  }
};

export const nbrdiabetic  = () => async (dispatch) => {
  dispatch({
    type: types.DIABETIC_NUMBER_REQUEST,
  });
  
  try {
   // let data={login : user , pwd :pwd}
    const nbr = await api.diabeticVaccinatedNumber();
   
    dispatch({
      type: types.DIABETIC_NUMBER_SUCCESS,
      nbr,
    });
  } catch (e) {
   
    dispatch({
      type: types.DIABETIC_NUMBER_FAILURE,
     
    });
  }
};


export const nbrBloodPressure = () => async (dispatch) => {
  dispatch({
    type: types.BLOODPRESSURE_NUMBER_REQUEST,
  });
  
  try {
   // let data={login : user , pwd :pwd}
    const nbr = await api.bloodPressureVaccinatedNumber();
   
    dispatch({
      type: types.BLOODPRESSURE_NUMBER_SUCCESS,
      nbr,
    });
  } catch (e) {
   
    dispatch({
      type: types.BLOODPRESSURE_NUMBER_FAILURE,
     
    });
  }
};