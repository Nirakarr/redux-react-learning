import { createStore } from "redux";
// import counterReducer from "../Increment_Decrement/reducer";
// import calculateReducer from "../Calculator/reducer";
// import { rootReducer1 } from "../redux1/rootReducer1";
import reducers from '../Products/reducers/indexmain';
export const store = createStore(
  reducers,{},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
