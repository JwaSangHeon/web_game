import React, { useState, useEffect } from "react";

const getNumber = () => {
  const numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let newarray = [];
  for (let i = 0; i < 4; i++) {
    const index = Math.floor(Math.random() * numberList.length);
    newarray.push(numberList.splice(index, 1));
  }
  return newarray.join("");
};

const NumberBaseball = () => {
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);

  const [number, setNumber] = useState(getNumber); //숫자 4개 이후에 바뀌는것 구현

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (results.length < 10) {
      let strike = 0;
      let ball = 0;
      let answer = "";
      for (let i = 0; i < 4; i++) {
        if (number[i] === value[i]) {
          strike++;
        } else if (number.includes(value[i])) {
          ball++;
        }
      }
      if (strike === 4) {
        answer = `${value} -> 정답!`;
        setResults((prev) => [...prev, answer]);
        setValue("");
        alert(`${number}정답입니다! 게임을 다시 시작합니다.`);
        setNumber(getNumber());
        setResults([]);
      } else {
        answer = `${value} -> ${strike}스트라이크, ${ball}볼`;
        setResults((prev) => [...prev, answer]);
        setValue("");
      }
    } else {
      alert(`10번을 초과했습니다. 정답은${number}`);
      setValue("");
      setNumber(getNumber());
      setResults([]);
    }
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
