// import React, { useState } from "react";
// import { Input } from "@chakra-ui/react";
//
// function App37(props) {
//   const [inputValue, setInputValue] = useState(""); // 입력 값을 상태로 관리
//
//   // 입력 값이 변경될 때마다 상태를 업데이트
//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };
//
//   return (
//     <div>
//       <Input value={inputValue} onChange={handleInputChange} />{" "}
//       {/* Input에서 글 입력 시 handleInputChange 실행 */}
//       <p>{inputValue}</p> {/* 입력한 내용이 <p> 태그에 표시 */}
//     </div>
//   );
// }

export default App37;

import React, {useState} from "react";
import {Input} from "@chakra-ui/react";

function App37(props) {
  const [text, setText] = useState("");

  return (
    <div>
      <Input onKeyUp={(e) => setText(e.target.value)} />
      <p>{text}</p>
    </div>
  );
}

export default App37;