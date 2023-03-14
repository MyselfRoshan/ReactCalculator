function Button({ butttonTxt, result, setResult }) {
  function handleClick(e) {
    setResult((prevResult) => {
      const regexNumber = /d[0-9]|./;
      if (regexNumber.test(e.target.innerText))
        prevResult.concat(e.target.innerText);
    });
    console.log(result);
  }
  return (
    <button className="button" onClick={(e) => handleClick(e)}>
      {butttonTxt}
    </button>
  );
}
export default Button;
