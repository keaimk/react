import React from "react";
import zxc, { a, b, f as fa } from "./MyApp13.jsx";
import { d, e, f as fb } from "./MyApp15.jsx";

function MyApp14(props) {
  return (
    <div>
      <h1>my app14</h1>
      <h1>{a}</h1>
      <h1>{b}</h1>
      <h1>{zxc}</h1>
      <h1>{d}</h1>
      <h1>{e}</h1>
      <h1>
        {fa}, {fb}
      </h1>
    </div>
  );
}

export default MyApp14;
