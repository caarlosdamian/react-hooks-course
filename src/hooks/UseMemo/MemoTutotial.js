import React, { useState, useEffect,useMemo } from "react";
import axios from "axios";
export default function MemoTutotial() {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
      setData(res.data);
    });
  }, []);
  const findLongesName = (comments) => {
    if (!comments) return null;
    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }
    console.log("THIS WAS COMPUTED");
    return longestName;
  };

  const getLongestName = useMemo(()=>findLongesName(data),[data])

  return (
    <div>
      <div>{getLongestName}</div>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >Toogle.!</button>
      {toggle && <h1>Toggle</h1>}
    </div>
  );
}
