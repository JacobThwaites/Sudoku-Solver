import React, { useState } from "react";
import Square from "./Square";

const emptyRow = new Array(9).fill(null);

function Row() {
  const [nums, setNums] = useState(emptyRow);
  
    function handleChange(num: number, index: number) {
        const newNums = [...nums];
        newNums[index] = num;
        setNums(newNums);
    }

  return (
    <>
      {nums.map((num: number, index: number) => {
        return <Square key={index} index={index} value={num} handleChange={handleChange}/>;
      })}
    </>
  );
}

export default Row;
