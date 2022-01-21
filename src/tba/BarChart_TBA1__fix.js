import React, { useRef, useEffect, useState } from "react";
import { select, axisBottom, axisLeft, max, scaleLinear, scaleBand, line, least, scaleDiverging, path, tickFormat, text } from "d3";
import useResizeObserver from "./useResizeObserver";
import { Colors } from "./color.type.ts";
import * as d3 from "d3";

//해야할 일 : tooltip 이쁘게 만들기
// 사각형 이쁘게 만들기
// 높이에 따른 색상 다시 조정
// yaxis  바꾸기

const region = (["서울", "경기", "인천", "대구", "부산", "경남", "경북", "충남", "충북", "전남", "전북", "광주", "울산", "세종", "제주"]);
  
function BarChart_TBA1({data}) {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);

  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current); 

    if(!dimensions) return;

    const { width, height } =
      dimensions || wrapperRef.current.getBoundingClientRect();

      const extend = [
        0, 
        max(data, index => max(data)*1.1)
      ]
      // scales
    const xScale = scaleBand()      //끝 둥글게 하기
      .domain(data.map((value, index) => region[index] ))
      .range([0, width]) 
      .paddingInner(0.5);     
    
      
    const yScale = scaleLinear()
      //.domain([0,d3.max(data.map(function(d){return d.data}))])   
      .domain(extend)                      //데이터 크기에 맞춰 최대값 설정
      .range([height, 0]);   

    
      svg.selectAll("line.y")
        .data(yScale.ticks(7))
        .enter().append("line")
        .attr("class", "y")
        .attr("x2", width)
        .attr("y1", yScale)
        .attr("y2", yScale)
        .style("stroke", "#ccc")
        .style("stroke-dasharray", "5, 5");
      
      svg.select(".y")
        .style("stroke-dasharray", "0");   //첫 라인 stroke 없애기.
    
      // create x-axis
      const xAxis = axisBottom(xScale).ticks(data.length);
    
       svg.select(".x-axis") 
        .style("transform", `translateY(${height}px)`)
        .style("opacity", "0.5")
        .call(xAxis)
        .call(g => g.select(".domain").remove())
        //.call(g => g.selectAll(".tick line").remove());

        // create y-axis
       const yAxis = axisLeft(yScale);
    
       svg
        .select(".y-axis")
        .call(yAxis)       
        .call(g => g.select(".domain").remove())
        .call(g => g.selectAll(".tick line").remove());
      
      
      svg
      .selectAll(".y-axis")
      .selectAll("text")
      .style("opacity", "0.5")
      .text(function(d) {return d/1000+"k"})
      
     
      svg
     .selectAll(".x-axis .tick line")
     .style("opacity", "0.5")
      //.text("k")
    // draw the bars
    const a = svg.append('linearGradient')
              .attr('x1', '0.5')
              .attr('x2', '0.5')
              .attr('y1', '0')
              .attr('y2', '1')
              .attr("gradientUnits", "objectBoundingBox")
              .attr('id', 'a');

      a.append('stop')
      .attr('offset', '0')
      .attr('stop-color', '#af21e1');

      a.append('stop')
      .attr('offset', '1')
      .attr('stop-color', '#6539fb');



      
    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("class", "bar")
      .style("transform", "scale(1, -1)")
      .attr("x", (value, index) => xScale(region[index]))
      .attr("y", -dimensions.height)
      .attr("rx", 4)
      .attr("width", xScale.bandwidth())
      .on("mouseenter", (event, value) =>  {
        // events have changed in d3 v6:
        // https://observablehq.com/@d3/d3v6-migration-guide#events
        const index = svg.selectAll(".bar").nodes().indexOf(event.target);

        svg
          .selectAll(".tooltip")
          .data( [value] )
          .join((enter) => enter.append("text").attr("y", yScale(value) - 4))
          .attr("class", "tooltip")
          .style('visibility','visible')
          .text(region[index] + ": " + value + "명")
          .attr("x", xScale(region[index]) + xScale.bandwidth() / 2)
          .attr("text-anchor", "middle")
          .transition()
          .attr("y", yScale(value) - 8)
          .attr("opacity", 1)
        })
        .on("mouseleave", () => svg.select(".tooltip").remove())
        .transition()
        .attr('fill', 'url(#a)')
        .attr("height", (value) => dimensions.height - yScale(value));
      
      
   /*
        const tooltip = d3.select('#tooltip')
    
     d3.selectAll('rect')
        .on('mouseenter', onMouseEnter)
        .on('mouseleave', onMouseLeave)

        function onMouseEnter(event, value){
          
        const index = svg.selectAll(".bar").nodes().indexOf(event.target);
          //const [x, y] = d3.pointer(event)

          tooltip.select('#count')
            .text(region[index] + ": " + value*1000 + "명")
            .attr("y", yScale(value) - 4)
            .attr("x", xScale(region[index]) + xScale.bandwidth() / 2)
            .attr("text-anchor", "middle")
            .transition()
            .attr("y", yScale(value) - 8)
            .attr("opacity", 1)
            .attr('position', 'absoulute')
             
        }

        function onMouseLeave(event, value){
          tooltip.style('opacity', '0');
        }
        */


  }, [data, dimensions]);

  return (


    <React.Fragment>
     
     <div ref={wrapperRef} style={{marginBottom: "2rem"}}>
        <svg ref={svgRef}>
          <g className="x-axis" />
          <g className="y-axis" />
        </svg>
      </div>
        
      
    </React.Fragment>
  );
} 

export default BarChart_TBA1;