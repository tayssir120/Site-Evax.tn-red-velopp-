import * as types from "../types/validation";

 const reset = (user, pwd) => async (dispatch) => {
  dispatch({
    type: types.RESET,
  });
};
export default reset;
