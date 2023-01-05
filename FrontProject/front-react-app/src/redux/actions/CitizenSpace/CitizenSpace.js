import * as types from "../../types/CitizentSpace";
import * as api from "../../../services/citizens.service";

export const loginEVAX = (code) => async (dispatch) => {
  dispatch({
    type: types.LOGIN_EVAX_REQUEST,
  });
  try {
    let data={code : code }
    const loginEVAX = await api.sendCodeLoginEvax(data);
    console.log(loginEVAX);
    dispatch({
      type: types.LOGIN_EVAX_SUCCESS,
      loginEVAX,
    });
  } catch (e) {
    dispatch({
      type: types.LOGIN_EVAX_FAILURE,
      e
    });
    
  }
};
export const loginCODE = (code) => async (dispatch) => {
  dispatch({
    type: types.LOGIN_CODE_REQUEST,
  });
  try {
    const loginCODE = await api.getCitizenByCode(code);
    console.log(loginCODE);
    dispatch({
      type: types.LOGIN_CODE_SUCCESS,
      loginCODE,
    });
  } catch (e) {
    dispatch({
      type: types.LOGIN_CODE_FAILURE,
      e
    });
    
  }
};

export const PersonInfor = (code) => async (dispatch) => {
  dispatch({
    type: types.LOGIN_PERSON_REQUEST,
  });

  try {
    const PersonInfor = await api.getCitizenByCode(code);
   
    dispatch({
      type: types.LOGIN_PERSON_SUCCESS,
      PersonInfor,
    });
    
  } catch (e) {
    
    dispatch({
      type: types.LOGIN_PERSON_FAILURE,
      e
    });
    
  }
};


export const PersonUpdate = (code, newData) => async (dispatch) => {
  dispatch({
    type: types.LOGIN_UPDATE_REQUEST,
  });
  let data={newData : newData }
  try {
    const PersonUpdate = await api.editCitizenWithCin(code, data);
   
    dispatch({
      type: types.LOGIN_UPDATE_SUCCESS,
      PersonUpdate,
    });
    
  } catch (e) {
    
    dispatch({
      type: types.LOGIN_UPDATE_FAILURE,
      e
    });
    
  }
};