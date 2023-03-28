function Button({ butttonTxt, result, setResult }) {
  function handleClick(e) {
    const targetBtnTxt = e.target.innerText;
    setResult((prevResult) => {
      if (targetBtnTxt === "AC") return "";
      if (targetBtnTxt === "x²") {
        return prevResult.concat("²");
      }
      if (targetBtnTxt === "C" && prevResult.length >= 0)
        return prevResult.slice(0, prevResult.length - 1);
      if (targetBtnTxt === "=") return eval(prevResult);
      return prevResult.concat(e.target.innerText);
      // return !prevResult ? targetBtnTxt : prevResult.concat(targetBtnTxt);
    });
  }
  return (
    <button className="button" onClick={(e) => handleClick(e)}>
      {butttonTxt}
    </button>
  );
}
export default Button;
