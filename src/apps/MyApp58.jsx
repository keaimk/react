import React from "react";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";

function MyApp58(props) {
  return (
    <div>
      {/* /hello로 address는 "신촌", city는 "서울" get 요청 전송 */}
      <Button
        onClick={() => {
          axios.get("/hello", {
            params: {
              address: "신촌",
              city: "서울",
            },
          });
        }}
      >
        btn2
      </Button>
      <Button
        onClick={() => {
          axios.get("/hi", {
            params: {
              name: "son",
              age: 5,
            },
          });
        }}
      >
        btn1
      </Button>
    </div>
  );
}

export default MyApp58;
