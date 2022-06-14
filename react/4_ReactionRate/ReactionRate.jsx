import React, { useState, useRef } from "react";
import styled from "styled-components";

const WaitingBox = styled.div`
  width: 400px;
  height: 400px;
  text-align: center;
`;

const ReactionRate = () => {
  const [state, setState] = useState("wait");
  const [message, setMessage] = useState("클릭하고 준비하세요");
  const [result, setResult] = useState([]);

  const timeout = useRef(null);
  const startTime = useRef();
  const endTime = useRef();

  const onClick = () => {
    if (state === "wait") {
      setState("ready");
      setMessage("파란색이 되면 클릭하세요");
      timeout.current = setTimeout(() => {
        setMessage("클릭하세요!");
        setState("now");
        startTime.current = new Date();
      }, Math.floor(Math.random() * 1000) + 2000);
    } else if (state === "ready") {
      clearTimeout(timeout.current);
      setMessage("너무 빠릅니다!");
      setState("wait");
    } else if (state === "now") {
      endTime.current = new Date();
      setState("wait");
      setMessage("클릭하고 준비하세요");
      setResult((prev) => [...prev, endTime.current - startTime.current]);
    }
  };

  const onReset = () => {
    setResult([]);
  };
  return (
    <>
      <WaitingBox className={state} onClick={onClick}>
        {message}
      </WaitingBox>
      {result.length === 0 ? null : (
        <>
          <div>
            평균 반응속도 :
            {result.reduce((pre, cur) => pre + cur) / result.length}ms
          </div>
          <button onClick={onReset}>리셋</button>
        </>
      )}
    </>
  );
};

export default ReactionRate;
