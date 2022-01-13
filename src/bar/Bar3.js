import React, { useState } from "react";
import "./Bar3.css";
import BarChart from "./BarChart";
//1134
function Bar3() {
  const [data, setData] = useState([22, 30, 45, 60, 10, 65, 75]);
  
  return (
    <React.Fragment>
      <div id='bar3_div'>
      <BarChart data={data} />
      <button className="b3" onClick={() => setData(data.map((value) => value + 5))}>
        Update data
      </button>
      <button className="b3" onClick={() => setData(data.filter((value) => value < 35))}>
        Filter data
      </button>
      <button className="b3"
        onClick={() => setData([...data, Math.round(Math.random() * 100)])}
      >
        Add data
      </button>
      </div>
    </React.Fragment>
  );
}

export default Bar3;