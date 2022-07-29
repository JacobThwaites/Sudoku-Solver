import React, { useState } from "react";
import Square from "./Square";
import './Row.css';

const emptyRow = new Array(9).fill(null);

interface RowProps {
  numbers: Array<number>
}

function Row(props: RowProps) {
  const [nums, setNums] = useState(emptyRow);
  
    function handleChange(num: number, index: number) {
        const newNums = [...nums];
        newNums[index] = num;
        setNums(newNums);
    }

  return (
    <div className='row'>
      {nums.map((num: number, index: number) => {
        return <Square key={index} index={index} value={num} handleChange={handleChange}/>;
      })}
    </div>
  );
}

export default Row;
