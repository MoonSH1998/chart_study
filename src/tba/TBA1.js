import React, { useState } from "react";
import "./TBA1.css";
import BarChart_TBA1 from "./BarChart_TBA1";
//1134
function TBA1() {
  const [data, setData] = useState([22, 30, 45, 60, 10, 65, 75, 90]);
  
  return (
    <React.Fragment>
      <BarChart_TBA1 data={data} />
     
    </React.Fragment>
  );
}

export default TBA1;