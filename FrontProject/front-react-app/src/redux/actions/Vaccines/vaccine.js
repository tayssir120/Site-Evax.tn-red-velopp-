import * as types from "../../types/vaccine";
import * as api from "../../../services/vaccination.service";

export const getAllVaccines = () => async (dispatch) => {
  dispatch({
    type: types.GET_VACCINES_REQUEST,
  });

  try {
    const vaccines = await api.getAllVaccines();
    dispatch({
      type: types.GET_VACCINES_SUCCESS,
      vaccines,
    });
  } catch (e) {
    dispatch({
      type: types.GET_VACCINES_FAILURE,
    });
  }
};
export const getVaccineById = (id) => async (dispatch) => {
  dispatch({
    type: types.GET_VACCINE_BY_ID_REQUEST,
  });
  try {
    const vaccine = await api.getVaccineById(id);
    //console.log(id);
    dispatch({
      type: types.GET_VACCINE_BY_ID_SUCCESS,
      vaccine,
    });
  } catch (e) {
    dispatch({
      type: types.GET_VACCINE_BY_ID_FAILURE,
    });
  }
};

export const addVaccine = (vaccine) => async (dispatch) => {
  dispatch({
    type: types.ADD_VACCINE_REQUEST,
  });

  try {
    const newVaccine = await api.addVaccine(vaccine);

    dispatch({
      type: types.ADD_VACCINE_SUCCESS,
      newVaccine,
    });
  } catch (e) {
    dispatch({
      type: types.ADD_VACCINE_FAILURE,
    });
  }
};

export const updateVaccine = (id, newQuantity) => async (dispatch) => {
  dispatch({
    type: types.UPDATE_VACCINE_REQUEST,
  });

  try {
    let data = { newQuantity: newQuantity };
    const updatedVaccine = await api.updateVaccine(id, data);

    dispatch({
      type: types.UPDATE_VACCINE_SUCCESS,
      updatedVaccine,
    });
  } catch (e) {
    dispatch({
      type: types.UPDATE_VACCINE_FAILURE,
    });
  }
};

export const deleteVaccine = (id) => async (dispatch) => {
  await api.deleteVaccine(id);
  dispatch({
    type: types.DELETE_VACCINE,
    id,
  });
};
