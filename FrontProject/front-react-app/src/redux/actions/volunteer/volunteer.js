import * as types from "../../types/volunteer";
import * as api from "../../../services/volunteer.service";
import { IdcardFilled } from "@ant-design/icons";

export const fetchVolunteers = () => async (dispatch) => {
  dispatch({
    type: types.FETCH_LIST_VOLUNTEER_REQUEST,
  });
  try {
    const volunteers = await api.fetchVolunteers();
    dispatch({
      type: types.FETCH_LIST_VOLUNTEER_SUCCESS,
      volunteers,
    });
  } catch (e) {
    dispatch({
      type: types.FETCH_LIST_VOLUNTEER_FAILURE,
      e,
    });
    console.log(e)
  }
};
export const deleteVolunteer = (id) => async (dispatch) => {
    await api.deleteVolunteer(id);
    dispatch({
      type: types.DELETE_VOLUNTEER,
      id,
    });
  };
  export const updateVolunteer = (id, volunteer) => async (dispatch) => {
    const updatedVolunteer = await api.updateVolunteer(id, volunteer);
    dispatch({
      type: types.UPDATE_VOLUNTEER,
      id,
      volunteer: updatedVolunteer,
    });
  };
  export const addVolunteer = (volunteer) => async (dispatch) => {
    const newVolunteer = await api.addVolunteer(volunteer);
    dispatch({
      type: types.ADD_VOLUNTEER,
      volunteer: newVolunteer,
    });
  };
  export const RESETVolunteer = () => async (dispatch) => {
    dispatch({
      type: types.RESET_VOLUNTEER,
    });
  };

  