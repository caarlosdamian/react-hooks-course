import React, { useRef } from "react";
import Buttons from "./Buttons";

function ImperativeHandle() {
  const buttonRef = useRef(null);
  return (
    <div>
      <button
        onClick={() => {
          buttonRef.current.alterToggle();
        }}
      >
        Button from parent
      </button>
      <Buttons ref={buttonRef} />
    </div>
  );
}

export default ImperativeHandle;
