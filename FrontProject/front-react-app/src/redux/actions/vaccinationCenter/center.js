import * as types from "../../types/vaccinationCenter";
import * as api from "../../../services/vaccinationCenter.service";

export const fetchCenters = () => async (dispatch) => {
  dispatch({
    type: types.FETCH_LIST_REQUEST,
  });
  try {
    const centers = await api.listVaccinationCenter();
    dispatch({
      type: types.FETCH_LIST_SUCCESS,
      centers,
    });
  } catch (e) {
    dispatch({
      type: types.FETCH_LIST_FAILURE,
      e,
    });
    console.log(e)
  }
};

export const deleteCenter = (id) => async (dispatch) => {
  await api.deleteVaccinationCenter(id);
  dispatch({
    type: types.DELETE_CENTER,
    id,
  });
};

export const updateCenter = (id, center) => async (dispatch) => {
  const updatedCenter = await api.updateVaccinationCenter(id, center);
  dispatch({
    type: types.UPDATE_CENTER,
    id,
    center: updatedCenter,
  });
};

export const addCenter = (center) => async (dispatch) => {
  const newCenter = await api.addVaccinationCenter(center);
  dispatch({
    type: types.ADD_CENTER,
    center: newCenter,
  });
};


//action of reset state
export const RESET_ACTION = () => async (dispatch) => {
  dispatch({
    type: types.RESET,
  });
};

export const RESET = () => async (dispatch) => {
  dispatch({
    type: types.RESET_ACTION,
  });
};

export const assignVaccineCenter =
  (NCenter, NVaccine, vquantity) => async (dispatch) => {
    dispatch({
      type: types.ASSIGN_VACCINE_CENTER_REQUEST,
    });

    try {
      let data = { NCenter: NCenter, NVaccine: NVaccine, vquantity: vquantity };
      const assign = await api.assignVaccineToCenter(data);
      dispatch({
        type: types.ASSIGN_VACCINE_CENTER_SUCCESS,
        assign,
      });
    } catch (e) {
      dispatch({
        type: types.ASSIGN_VACCINE_CENTER_FAILURE,
      });
    }
  };
  export const affecte = () => async (dispatch) => {
    await api.withoutAppointment();
    dispatch({
      type: types.AFFECT,
      
    });
  };
  