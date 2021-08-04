import React, { useState } from "react";

function StateTutorial() {
  const [counter, setCounter] = useState(0);
  const Increment = () => setCounter(counter + 1);
  const Decrement = () => setCounter(counter - 1);

  return (
    <div className="divbox">
      <h1>UseState</h1>

      <div className="divbox__div">
        <p>Counter: {counter}</p>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
      </div>
    </div>
  ); 
}

export default StateTutorial;
