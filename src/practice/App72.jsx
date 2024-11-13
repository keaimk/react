import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import { Button } from "../components/ui/button.jsx";

//  /
// /add
// /view

const router = createBrowserRouter([
  {
    path: "/",
    element: <WholePage />,
    children: [
      { index: true, element: <div>HOME PAGE</div> },
      { path: "add", element: <div>ADD PAGE</div> },
      { path: "view", element: <div>VIEW PAGE</div> },
    ],
  },
]);

function WholePage() {
  const navigate = useNavigate();
  return (
    <Box>
      <Box>
        <Flex gap={5}>
          <Box>
            <Button onClick={() => navigate("/")}>HOME</Button>
          </Box>
          <Box>
            <Button onClick={() => navigate("/add")}>add</Button>
          </Box>
          <Box>
            <Button onClick={() => navigate("/view")}>view</Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

function App72(props) {
  return <RouterProvider router={router} />;
}

export default App72;
