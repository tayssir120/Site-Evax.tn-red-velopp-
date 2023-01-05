import * as types_validation from "../types/validation";

const initialState = {
  loading: true,
  errors: false,
  list: [],
};

const fixe = (state = initialState, action) => {
  switch (action.type) {
    /**** VALIDATION FIXE***** */
    case types_validation.VALIDATION_FIXE_REQUEST:
      return { ...state, loading: true, errors: true };

    case types_validation.VALIDATION_FIXE_FAILURE:
      return { action, loading: true, errors: true };

    case types_validation.VALIDATION_FIXE_SUCCESS:
      return { action, loading: false, errors: false };
    case types_validation.RESET:
      return { ...state, loading: true, errors: false };
    default:
      return state;
  }
};
export default fixe;
