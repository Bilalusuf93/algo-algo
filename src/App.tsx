import React from "react";
import { merge2 } from "./Algos/MergeSortedArray";

function App() {
  React.useEffect(() => {
    merge2([0], 0, [1], 1);
    // merge2([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
  });

  return <div className="App"></div>;
}

export default App;
