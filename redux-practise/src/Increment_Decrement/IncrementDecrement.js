import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Decrement, Increment } from "./actions";

const IncrementDecrement = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{count}</p>
      <button onClick={()=>{dispatch(Increment())}}>Increment</button>
      <button onClick={()=>{dispatch(Decrement())}}>Decrement</button>
    </div>
  );
};

export default IncrementDecrement;
