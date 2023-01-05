import * as types from "../../types/index";
import * as api from "../../../services/validator.service";

export const loginUser = (user, pwd) => async (dispatch) => {
  dispatch({
    type: types.LOGIN_REQUEST,
  });

  try {
    let data = { login: user, pwd: pwd };
    const loginUser = await api.connect(data);

    dispatch({
      type: types.LOGIN_SUCCESS,
      loginUser,
    });
  } catch (e) {
    dispatch({
      type: types.LOGIN_FAILURE,
    });
  }
};
