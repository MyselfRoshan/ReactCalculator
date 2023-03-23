import { useState } from "react";
import Button from "./Button";

function App() {
  const [result, setResult] = useState("");
  const butttonTxtArray = [
    "%",
    "+/-",
    "C",
    "AC",
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
    "=",
    "+",
  ];

  const buttons = butttonTxtArray.map((butttonTxt, index) => {
    return (
      <Button
        key={index}
        butttonTxt={butttonTxt}
        result={result}
        setResult={setResult}
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
            type="text"
            className="screen"
            onChange={handleChange}
            value={result}
          />
        </div>
        <div className="buttons">{buttons}</div>
      </div>
    </main>
  );
}

export default App;
