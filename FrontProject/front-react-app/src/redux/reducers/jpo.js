import * as types from "../types/jpo";
const initialState = {
  loading: true,
  errors: false,
  success: false,
  list: [],
};

const JPO = (state = initialState, action) => {
  switch (action.type) {
    //reducer of fetch list of centers
    case types.FETCH_LIST_JPO_REQUEST:
      return { ...state, loading: true, error: true };
    case types.FETCH_LIST_JPO_SUCCESS:
      return { ...state, list: [...action.jpos], loading: false, errors: false };
    case types.FETCH_LIST_JPO_FAILURE:
      return { ...state, error: true, loading: false };

    //delete center
    case types.DELETE_JPO:
      const newJPOs = state.list.filter((jpo) => jpo.id !== action.id);
      console.log(action);
      return { ...state, action, list: newJPOs };

    //update center
    case types.UPDATE_JPO:
      const updatedJPO = state.list.map((jpo) => {
        if (jpo.id === action.id) {
          return action.jpo;
        }
        return jpo;
      });
      return { ...state, action, list: updatedJPO, loading: false };


    //add center
    case types.ADD_JPO:
      console.log(action);
      return {
        ...state,
        list: [...state.list, action.jpo], loading: false
      };

    //reducer of reset state
    case types.RESET_JPO:
      return initialState;

    default:
      return state;
  }
};
export default JPO;
