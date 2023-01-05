import * as types from "../../types/pharmacy";
import * as api from "../../../services/pharmacy.service";

export const fetchPharmacies = () => async (dispatch) => {
  dispatch({
    type: types.FETCH_PHARMACY_REQUEST,
  });
  try {
    const pharmacies = await api.listPharmacy();
    dispatch({
      type: types.FETCH_PHARMACY_SUCCESS,
      pharmacies,
    });
  } catch (e) {
    dispatch({
      type: types.FETCH_PHARMACY_FAILURE,
      e,
    });
  }
};

export const deletePharmacy = (id) => async (dispatch) => {
  await api.deletePharmacy(id);
  dispatch({
    type: types.DELETE_PHARMACY,
    id,
  });
};

export const updatePharmacy = (id, pharmacy) => async (dispatch) => {
  const updatedPharmacy = await api.updatePharmacy(id, pharmacy)
  dispatch ( {
    type: types.UPDATE_PHARMACY,
    id,
    pharmacy: updatedPharmacy,
  })
};

export const addPharmacy = (pharmacy) => async (dispatch) => {
  const newPharmacy = await api.addPharmacy(pharmacy)
  dispatch({
    type: types.ADD_PHARMACY,
    pharmacy: newPharmacy,
  })
}

//action of reset state
export const RESET_ACTION = () => async (dispatch) => {
  dispatch({
    type: types.RESET,
  });
}
