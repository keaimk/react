import React from "react";
import c, { a, b, g as ga } from "./App13.jsx";
import f, { d, e, g as gb } from "./App14.jsx";

// 13, 14 에 있는 export된 값들을 import 해서

// li 요소 8개로 출력
function App15(props) {
  return (
    <div>
      <li>{c}</li>
      <li>{a}</li>
      <li>{b}</li>
      <li>{ga}</li>
      <li>{f}</li>
      <li>{d}</li>
      <li>{e}</li>
      <li>{gb}</li>
    </div>
  );
}

export default App15;
