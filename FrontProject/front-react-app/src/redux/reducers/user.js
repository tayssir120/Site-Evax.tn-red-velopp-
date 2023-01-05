import * as types from "../types";
import * as types_validation from "../types/validation"

const initialState = {
  loading: true,
  errors: false,
  list: [],
};

const userL = (state = initialState, action) => {
  switch (action.type) {

/**** LOGIN VALIDATOR***** */
    case types.LOGIN_REQUEST:
      return { ...state, loading: true, errors: true };

    case types.LOGIN_SUCCESS:        
        return { action , loading:false, errors:false};

    case types.LOGIN_FAILURE:      
        return { action , loading:true,errors:true};
                  
/**** VALIDATION FIXE***** */
    case types_validation.VALIDATION_FIXE_REQUEST:   
        return { ...state, loading: true, errors: true };
   
    case types_validation.VALIDATION_FIXE_FAILURE:
        return { action, loading: true, errors: true };
    
    case types_validation.VALIDATION_FIXE_SUCCESS:
        return { action, loading:false, errors:false };
      
/**** VALIDATION MOBILE***** */
    case types_validation.VALIDATION_MOBILE_REQUEST:   
        return { ...state, loading: true, errors: true };
   
    case types_validation.VALIDATION_MOBILE_FAILURE:
        return { action, loading: true, errors: true };
    
    case types_validation.VALIDATION_MOBILE_SUCCESS:
        return { action, loading:false, errors:false };
      
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
export default userL;