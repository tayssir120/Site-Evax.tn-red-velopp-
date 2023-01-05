import * as types from "../types/CitizentSpace";
const initialState = {
  loadingCode: true,
  errors: false,
  redirectToNewPageCode: false,
  list: [],
};

const citizenSpaceCode = (state = initialState, action) => {
  switch (action.type) {
        case types.LOGIN_CODE_REQUEST:
      return { ...state, loadingCode: true,errors: true };
      case types.LOGIN_CODE_SUCCESS:
        console.log(action)
        return { action , loadingCode:false,redirectToNewPageCode: true, errors:false};
      case types.LOGIN_CODE_FAILURE:
        console.log(action)
        return { action , loadingCode:true,redirectToNewPageCode: false, errors:true};
    default:
      return state;
  }
};
export default citizenSpaceCode;