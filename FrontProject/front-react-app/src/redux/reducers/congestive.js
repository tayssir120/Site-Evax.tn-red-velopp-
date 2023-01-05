import * as types from "../types/dashboard";

const initialState = {
    loadingcong: true,
  errors: false,
  list: [],
};

const congestivenbr = (state = initialState, action) => {
  switch (action.type) {
  
  /**** NUMBER BLOODPRESSURE***** */
  case types.CONGESTIVE_NUMBER_REQUEST:
    return { ...state, loadingcong: true, errors: true };

  case types.CONGESTIVE_NUMBER_SUCCESS:
    console.log(action);
    return { action, loadingcong: false, errors: false };

  case types.CONGESTIVE_NUMBER_FAILURE:
    return { action, loadingcong: true, errors: true };
    default:
      return state;
  }
};
export default congestivenbr;
