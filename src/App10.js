import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import "./App10.css";

function App10(){
  
  const [data] = useState([
    {property : 'a', value : 4 },
    {property : 'b', value : 3 },
    {property : 'c', value : 10 },
    {property : 'd', value : 2 },
    {property : 'e', value : 8 }
  ]);
  
  const svgRef = useRef();

  useEffect(() => {
     // setting up svg container
    const w = 500;
    const h = 500;
    const radius = w/2; 
    const svg = d3.select(svgRef.current)
      .attr('width', w)
      .attr('heignt', h)
      .style('overflow', 'visible')
      .style('margin-top', '400px')
      .style('margin-left', '500px'); 
      // setting up chart
    const formattedData = d3.pie().value(d => d.value)(data);
    const arcGenerator = d3.arc().innerRadius(0).outerRadius(radius);
    const color = d3.scaleOrdinal().range(d3.schemeSet2);
    
    //setting up svg data
    svg.selectAll()
      .data(formattedData)
      .join('path')
        .attr('d', arcGenerator)
        .attr('fill', d=> color(d.value))
        .style('opacity', 0.6);
    
    // setting up annotation
    svg.selectAll()
      .data(formattedData)
      .join('text')
        .text(d => d.data.property)
        .attr('tarnsform', d => `translate(${arcGenerator.centroid(d)})`)
        .style('text-anchor', 'middle');
  }, [data]);
  
  return (
    <div className="App">
      <svg id="a10" ref={svgRef}></svg>
    </div>
  );
}

export default App10;