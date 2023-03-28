import { useRef, useState } from "react";
import Button from "./Button";

function App() {
  const [result, setResult] = useState("");
  const inputRef = useRef();
  const butttonTxtArray = [
    "%",
    // "(",
    "x²",
    "C",
    "AC",
    // "√",
    // "∛",
    // "x³",
    "7",
    "8",
    "9",
    "÷",
    "4",
    "5",
    "6",
    "×",
    "1",
    "2",
    "3",
    "–",
    ".",
    "0",
    "+",
  ];

  function handleClick() {
    // console.log(inputRef.current);
    inputRef.current.focus();
    try {
      const output = result
        .replace("÷", "/")
        .replace("×", "*")
        .replace("–", "-")
        .replace("%", "/100")
        .replace("²", "**2");
      // setResult(eval(output).toString());
      output ? setResult(eval?.(`"use strict";(${output})`)) : setResult("");
    } catch {
      setResult("Math Error!");
    }
  }
  const buttons = butttonTxtArray.map((butttonTxt, index) => {
    return (
      <Button
        key={index}
        butttonTxt={butttonTxt}
        result={result}
        setResult={setResult}
        inputRef={inputRef}
      ></Button>
    );
  });

  function handleChange(e) {
    setResult(e.target.value);
  }
  return (
    <main className="App">
      <div className="calculator-frame">
        <div className="display-container">
          <input
            ref={inputRef}
            type="text"
            className="screen"
            onChange={handleChange}
            value={result}
            // disabled
          />
        </div>
        <div className="buttons">
          {buttons}
          <button className="button" onClick={handleClick}>
            =
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
