import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../types/store";
import { incrementCount, decrementCount } from "../slices/parentSlice";
import Child from "../components/Child";

const Parent: React.FC = () => {
  const count = useSelector((state: RootState) => state.parent.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Parent</h2>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(incrementCount())}>Increment</button>
      <button onClick={() => dispatch(decrementCount())}>Decrement</button>
      <Child />
    </div>
  );
};

export default Parent;
