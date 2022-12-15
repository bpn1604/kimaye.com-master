import * as types from "./actionTypes";

const initState = {
  appdata: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initState, action) => {
  const { type,payload } = action;
  switch (type) {
    case types.GET_DATA_REQUEST:
      return {
        ...state,
        isloading: true,
        isError: false,
      };
      case types.GET_DATA_SUCCESS:
      return {
        ...state,
        appdata: payload,
        isloading: false,
        isError: false,
      };
      case types.GET_DATA_FAILURE:
      return {
        ...state,
        isloading: false,
        isError: true,
      };

    default:
      return state;
  }
};
