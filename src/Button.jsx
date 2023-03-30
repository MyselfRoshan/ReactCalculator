function Button({ butttonTxt, setResult, inputRef, result }) {
  function handleClick(e) {
    inputRef.current.focus();
    const targetBtnTxt = e.target.innerText;
    setResult((prevResult) => {
      if (targetBtnTxt === "AC") return "";
      if (targetBtnTxt === "x²") {
        return prevResult.concat("²");
      }
      if (targetBtnTxt === "C" && prevResult.length >= 0)
        return prevResult.slice(0, prevResult.length - 1);
      // return prevResult !== null
      return prevResult.concat(e.target.innerText);
      // : result;
      // return prevResult !== null
      //   ? prevResult.concat(e.target.innerText)
      //   : result;
    });
  }
  return (
    <button className="button" onClick={(e) => handleClick(e)}>
      {butttonTxt}
    </button>
  );
}
export default Button;
