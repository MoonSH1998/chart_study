import React, {useRef, useEffect, useState} from "react";
import {select, line, curveCardinal} from "d3";
import "./Circle2.css";


  function Circle2
(){
    
    const [data, setData] = useState([25, 30 , 35, 59, 80, 100]);
    const svgRef = useRef();
  
    useEffect(() => {
      const svg = select(svgRef.current);
      svg
      .selectAll("circle").data(data)
      .join("circle")
      .attr("r", value=>value)
      .attr("cx", value=>value*2)
      .attr("cy", value=>value*2)
      .attr("stroke", "red")
    }, [data]);
  
  return(
  <React.Fragment>
  <svg id="a6" ref={svgRef}></svg>
    <br />
    <button onClick={() => setData(data.map(value => value + 5))}>add 10 to data</button>
    <button onClick={() => setData(data.filter(value => value <= 65))}>filter</button>
  </React.Fragment>
  )
}

export default Circle2;