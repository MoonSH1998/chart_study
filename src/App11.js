import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";

  const data = [
    {property : 'a', value : 4 },
    {property : 'b', value : 3 },
    {property : 'c', value : 100 },
    {property : 'd', value : 2 },
    {property : 'e', value : 8 }
  ];
  
  const App11 = () => {
    const pieChart = useRef()

    useEffect(() => {
      
      const pieData = d3.pie().value(d => d.value)(data)
      
      const arc = d3.arc().innerRadius(0).outerRadius(200)

      const colors = d3.scaleOrdinal(['red', 'blue', 'black', 'yellow', 'green'])
      
      const svg = d3.select(pieChart.current)
                        .attr('width', 600)
                        .attr('height', 600)
                        .style('background-color', 'tomatos')
                        .append('g')
                          .attr('transform', 'translate(300,300)')


        const tooldiv = d3.select('#chartArea')
          .append('div')
          .style('visibilty', 'hidden')
          .style('position', 'absolute')
          .style('background-color', 'red') 
          .style('color', 'white')
          .style('font-size', '40px')
          .style('padding', '10px')
          


        svg.append('g')
          .selectAll('path')
          .data(pieData)
          .join('path')
            .attr('d', arc)
            .attr('fill', (d,i)=>colors(i))
            .attr('stroke', 'white')
            .on('mouseover', (e,d)=>{
              tooldiv.style('visibility','visible')
                    .text(`${d.data.property}:` + `${d.data.value}`) 
              })
              .on('mousemove', (e,d)=>{
                tooldiv.style('top', (e.pageY-50) + 'px')
                .style('left', (e.pageX-50) + 'px')
              })
              .on('mouseout', ()=>{
                tooldiv.style('visibility', 'hidden')
              })
              
      

       
    })
    
   
  return (
    <div id='chartArea'>
      <svg ref={pieChart}></svg>
    </div>
  );
}

export default App11;