import React, { useRef, useEffect, useState } from "react";
import { select, axisBottom, axisRight, scaleLinear, scaleBand } from "d3";
import ResizeObserver from 'resize-observer-polyfill'; //have to install to npm

//아직 못한 부분
//1. tooltip꾸미기
//2. 그라데이션

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
 
function BarChart1({data}) {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);

  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current);
    console.log(dimensions);

    if(!dimensions) return;
    // scales
    const xScale = scaleBand()
      .domain(data.map((value, index) => index ))
      .range([0, dimensions.width]) //change
      .padding(0.7);    

    const yScale = scaleLinear()
      .domain([0, dimensions.height])   //todo 
      .range([dimensions.height, 0]);   //change

    const colorScale = scaleLinear()
      .domain([15, 100, 150])
      .range(["green", "orange", "red"])
      .clamp(true);

    // create x-axis
    const xAxis = axisBottom(xScale).ticks(data.length);
    svg.select(".x-axis") 
      .style("transform", `translateY(${dimensions.height}px)`)
      .call(xAxis);

    // create y-axis
    const yAxis = axisRight(yScale);
    svg
      .select(".y-axis")
      .style("transform", `translateX(${dimensions.width}px)`)
      .call(yAxis);

    // draw the bars
    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("class", "bar")
      .style("transform", "scale(1, -1)")
      .attr("x", (value, index) => xScale(index))
      .attr("y", -dimensions.height)
      .attr("width", xScale.bandwidth())
      .on("mouseenter", (event, value) => {
        // events have changed in d3 v6:
        // https://observablehq.com/@d3/d3v6-migration-guide#events
        const index = svg.selectAll(".bar").nodes().indexOf(event.target);
        svg
          .selectAll(".tooltip")
          .data([value])
          .join((enter) => enter.append("text").attr("y", yScale(value) - 4))
          .attr("class", "tooltip")
          .text(value)
          .attr("x", xScale(index) + xScale.bandwidth() / 2)
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

export default BarChart1;