import * as types from "../types/dashboard";

const initialState = {
  loading: true,
  errors: false,
  list: [],
};

const nbrVaccin = (state = initialState, action) => {
  switch (action.type) {
   
    /**** NUMBER DIABETIC***** */
    case types.DIABETIC_NUMBER_REQUEST:
      return { ...state, loading: true, errors: true };

    case types.DIABETIC_NUMBER_SUCCESS:
      console.log(action);
      return { action, loading: false, errors: false };

    case types.DIABETIC_NUMBER_FAILURE:
      return { action, loading: true, errors: true };
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
export default nbrVaccin;
