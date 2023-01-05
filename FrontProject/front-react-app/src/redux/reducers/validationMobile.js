
import * as types_validation from "../types/validation"

const initialState = {
  loading: true,
  errors: false,
  list: [],
};

const mobile = (state = initialState, action) => {
  switch (action.type) {

      
/**** VALIDATION MOBILE***** */
    case types_validation.VALIDATION_MOBILE_REQUEST:   
        return { ...state, loading: true, errors: true };
   
    case types_validation.VALIDATION_MOBILE_FAILURE:
        return { action, loading: true, errors: true };
    
    case types_validation.VALIDATION_MOBILE_SUCCESS:
        return { action, loading:false, errors:false };
  
    case types_validation.RESET:
        return { ...state, loading: true, errors: false };
      
        
    default:
      return state;
  }
};
export default mobile;