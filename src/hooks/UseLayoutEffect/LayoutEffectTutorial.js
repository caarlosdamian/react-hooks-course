import React, { useEffect, useLayoutEffect, useRef } from "react";

function LayoutEffectTutorial() {
  const inputRef = useRef(null);
  useLayoutEffect(() => {
    
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value="HELLO"
  }, []);
  return <div><input ref={inputRef} value='CARLOS' ></input></div>;
}

export default LayoutEffectTutorial;
