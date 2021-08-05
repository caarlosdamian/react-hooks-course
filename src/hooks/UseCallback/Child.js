import React, { useEffect } from "react";

function Child({ returnComment }) {
  useEffect(() => {
    console.log("FUNCTION WAS CALLED");
  }, [returnComment]);
  return (
    <div>
      <h1>{returnComment()}</h1>
    </div>
  );
}

export default Child;
