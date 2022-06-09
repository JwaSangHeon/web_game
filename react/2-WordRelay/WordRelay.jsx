const React = require("react");
const { useState, useRef } = React;
const WordRelay = () => {
  const [question, setQuestion] = useState("수박ㅏ");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputRef = useRef();

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (question[question.length - 1] === value[0]) {
      setQuestion(value);
      setValue("");
      setResult("딩동댕");
      inputRef.current.focus();
    } else {
      setValue("");
      setResult("틀렸습니다");
      inputRef.current.focus();
    }
  };

  return (
    <>
      <div id="question">{question}</div>
      <form onSubmit={onSubmit}>
        <input type="text" value={value} onChange={onChange} ref={inputRef} />
        <button>입력</button>
      </form>
      <div id="result">{result}</div>
    </>
  );
};

module.exports = WordRelay;
