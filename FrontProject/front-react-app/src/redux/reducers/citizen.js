import * as types from "../types/citizen";
const initialState = {
  loading: true,
  errors: false,
  success: false,
  redirectToNewPage: false,
  list: [],
  sendCodeLoading: true,
  verifCodeLoading: true,
  addLoading: true,
  addOnPharmacyLoading: true,
};

const citizen = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATEFS_REQUEST:
      return {
        ...state,
        loading: true,
        errors: true,
      };
    case types.UPDATEFS_SUCCESS:
      console.log(action);
      return {
        action,
        loading: false,
        errors: false,
        redirectToNewPage: true,
      };

    case types.UPDATEFS_FAILURE:
      console.log(action);
      return { action, loading: true, errors: true, redirectToNewPage: false };

    case types.REPORT_REQUEST:
      return { ...state, loading: true, errors: true };
    case types.REPORT_SUCCESS:
      console.log(action);
      return { action, loading: false, errors: false, success: true };
    case types.REPORT_FAILURE:
      console.log(action);
      return { action, loading: true, errors: true };

    case types.UPDATEREGISTRATION_REQUEST:
      return { ...state, loading: true, errors: true };
    case types.UPDATEREGISTRATION_SUCCESS:
      console.log(action);
      return { action, loading: false, errors: false, success: true };
    case types.UPDATEREGISTRATION_FAILURE:
      console.log(action);
      return { action, loading: true, errors: true };

    //reducer of send code
    case types.SEND_MAIL_REQUEST:
      return { ...state, sendCodeLoading: true, errors: true };
    case types.SEND_MAIL_SUCCESS:
      return {
        action,
        sendCodeLoading: false,
        verifCodeLoading: true,
        errors: false,
      };
    case types.SEND_MAIL_FAILURE:
      return { action, sendCodeLoading: true, errors: true };

    //reducer of verif code
    case types.VERIF_CODE_REQUEST:
      return { ...state, verifCodeLoading: true, errors: true };
    case types.VERIF_CODE_SUCCESS:
      return {
        action,
        verifCodeLoading: false,
        sendCodeLoading: false,
        addLoading: true,
        errors: false,
      };
    case types.VERIF_CODE_FAILURE:
      return { action, verifCodeLoading: true, errors: true };

    //reducer of add with cin
    case types.ADD_CITIZEN_WITH_CIN_REQUEST:
      return { ...state, addLoading: true, errors: true };
    case types.ADD_CITIZEN_WITH_CIN_SUCCESS:
      return {
        action,
        addLoading: false,
        verifCodeLoading: false,
        sendCodeLoading: false,
        errors: false,
      };
    case types.ADD_CITIZEN_WITH_CIN_FAILURE:
      return { action, addLoading: true, errors: true };

    //reducer of add on pharmacy
    case types.ADD_ON_PHARMACY_REQUEST:
      return { ...state, addOnPharmacyLoading: true, errors: true };
    case types.ADD_ON_PHARMACY_SUCCESS:
      return { action, addOnPharmacyLoading: false, errors: false };
    case types.ADD_ON_PHARMACY_FAILURE:
      return { action, addOnPharmacyLoading: true, errors: true };

    //reducer of reset state
    case types.RESET:
      return initialState;

    default:
      return state;
  }
};
export default citizen;
