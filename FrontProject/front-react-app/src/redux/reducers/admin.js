import * as types from "../types/admin";


const initialState = {
  loading: true,
  errors: false,
  list: [],
};

const admin = (state = initialState, action) => {
  switch (action.type) {

/**** LOGIN ADMIN***** */
    case types.LOGIN_REQUEST:
        return { ...state, loading:false, errors:false };
      
    case types.LOGIN_SUCCESS:   
        return { action, loading: false, errors: false };
   
    case types.LOGIN_FAILURE:
        return { action, loading: true, errors: true };    
      
    default:
        return state;
  }
};
export default admin;