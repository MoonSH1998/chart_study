import React, { useRef, useEffect, useState } from "react";
import { select, axisBottom, axisRight, scaleLinear, scaleBand, line, least, scaleDiverging, path } from "d3";
import ResizeObserver from 'resize-observer-polyfill'; //have to install to npm
import { axisLeft } from "d3";
import { isVisible } from "@testing-library/user-event/dist/utils";


const region = (["서울", "경기", "인천", "대구", "부산", "경남", "경북", "충남", "충북", "전남", "전북", "광주", "울산", "세종", "제주"]);
  
const useResizeObserver = ref => {
  const [dimensions, setDimansions] = useState(null);
  useEffect(() => {
    const observeTarget = ref.current;
    const resizeObserver = new ResizeObserver(entries => {
      entries.forEach(entry => {
        setDimansions(entry.contentRect)
      })
   });
   resizeObserver.observe(observeTarget);
   return () => {
     resizeObserver.unobserve(observeTarget);
   };
  }, [ref]); 
  return dimensions;
}
 
function BarChart_TBA1({data}) {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);

  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current); 
    console.log(dimensions);

    if(!dimensions) return;
    // scales
    const xScale = scaleBand()      //끝 둥글게 하기
      .domain(data.map((value, index) => region[index] ))
      .range([0, dimensions.width]) 
      .padding(0.45);     
    
    
    const yScale = scaleLinear()
      .domain([0, dimensions.height])   
      .range([dimensions.height, 0]);   

    const colorScale = scaleLinear()
      .domain([0, dimensions.height])   //각 데이터 크기에 맞게 설정하는 법
      .range(["#7932f3", "#8a58ff"])
      .clamp(true);

      
      svg.selectAll("line.y")
      .data(yScale.ticks(6))
      .enter().append("line")
      .attr("class", "y")
      .attr("x1", 0)
      .attr("x2", dimensions.width)
      .attr("y1", yScale)
      .attr("y2", yScale)
      .style("stroke", "#ccc");

          
    // create x-axis
    const xAxis = axisBottom(xScale).ticks(data.length);
    svg.select(".x-axis") 
      .style("transform", `translateY(${dimensions.height}px)`)
      .call(xAxis); 

    // create y-axis
    const yAxis = axisLeft(yScale);      
    svg
      .select(".y-axis")
      .call(yAxis);

    // draw the bars
    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("class", "bar")
      .style("transform", "scale(1, -1)")
      .attr("x", (value, index) => xScale(region[index]))
      .attr("y", -dimensions.height)
      .attr("width", xScale.bandwidth())
      .on("mouseenter", (event, value) => {
        // events have changed in d3 v6:
        // https://observablehq.com/@d3/d3v6-migration-guide#events
        const index = svg.selectAll(".bar").nodes().indexOf(event.target);
        
        svg
          .selectAll(".tooltip")
          .data( [value] )
          .join((enter) => enter.append("text").attr("y", yScale(value) - 4))
          .attr("class", "tooltip")
          .text(region[index] + ": " + value + "명")
          .attr("x", xScale(region[index]) + xScale.bandwidth() / 2)
          .attr("text-anchor", "middle")
          .transition()
          .attr("y", yScale(value) - 8)
          .attr("opacity", 1);
      })
      .on("mouseleave", () => svg.select(".tooltip").remove())
      .transition()
      .attr("fill", colorScale)
      .attr("height", (value) => dimensions.height - yScale(value));
  }, [data, dimensions]);

  return (
    <React.Fragment>
     
      
     <div id="bar5_div" ref={wrapperRef} style={{marginBottom: "2rem"}}>
        <svg id="bar5_svg" ref={svgRef}>
          <g className="x-axis" />
          <g className="y-axis" />
        </svg>
      </div>
        
      
    </React.Fragment>
  );
} 

export default BarChart_TBA1;