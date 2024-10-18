import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../types/store";
import { setChildName } from "../slices/childSlice";

const Child: React.FC = () => {
  const name = useSelector((state: RootState) => state.child.name);
  const dispatch = useDispatch();
  const [inputName, setInputName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setChildName(inputName));
    setInputName("");
  };

  return (
    <div>
      <h3>Child</h3>
      <p>Name: {name}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          placeholder="Enter name"
        />
        <button type="submit">Set Name</button>
      </form>
    </div>
  );
};

export default Child;
