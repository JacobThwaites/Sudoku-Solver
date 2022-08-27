import React from "react";

interface SolveButtonProps {
  sudoku: Array<Array<number>>;
  setStartingPosition: Function;
  updateRows: Function;
  setSolutionSteps: Function;
}

export default function SolveButton(props: SolveButtonProps) {
  async function fetchSolution() {
    props.setStartingPosition(props.sudoku);

    const headers = new Headers();
    headers.append(
      "X-CSRFToken",
      "mFt9iI8ePmrSPrVMRYTziISABwVIc6W6voUMHobLGr6oV8Wg9HirsTXO04TFi57w"
    );
    const res = await fetch("http://localhost:8000/solve/", {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ sudoku: props.sudoku }),
    });

    const data = await res.json();
    props.updateRows(data.solution);
    props.setSolutionSteps(data.steps);
  }

  return <button onClick={fetchSolution}>Solve</button>;
}
