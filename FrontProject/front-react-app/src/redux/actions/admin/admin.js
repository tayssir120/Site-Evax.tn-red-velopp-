import * as types from "../../types/admin";
import * as api from "../../../services/dashboad.service";
 
export const adminLogin = (login , pwd) => async (dispatch) => {
  dispatch({
    type: types.LOGIN_REQUEST,
  });
  try {
    let data={login : login , pwd :pwd}
    const adminLogin = await api.connectAdmin(data);
    console.log(adminLogin)
    dispatch({
      type: types.LOGIN_SUCCESS,
      adminLogin,
    });
  } catch (e) {
    dispatch({
      type: types.LOGIN_FAILURE,
    });
  }
};