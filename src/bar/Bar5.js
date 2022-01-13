import React, { useState } from "react";
import "./Bar5.css";
import BarChart1 from "./BarChart1";
//1134
function Bar5() {
  const [data, setData] = useState([22, 30, 45, 60, 10, 65, 75, 90]);
  
  return (
    <React.Fragment>
      <BarChart1 data={data} />
      <div id="bar5_button_div">
      <button className="bar5_button" onClick={() => setData(data.map((value) => value + 5))}>
        Update data
      </button>
      <button className="bar5_button" onClick={() => setData(data.filter((value) => value < 35))}>
        Filter data
      </button>
      <button className="bar5_button"
        onClick={() => setData([...data, Math.round(Math.random() * 100)])}
      >
        Add data
      </button>
      </div>
    </React.Fragment>
  );
}

export default Bar5;