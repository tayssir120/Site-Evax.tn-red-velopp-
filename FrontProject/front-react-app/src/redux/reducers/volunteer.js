import * as types from "../types/volunteer";
const initialState = {
  loading: true,
  errors: false,
  success: false,
  list: [],
};

const VOLUNTEER = (state = initialState, action) => {
  switch (action.type) {
    //reducer of fetch list of centers
    case types.FETCH_LIST_VOLUNTEER_REQUEST:
      return { ...state, loading: true, error: true };
    case types.FETCH_LIST_VOLUNTEER_SUCCESS:
      return { ...state, list: [...action.volunteers], loading: false, errors: false };
    case types.FETCH_LIST_VOLUNTEER_FAILURE:
      return { ...state, error: true, loading: false };

    //delete center
    case types.DELETE_VOLUNTEER:
      const newVolunteer = state.list.filter((volunteer) => volunteer.id !== action.id);
      console.log(action);
      return { ...state, action, list: newVolunteer };

    //update center
    case types.UPDATE_VOLUNTEER:
      const updatedVolunteer = state.list.map((volunteer) => {
        if (volunteer.id === action.id) {
          return action.volunteer;
        }
        return volunteer;
      });
      return { ...state, action, list: updatedVolunteer, loading: false };


    //add center
    case types.ADD_VOLUNTEER:
      console.log(action);
      return {
        ...state,
        list: [...state.list, action.volunteer], loading: false
      };

    //reducer of reset state
    case types.RESET_VOLUNTEER:
      return initialState;

    default:
      return state;
  }
};
export default VOLUNTEER;
