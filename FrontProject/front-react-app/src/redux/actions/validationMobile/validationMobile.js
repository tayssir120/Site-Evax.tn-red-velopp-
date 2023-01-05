import * as types from "../../types/validation";
import * as api from "../../../services/validation.service";

export const validationMobile = (data) => async (dispatch) => {
  dispatch({
    type: types.VALIDATION_MOBILE_REQUEST,
  });
  try {
    const validationMobile= await api.mobile(data);
    
    dispatch({
      type: types.VALIDATION_MOBILE_SUCCESS,
      validationMobile,
    });
  } catch (e) {
    dispatch({
      type: types.VALIDATION_MOBILE_FAILURE,
    });
  }
};


//action of reset state
export const RESET_ACTION = () => async (dispatch) => {
  dispatch({
    type: types.RESET,
  });
};