import React, { useState, useEffect } from "react";

const NumberBaseball = () => {
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);
  const [strike, setStrike] = useState(0);
  const [ball, setBall] = useState(0);
  const [start, setStart] = useState(false);

  const number = "8213"; //숫자 4개 이후에 바뀌는것 구현

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const printResult = () => {};
  useEffect(() => {
    printResult();
  }, [strike, ball]);

  const onSubmit = (e) => {
    e.preventDefault();
    let strikeCount = 0;
    let ballCount = 0;
    for (let i = 0; i < 4; i++) {
      if (number[i] === value[i]) {
        strikeCount++;
      } else if (number.includes(value[i])) {
        ballCount++;
      }
    }
    setStrike(strikeCount);
    setBall(ballCount);
  };

  return (
    <div>
      <h2>4자리 숫자를 입력해주세요</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={value}
          onChange={onChange}
          maxLength={4}
          minLength={4}
        />
        <button>입력</button>
      </form>
      <div>시도횟수 : {results.length}</div>
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
};

export default NumberBaseball;
