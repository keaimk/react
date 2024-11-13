import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// /path3으로 이동했을 때 어떤 컴포넌트 출력
// /path4으로 이동했을 때 어떤 컴포넌트 출력
// /path1/sub1으로 이동했을 때 어떤 컴포넌트 출력
// /path1/sub2으로 이동했을 때 어떤 컴포넌트 출력

//  /path3
//  /path3/sub1
//  /path3/sub2
const router = createBrowserRouter([
  { path: "/", element: <div>여기는 홈 페이지</div> },
  {
    path: "/path1",
    element: (
      <div>
        여기는 1번 경로 <hr />
        <Outlet />
      </div>
    ),
    children: [
      { index: true, element: <div>여기는 경로1의 홈페이지</div> },
      {
        path: "sub1",
        element: <div>여기는 경로1/서브1</div>,
      },
      { path: "sub2", element: <div>여기는 경로1/서브2</div> },
    ],
  },
  {
    path: "/path2",
    element: <div>여기는 2번 경로</div>,
  },
  {
    path: "/path3",
    element: <div>여기는 3번 경로</div>,
  },
  {
    path: "/path4",
    element: <div>여기는 4번 경로</div>,
  },
]);

function MyApp71(props) {
  return <RouterProvider router={router} />;
}

export default MyApp71;
