function Button({ butttonTxt, result, setResult }) {
  function handleClick(e) {
    const targetBtnTxt = e.target.innerText;
    setResult((prevResult) => {
      // const regexNumber = /[0-9]|./;
      if (targetBtnTxt === "AC") return "";
      if (targetBtnTxt === "+/-") return `${Number(prevResult) * -1}`;
      if (targetBtnTxt === "C" && !prevResult.length)
        return prevResult.slice(0, prevResult.length - 1);
      // if (regexNumber.test(targetBtnTxt)) {
      // console.log(targetBtnTxt);

      return prevResult.concat(e.target.innerText);
      // return !prevResult ? targetBtnTxt : prevResult.concat(targetBtnTxt);
    });
    // let operators = result.split(/(?<!\\d)-?[0-9.]+/);
    // let operators = result.split(/(?<=\\d)[-+/%*]/);
    let operators = result.split(/[–+÷%×]/);
    console.log(operators);
  }
  return (
    <button className="button" onClick={(e) => handleClick(e)}>
      {butttonTxt}
    </button>
  );
}
export default Button;
