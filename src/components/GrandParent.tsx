import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../types/store";
import { setGrandParentMessage } from "../slices/grandParentSlice";
import Parent from "../components/Parent";

const GrandParent: React.FC = () => {
  const message = useSelector((state: RootState) => state.grandParent.message);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>GrandParent</h1>
      <p>{message}</p>
      <button
        onClick={() =>
          dispatch(setGrandParentMessage("Updated GrandParent message"))
        }
      >
        Update Message
      </button>
      <Parent />
    </div>
  );
};

export default GrandParent;
