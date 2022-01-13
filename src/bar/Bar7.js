import React, { useRef, useEffect, useState } from "react";
import { select, axisBottom, axisRight, scaleLinear, scaleBand } from "d3";

function Bar7() {
  const [data, setData] = useState([25, 30, 45, 60, 20, 65, 75]);
  const svgRef = useRef();

  useEffect(() => {
    const svg = select(svgRef.current);

    // scale
    const xScale = scaleBand()
      .domain(data.map((value, index) => index))
      .range([0, 300])
      .padding(0.5);

    const yScale = scaleLinear().domain([0, 150]).range([150, 0]);

    // axis
    const xAxis = axisBottom(xScale).ticks(data.length);
    svg.select(".x-axis").style("transform", "translateY(150px)").call(xAxis);

    const yAxis = axisRight(yScale);
    svg.select(".y-axis").style("transform", "translateX(300px)").call(yAxis);

    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("class", "bar")
      .attr("x", (value, index) => xScale(index)) // index xScale 통해 스케일링한 값을 x좌표로
      .attr("y", yScale)
      .attr("width", xScale.bandwidth()) // xScale의 bandwidth만큼 width 설정
      .attr("height", (value, index) => 150 - yScale(value)); // svg 아래에 붙이기 위해서 svg viewBox 고려해 변경
      
  }, [data]);

  return (
    <div style={{ padding: "100px" } }>
      <svg ref={svgRef} style={ {backgroundColor: '#eee'},{ overflow: 'visible'} }>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    </div>
  );
}

export default Bar7;