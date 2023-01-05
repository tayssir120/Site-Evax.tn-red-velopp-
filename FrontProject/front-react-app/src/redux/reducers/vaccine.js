import * as types from "../types/vaccine";
const initialState = {
  loading: true,
  errors: false,
  success: false,
  list: [],
};

const vaccines = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_VACCINES_REQUEST:
      return { ...state, errors: false };
    case types.GET_VACCINES_SUCCESS:
      console.log(action);
      return {
        ...state,
        list: [...action.vaccines],
        errors: false,
        success: true,
      };

    case types.GET_VACCINES_FAILURE:
      //console.log(action);
      return { ...state, loading: true, errors: true };
    case types.ADD_VACCINE_REQUEST:
      return { ...state, errors: false, success: false };

    case types.ADD_VACCINE_SUCCESS:
      console.log(action);
      return {
        ...state,
        success: true,
        errors: false,
      };
    case types.ADD_VACCINE_FAILURE:
      return { ...state, loading: false, errors: true };

    case types.UPDATE_VACCINE_REQUEST:
      return { ...state, loading: true, errors: true };
    case types.UPDATE_VACCINE_SUCCESS:
      console.log(action);
      return { action, loading: false, errors: false, success: true };
    case types.UPDATE_VACCINE_FAILURE:
      console.log(action);
      return { action, loading: true, errors: true };
    //delete vaccine
    case types.DELETE_VACCINE:
      const newVaccines = state.list.filter((v) => v.id !== action.id);
      console.log(action);
      return { ...state, action, list: newVaccines };

    default:
      return state;
  }
};
export default vaccines;
