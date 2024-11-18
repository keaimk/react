import React from "react";
import axios from "axios";
import { Button } from "@chakra-ui/react";

function MyApp80(props) {
  return (
    <div>
      <Button
        onClick={() => {
          axios.get("/api/main9/sub1");
        }}
      >
        jwt 얻기
      </Button>
    </div>
  );
}

export default MyApp80;
