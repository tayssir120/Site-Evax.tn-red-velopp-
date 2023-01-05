import * as types from "../types/pharmacy";

const initialState = {
  loading: true,
  errors: false,
  list: [],
};

const pharmacy = (state = initialState, action) => {
  switch (action.type) {

    //reducer of fetch list of pharmacies
    case types.FETCH_PHARMACY_REQUEST:
      return { ...state, loading: true, error: true };
    case types.FETCH_PHARMACY_SUCCESS:
      return { ...state, list: [...action.pharmacies], loading: false, errors: false };
    case types.FETCH_PHARMACY_FAILURE:
      return { ...state, error: true, loading: false };

    //delete pharmacie
    case types.DELETE_PHARMACY:
      const newParmacies = state.list.filter((pharmacy) => pharmacy.id !== action.id);
      console.log(action);
      return { ...state, action, list: newParmacies };

    //update pharmacie
    case types.UPDATE_PHARMACY:
      const updatedPharmacy = state.list.map((pharmacy) => {
        if (pharmacy.id === action.id) {
          return action.pharmacy;
        }
        return pharmacy;
      });
      return { ...state, action, list: updatedPharmacy, loading: false };

    //add pharmacie
    case types.ADD_PHARMACY:
      console.log(action);
      return {
        ...state,
        list: [...state.list, action.pharmacy], loading: false
      };

    //reducer of reset state
    case types.RESET:
      return initialState;

    default:
      return state;
  }
};
export default pharmacy;
