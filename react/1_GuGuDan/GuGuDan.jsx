const React = require("react");

const GuGuDan = () => {
  const [firstNum, setFirstNum] = React.useState(
    Math.floor(Math.random() * 10)
  );
  const [secondNum, setSecondNum] = React.useState(
    Math.floor(Math.random() * 10)
  );
  const [value, setValue] = React.useState("");
  const [result, setResult] = React.useState("");
  const inputRef = React.useRef();

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (firstNum * secondNum === Number(value)) {
      setResult(`${firstNum * secondNum} 정답`);
      setValue("");
      setFirstNum(Math.floor(Math.random() * 10));
      setSecondNum(Math.floor(Math.random() * 10));
      inputRef.current.focus();
    } else {
      setResult("오답");
      setValue("");
      inputRef.current.focus();
    }
  };
  return (
    <React.Fragment>
      <div>
        {firstNum} 곱하기 {secondNum}는?
      </div>
      <form onSubmit={onSubmit}>
        <input type="number" value={value} onChange={onChange} ref={inputRef} />
        <button>입력</button>
      </form>
      <div>{result}</div>
    </React.Fragment>
  );
};

module.exports = GuGuDan;
