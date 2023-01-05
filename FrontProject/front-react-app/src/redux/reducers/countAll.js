import * as types from "../types/citizen";
const initialState = {
  countInscritLoading: true,
  errors: false,
  list: [],
};

const countAll = (state = initialState, action) => {
  switch (action.type) {
    //reducer of count all inscrit
    case types.COUNT_INSCRIT_REQUEST:
      return {...state, countInscritLoading: false, errors: true};
    case types.COUNT_INSCRIT_SUCCESS:
      return {action, countInscritLoading: false, errors: false};
    case types.COUNT_INSCRIT_FAILURE:
      return {action, countInscritLoading: true, errors: true}

    default:
      return state;
  }
};
export default countAll;
