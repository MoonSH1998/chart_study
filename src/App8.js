import React, {useRef, useEffect, useState} from "react";
import {select, line, curveCardinal, axisBottom, axisRight ,scaleLinear, selectAll } from "d3";
import "./App8.css";
import { svg } from "d3";

  function App8(){
    const [data, setData] = useState([0, 30, 50, 70, 120, 200, 210, 180, 290, 101, 200, 390]);
    const svgRef = useRef();
    
   useEffect(() => {
      const svg = select(svgRef.current);
      const xScale = scaleLinear()
      .domain([0,data.length -1])
      .range([0,600]);

    const yScale = scaleLinear()
     .domain([0,400])
     .range([400, 0]);

     const xAxis = axisBottom(xScale)
      .ticks(data.length)
      .tickFormat(index => index +1);
     svg
      .select(".x-axis")
      .style("transform", "translateY(400px)")
      .call(xAxis);        //xaxis(svg,select("x-axis"))

     const yAxis = axisRight(yScale); 

     svg
     .select(".y-axis")
     .style("transform", "translateX(600px)")
     .call(yAxis);        //xaxis(svg,select("x-axis"))

    const myLine = line()
      .x((value, index) => xScale(index))
      .y(yScale)
      .curve(curveCardinal);

      svg
      .selectAll(".line")
      .data([data])
      .join("path")
      .attr("class", "line")
      .attr("d", myLine)
      .attr("fill", "none")
      .attr("stroke", "blue"); 
    }, [data]);
  
     
  return(
  <React.Fragment>
  <svg id="a8" ref={svgRef}>
    <g className="x-axis" />
    <g className="y-axis" />
  </svg>
    <br />
    <br />
    <br />
    <button onClick={() => setData(data.map(value => value + 5))}>up - 5</button>
    <button onClick={() => setData(data.map(value => value - 5))}>down - 5</button>
    <button onClick={() => setData(data.filter(value => 400-value > 200))}>remove fillter for 200 up</button>
  </React.Fragment>
  )
}

export default App8;