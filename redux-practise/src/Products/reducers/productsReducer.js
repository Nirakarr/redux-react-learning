import { ActionTypes } from "../contants/action-types";

const initialState={
 products:[{
  id:1,
  title:"Nirakar",
  category:"Programming"
 }]
}
export const productReducer=(state=initialState,{type,payload})=>{
 switch(type){
  case ActionTypes.SET_PRODUCTS:
    return state;
  

  default:
    return state;
 }
}