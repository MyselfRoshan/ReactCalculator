function Button({ butttonTxt, setResult, inputRef, result }) {
  function handleClick(e) {
    //! Run inputRef only one time for focus
    // if(inputRef)
    console.log(inputRef.current.matches(":focus"));
    // if(!inputRef.current);
    inputRef.current.focus();
    const targetBtnTxt = e.target.innerText;
    setResult((prevResult) => {
      if (targetBtnTxt === "AC") return "";
      if (targetBtnTxt === "x²") {
        return prevResult.concat("²");
      }
      if (targetBtnTxt === "C" && prevResult.length >= 0)
        return prevResult.slice(0, prevResult.length - 1);
      if (result === "Math Error!") return targetBtnTxt;
      return prevResult.concat(targetBtnTxt);
    });
  }
  return (
    <button className="button" onClick={(e) => handleClick(e)}>
      {butttonTxt}
    </button>
  );
}
export default Button;
