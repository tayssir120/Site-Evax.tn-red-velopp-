import * as types from "../types/CitizentSpace";
const initialState = {
  loading: true,
  PersonLoading:true,
  errors: false,
  redirectToNewPage: false,
  updated : false,

  list: [],
};

const citizenSpaceLogin = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_EVAX_REQUEST:
      return { ...state, loading: true, errors: true };
      case types.LOGIN_EVAX_SUCCESS:
        console.log(action)
        return { action , loading:false,redirectToNewPage: true, errors:false};
      case types.LOGIN_EVAX_FAILURE:
        console.log(action)
        return { action , loading:true,redirectToNewPage: false,errors:true};


        case types.LOGIN_PERSON_REQUEST:
      return { ...state, PersonLoading: true,errors: true };
      case types.LOGIN_PERSON_SUCCESS:
        return { action ,PersonLoading:false ,errors:false};
      case types.LOGIN_PERSON_FAILURE:
        return { action ,PersonLoading:true,errors:true};


        case types.LOGIN_UPDATE_REQUEST:
      return { ...state, loading: true,errors: true };
      case types.LOGIN_UPDATE_SUCCESS:
        return { action ,loading:false ,updated: true,errors:false};
      case types.LOGIN_UPDATE_FAILURE:
        return { action ,loading:true,errors:true};
    default:
      return state;
  }
};
export default citizenSpaceLogin;