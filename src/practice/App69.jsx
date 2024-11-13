import React, { useState } from "react";
import axios from "axios";

function App69(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [attached, setAttached] = useState();

  const handleClick = () => {
    axios.postForm("/api/main8/sub2", {
      name: name,
      age: age,
      attached: attached,
    });
  };

  return (
    <div>
      <input
        placeholder={"이름"}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        placeholder={"나이"}
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <br />
      <input type="file" onChange={(e) => setAttached(e.target.files[0])} />
      <br />
      <button onClick={handleClick}>전송</button>
    </div>
  );
}

export default App69;
