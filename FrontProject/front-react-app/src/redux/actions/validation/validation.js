import * as types from "../../types/validation";
import * as api from "../../../services/validation.service";

export const validationfixe = (code, vaccin , date) => async (dispatch) => {
  dispatch({
    type: types.VALIDATION_FIXE_REQUEST,
  });
  try {
    let data={code : code , vaccine :vaccin , date : date}
    const validationfixe = await api.fixe(data);
    console.log(validationfixe)
    dispatch({
      type: types.VALIDATION_FIXE_SUCCESS,
      validationfixe,
    });
  } catch (e) {
    dispatch({
      type: types.VALIDATION_FIXE_FAILURE,
    });
  }
};

//action of reset state
export const RESET_ACTION = () => async (dispatch) => {
  dispatch({
    type: types.RESET,
  });
};