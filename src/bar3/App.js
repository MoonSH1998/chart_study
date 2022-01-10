import React, { useState } from "react";
import "./App.css";
import BarChart from "./BarChart";
//1134
function App3() {
  const [data, setData] = useState([22, 30, 45, 60, 10, 65, 75]);
  
  return (
    <React.Fragment>
      <BarChart data={data} />
      <button onClick={() => setData(data.map((value) => value + 5))}>
        Update data
      </button>
      <button onClick={() => setData(data.filter((value) => value < 35))}>
        Filter data
      </button>
      <button
        onClick={() => setData([...data, Math.round(Math.random() * 100)])}
      >
        Add data
      </button>
    </React.Fragment>
  );
}

export default App3;