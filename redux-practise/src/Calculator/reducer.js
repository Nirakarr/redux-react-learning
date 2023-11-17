const initialState = {
  display: "",
  result: "",
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DISPLAY":
      return {
        ...state,
        display: action.payload,
      };
    case "SET_RESULT":
      return {
        ...state,
        result: action.payload,
      };
    case "CLEAR":
      return {
        ...state,
        display: "",
        result: "",
      };
    default:
      return state;
  }
};

export default calculatorReducer;

// export const initialState={
//  state:0
// }
// const calculateReducer=(state=initialState,actions)=>{
//  switch(actions.type){
//  case "ADD":
//   return{
//    result:state.result+actions.payload
//   }
//  case "SUB":
//   return{
//    result:state.result+actions.payload
//   }
//  case "MUL":
//   return{
//    result:state.result*actions.payload
//   }
//   case "DIV":
//    return {
//     result:state.result/actions.payload
//    }
//   default:
//    return state;
//  }
// }
// export default calculateReducer;
