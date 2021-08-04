import React, { useEffect, useState } from "react";
import axios from "axios";

function EffectTutorial() {
  const [data, setdata] = useState("");
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
      setdata(res.data[0].email);
    });
  }, []);
  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
}

export default EffectTutorial; 
