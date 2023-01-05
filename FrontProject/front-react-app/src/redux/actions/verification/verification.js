import * as types from "../../types/validation";
import * as api from "../../../services/validation.service";

export const verification = (cin) => async (dispatch) => {
  dispatch({
    type: types.VERIFICATION_REQUEST,
  });
  try {
    const verification= await api.Verification({cin : cin});
    console.log(verification)
    dispatch({
      type: types.VERIFICATION_SUCCESS,
      verification,
    });
  } catch (e) {
    dispatch({
      type: types.VERIFICATION_FAILURE,
    });
  }
};