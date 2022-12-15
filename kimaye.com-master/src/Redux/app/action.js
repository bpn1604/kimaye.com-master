import axios from "axios";
import * as types from "./actionTypes";

export const getData = (params) => (dispatch) => {
  dispatch({ type: types.GET_DATA_REQUEST });

  axios
    .get("https://databasekemay.onrender.com/appdata", params)
    .then((r) => dispatch({ type: types.GET_DATA_SUCCESS, payload: r.data }))
    .catch((e) => dispatch({ type: types.GET_DATA_FAILURE }));
};


