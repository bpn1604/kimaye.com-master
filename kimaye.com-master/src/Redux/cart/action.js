import * as types from "./actionTypes";
import axios from "axios";



export const getCartData = () => (dispatch) => {
    dispatch({ type: types.GET_CART_REQUEST });
    return axios
      .get("https://databasekemay.onrender.com/cart")
      .then((r) => dispatch({ type: types.GET_CART_SUCCESS, payload: r.data }))
      .catch((e) => dispatch({ type: types.GET_CART_FAILURE }));
  };


export const removeCart=(id)=>(dispatch)=>{

return axios.delete(`https://databasekemay.onrender.com/cart/${id}`)
.then((r)=>dispatch({type:types.EMPTY_CART_SUCCESS,payload:r.data}))
.then((r)=> console.log(r.data))
.then((e)=>null);

}