
import * as types_validation from "../types/validation"

const initialState = {
  loading: true,
  errors: false,
  list: [],
};

const verif = (state = initialState, action) => {
  switch (action.type) {

/**** VERIFICATION***** */
    case types_validation.VERIFICATION_SUCCESS:
      return { action, loading:false, errors:false };
      
    case types_validation.VERIFICATION_REQUEST:   
      return { ...state, loading: true, errors: true };
   
    case types_validation.VERIFICATION_FAILURE:
        return { action, loading: true, errors: true };
    
    case types_validation.RESET:
      return initialState;
      
        
    default:
      return state;
  }
};
export default verif;