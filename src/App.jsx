import { useState } from "react";
import Button from "./Button";

function App() {
  const [count, setCount] = useState(0);
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
    return <Button key={index} butttonTxt={butttonTxt}></Button>;
  });
  return (
    <main className="App">
      <div className="calculator-frame">
        <div className="display-container">
          <input type="text" value={12345} className="screen" />
        </div>
        <div className="buttons">{buttons}</div>
      </div>
    </main>
  );
}

export default App;
