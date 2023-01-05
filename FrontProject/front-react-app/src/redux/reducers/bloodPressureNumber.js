import * as types from "../types/dashboard";

const initialState = {
  loadingblood: true,
  errors: false,
  list: [],
};

const bloodPressure = (state = initialState, action) => {
  switch (action.type) {
  
  /**** NUMBER BLOODPRESSURE***** */
  case types.BLOODPRESSURE_NUMBER_REQUEST:
    return { ...state, loadingblood: true, errors: true };

  case types.BLOODPRESSURE_NUMBER_SUCCESS:
    console.log(action);
    return { action, loadingblood: false, errors: false };

  case types.BLOODPRESSURE_NUMBER_FAILURE:
    return { action, loadingblood: true, errors: true };
    default:
      return state;
  }
};
export default bloodPressure;
