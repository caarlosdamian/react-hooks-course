import React, { useRef } from "react";

function RefTutorial() {
  const inputRef = useRef(null);
  const onclick = () => {
    inputRef.current.value =''
  };
  return (
    <div className="divbox">
      <h1>useRef</h1>

      <div className="divbox__div">
        <input ref={inputRef} type="text" placeholder="Ex" />
        <button onClick={onclick}>Change Name</button>
      </div>
    </div>
  );
}

export default RefTutorial;
