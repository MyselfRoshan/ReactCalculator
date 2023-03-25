import { useCallback } from "react";

function Button({ butttonTxt, result, setResult }) {
  // const operands = useCallback(() => {
  //   return [...result.split(/[–+÷%×]/)];
  // }, [result]);
  let operands = [...result.split(/[–+÷%×]/)];
  // let operators = [...result.split(/\d+/g)];
  let operators = [...result.split(/[-]{0,1}[\d]*[.]{0,1}[\d]+/g)];
  // operands.forEach((element) => {
  //   console.log(element);
  // });
  operators.forEach((element) => {
    console.log(element);
  });

  function handleClick(e) {
    const targetBtnTxt = e.target.innerText;
    // console.log(operands);
    setResult((prevResult) => {
      // const regexNumber = /[0-9]|./;
      if (targetBtnTxt === "AC") return "";
      if (targetBtnTxt === "+/-") return `${Number(operands) * -1}`;
      // console.log(operands);
      if (targetBtnTxt === "C" && prevResult.length >= 0)
        return prevResult.slice(0, prevResult.length - 1);
      // if (regexNumber.test(targetBtnTxt)) {
      // console.log(targetBtnTxt);

      return prevResult.concat(e.target.innerText);
      // return !prevResult ? targetBtnTxt : prevResult.concat(targetBtnTxt);
    });
    // let operators = result.split(/(?<!\\d)-?[0-9.]+/);
    // let operators = result.split(/(?<=\\d)[-+/%*]/);
  }
  return (
    <button className="button" onClick={(e) => handleClick(e)}>
      {butttonTxt}
    </button>
  );
}
export default Button;
