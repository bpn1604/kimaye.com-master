import * as types from "./actionTypes";

const initstate = {
  cart: [],
  isLoading: false,
  isError: false,
}

export const reducer = (state = initstate, action)=>{
  const { type, payload } = action
  switch (type) {
    case types.GET_CART_REQUEST: 
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    
    case types.GET_CART_SUCCESS: 
      return {
        ...state,
        cart: payload,
        isLoading: false,
        isError: false,
      };
    
    case types.GET_CART_FAILURE: 
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case types.EMPTY_CART_SUCCESS:
      return{
        ...state,
        cart:payload,
        isLoading:false,
        isError:false,
      }
    

    default:
      return state;
  }
}
