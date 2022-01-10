import React, {useRef, useEffect, useState} from "react";
import {select} from "d3";
import "./App.css";

function App5() {
  const svgRef = useRef();
  const [data, setData] = useState([5,20,25,30,40,60,80,100,150]);


useEffect(() => {
  const svg = select(svgRef.current);
  svg
    .selectAll("circle")
    .data(data)
    .join(

      (enter) => enter.append("circle"),
      (update) => update.attr("class", "updated"),
      (exit) => exit.remove()
    )

    .attr("r", (value) => value)
    .attr("cx", (value) => value * 2)
    .attr("cy", (value) => value * 2)
    .attr("stroke", "red");
}, [data]);

const increaseData = () => {
  setData(data.map((value) => value + 5));
};
const decreaseData = () => {
  setData(data.map((value) => value -5));
};

return (
  <React.Fragment>
    <svg ref={svgRef}>
      <circle />
    </svg>
    <br/>
    <br/>
    <button onClick={increaseData}>+5</button>
    <button onClick={decreaseData}>-5</button>
  </React.Fragment>
);
}

export default App5;
