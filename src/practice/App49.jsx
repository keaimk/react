import React, { createContext, useContext, useState } from "react";
import { Button } from "../components/ui/button.jsx";
import { Box } from "@chakra-ui/react";

const CountContext = createContext("");
function App49(props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Button onClick={() => setCount(count + 1)}>count {count}</Button>
      <Child1 count={count} />
    </div>
  );
}

function Child1() {
  const count = useContext(CountContext);
  return <Child2 />;
}

function Child2({ count }) {
  return <Box>{count}</Box>;
}

export default App49;
