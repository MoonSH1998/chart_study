
import React, {useRef, useEffect, useState} from "react";
import {select, scaleLinear, axisBottom, axisRight ,scaleBand, selectAll } from "d3";
import "./App.css";
import { svg } from "d3";

  function App1({ history }){
    const [data, setData] = useState([8, 30, 50, 70, 120, 200, 210]);
    const svgRef = useRef();
    
   useEffect(() => {
      const svg = select(svgRef.current);
      
      const xScale = scaleBand()
      .domain(data.map((value, index) => index))
      .range([0,600])
      .padding(0.5 );


    const yScale = scaleLinear()
     .domain([0,400])
     .range([400, 0]);

     const colorScale = scaleLinear()
     .domain([100,200,400])
     .range(["green","orange", "red"])
     .clamp(true);

     const xAxis = axisBottom(xScale).ticks(data.length);
     svg
      .select(".x-axis")
      .style("transform", "translateY(400px)")
      .call(xAxis);        //xaxis(svg,select("x-axis"))

     const yAxis = axisRight(yScale); 

     svg
     .select(".y-axis")
     .style("transform", "translateX(600px)")
     .call(yAxis);        //xaxis(svg,select("x-axis"))

     svg.selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("calss", "bar")
      .attr("fill", colorScale)
      .attr("y", -400)
      .style("transform" , "scale(1, -1)")
      .attr("x", (value, index) => xScale(index)) 
      .attr("width", xScale.bandwidth())
      .transition()
      .attr("height", value => 400 - yScale(value));
      

    }, [data]);
  
     
  return(
  <React.Fragment>
  <svg ref={svgRef}>
    <g className="x-axis" />
    <g className="y-axis" />
  </svg>
    <br />
    <br />
    <br />
    <button onClick={() => setData(data.map(value => value + 10))}>up - 5</button>
    <button onClick={() => setData(data.map(value => value - 10))}>down - 5</button>
  </React.Fragment>
  )
}

export default App1;