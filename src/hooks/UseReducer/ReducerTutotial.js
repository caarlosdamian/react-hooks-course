import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
        showText: state.showText,
      };
    case "toggleShowText":
      return {
        count: state.count + 1,
        showText: !state.showText,
      };
    default:
      return state;
  }
};
function ReducerTutotial() {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <div className="divbox">
      <h1>UseReducer</h1>

      <div className="divbox__div">
        <p>{state.count}</p>
        <button
          onClick={() => {
            dispatch({ type: "INCREMENT" });
            dispatch({ type: "toggleShowText" });
          }}
        >
          Click Here
        </button>
        {state.showText && <p>This is a Text</p>}
      </div>
    </div>
  );
}

export default ReducerTutotial;
