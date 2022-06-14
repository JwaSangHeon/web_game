import React, { useState } from "react";
import styled from "styled-components";

const WaitingBox = styled.div`
  background-color: skyblue;
  width: 400px;
  height: 400px;
  text-align: center;
  margin: 0 auto;
`;

const ReactionRate = () => {
  const [state, setState] = useState("wating");
  const [result, setResult] = useState(0);
  const onClick = () => {
    setState("ready");
  };
  return (
    <>
      <WaitingBox onClick={onClick}>클릭해주세요</WaitingBox>
      <div>평균속도 {result}ms</div>
    </>
  );
};

export default ReactionRate;
