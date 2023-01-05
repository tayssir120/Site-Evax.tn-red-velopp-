import * as types from "../../types/jpo";
import * as api from "../../../services/jpo.service";
import { IdcardFilled } from "@ant-design/icons";

export const fetchJPOs = () => async (dispatch) => {
  dispatch({
    type: types.FETCH_LIST_JPO_REQUEST,
  });
  try {
    const jpos = await api.fetchJPOs();
    dispatch({
      type: types.FETCH_LIST_JPO_SUCCESS,
      jpos,
    });
  } catch (e) {
    dispatch({
      type: types.FETCH_LIST_JPO_FAILURE,
      e,
    });
    console.log(e)
  }
};
export const deletejpo = (id) => async (dispatch) => {
    await api.deleteJPO(id);
    dispatch({
      type: types.DELETE_JPO,
      id,
    });
  };
  export const updateJPO = (id, jpo) => async (dispatch) => {
    const updatedJPO = await api.updateJPO(id, jpo);
    dispatch({
      type: types.UPDATE_JPO,
      id,
      jpo: updatedJPO,
    });
  };
  export const addJPO = (jpo) => async (dispatch) => {
    const newJPO = await api.addJPO(jpo);
    dispatch({
      type: types.ADD_JPO,
      jpo: newJPO,
    });
  };
  export const RESETJPO = () => async (dispatch) => {
    dispatch({
      type: types.RESET_JPO,
    });
  };

  