import React from "react";

function App16(props) {
  return (
    <div>
      <MyCom address={"ny"} city={"seoul"} score={9.88} />
      <MyCom address={"ca"} city={"busan"} score={8.99} />
    </div>
  );
}

// MyCom 컴포넌트 작성
function MyCom(props) {
  return (
    <div>
      <h1>주소 : {props.address}</h1>
      <h1>도시 : {props.city}</h1>
      <h1>점수 : {props.score}</h1>
    </div>
  );
}

export default App16;
