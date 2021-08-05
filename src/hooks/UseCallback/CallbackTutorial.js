import React, { useCallback, useState } from "react";
import Child from "./Child";

export default function CallbackTutorial() {
  const [toogle, setToogle] = useState(false);
  const [data, setData] = useState("Hello this is carlos");

  const returnComment = useCallback(() => {
    return data;
  },[data]);
  return (
    <div>
      <Child returnComment={returnComment} />
      <button
        onClick={() => {
          setToogle(!toogle);
        }}
      >
        Toogle
      </button>
      {toogle && <h1>Toogle</h1>}
    </div>
  );
}
