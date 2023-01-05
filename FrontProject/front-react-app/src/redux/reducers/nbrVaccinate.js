import * as types from "../types/dashboard";

const initialState = {
  loadingnb: true,
  errors: false,
  list: [],
};

const nbrVaccinated = (state = initialState, action) => {
  switch (action.type) {
  
  /**** NUMBERVACCINE***** */
  case types.VACCIN_NUMBER_REQUEST:
      return { ...state, loadingnb: true, errors: true };

    case types.VACCIN_NUMBER_SUCCESS:
      console.log(action);
      return { action, loadingnb: false, errors: false };

    case types.VACCIN_NUMBER_FAILURE:
      return { action, loadingnb: true, errors: true };
    default:
      return state;
  }
};
export default nbrVaccinated;
