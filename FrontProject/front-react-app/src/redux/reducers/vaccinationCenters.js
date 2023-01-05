import * as types from "../types/vaccinationCenter";
const initialState = {
  loading: true,
  errors: false,
  success: false,
  list: [],
  loadingR: true,
   errorsR: false
};

const vaccinationCenter = (state = initialState, action) => {
  switch (action.type) {
    //reducer of fetch list of centers
    case types.FETCH_LIST_REQUEST:
      return { ...state, loading: true, error: true };
    case types.FETCH_LIST_SUCCESS:
      return { ...state, list: [...action.centers], loading: false, errors: false };
    case types.FETCH_LIST_FAILURE:
      return { ...state, error: true, loading: false };

    //delete center
    case types.DELETE_CENTER:
      const newCenters = state.list.filter((center) => center.id !== action.id);
      console.log(action);
      return { ...state, action, list: newCenters };

    //update center
    case types.UPDATE_CENTER:
      const updatedCenter = state.list.map((center) => {
        if (center.id === action.id) {
          return action.center;
        }
        return center;
      });
      return { ...state, action, list: updatedCenter, loading: false };


    //add center
    case types.ADD_CENTER:
      console.log(action);
      return {
        ...state,
        list: [...state.list, action.center], loading: false
      };

    //reducer of reset state
    case types.RESET:
      return initialState;

    case types.ASSIGN_VACCINE_CENTER_REQUEST:
      return { ...state, errors: false };
    case types.ASSIGN_VACCINE_CENTER_SUCCESS:
      console.log(action);
      return {
        ...state,
        action,
        errors: false,
        success: true,
      };

    case types.ASSIGN_VACCINE_CENTER_FAILURE:
      //console.log(action);
      return { ...state, loading: true, errors: true };
    case types.AFFECT:
        //console.log(action);
      return { ...state, loadingR: false, errors: false };
    case types.RESET_ACTION:
        //console.log(action);
      return { ...state, loadingR: true, errorsR: false };
  
    default:
      return state;
  }
};
export default vaccinationCenter;
