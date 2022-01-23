import React, { useEffect, useRef, useState } from "react";
import {
  select,
  scaleBand,
  axisBottom,
  stack,
  max,
  scaleLinear,
  axisLeft,
  stackOrderAscending
} from "d3";
import * as d3 from "d3";
import useResizeObserver from "./useResizeObserver";

function StackChart_TBA2({ data, keys, colors }) {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);

  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current);
    
    if(!dimensions) return;
    
    const { width, height } =
      dimensions || wrapperRef.current.getBoundingClientRect();

    // stacks / layers
    const stackGenerator = stack()
      .keys(keys)
      .order(stackOrderAscending);
    const layers = stackGenerator(data);
    const extent = [
      0,
      max(layers, layer => max(layer, sequence => sequence[1]/1000*1.1))
    ];


    // scales
    const xScale = scaleBand()
      .domain(data.map(d => d.year))
      .range([0, width])
      .paddingInner(0.5);

    const yScale = scaleLinear()
      .domain(extent)
      .range([height, 0]);

      svg.selectAll("line.y")
      .data(yScale.ticks(7))
      .enter().append("line")
      .attr("class", "y")
      .attr("x1", 0)
      .attr("x2", width)
      .attr("y1", yScale)
      .attr("y2", yScale)
      .style("stroke", "#ccc")
      .style("stroke-dasharray", "2, 2");
      
      svg.select(".y")
      .style("stroke-dasharray", "0");   //첫 라인 stroke 없애기.
     
    // rendering
    svg
      .selectAll(".layer")
      .data(layers)
      .join("g")
      .attr("class", "layer")
      .attr("fill", layer => colors[layer.key])
      .selectAll("rect")
      .data(layer => layer)
      .join("rect")
      .attr("x", sequence => xScale(sequence.data.year))
      .attr("width", xScale.bandwidth())
      .attr("y", sequence => yScale(sequence[1]/1000))
      .attr("height", sequence => yScale(sequence[0]/1000) - yScale(sequence[1]/1000))
      .on('mouseenter', (e,d)=>{
       
          const cn1 = d.data.먹거리.toString()
          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
          const cn2 = d.data.관광지.toString()
          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
          const cn3 = d.data.숙박.toString()
          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
       
        // const startX = document.getElementById('start__'); // 요소의 id 값이 target이라 가정
        // const clientRect = startX.getBoundingClientRect(); // DomRect 구하기 (각종 좌표값이 들어있는 객체)
        // const startXval = clientRect.left; // Viewport의 시작지점을 기준으로한 상대좌표 X 값.
        // const marginLeft_ = window.pageXOffset + startX.getBoundingClientRect().left;
        // const marginTop_ = window.pageYOffset + startX.getBoundingClientRect().top;
        // const ax = parseInt(xScale(d.data.year))-parseInt(marginLeft_)-(xScale.bandwidth()/2);
       // console.log(parseInt(xScale(d.data.year)))
        //const ay = 20
        //console.log(ay)
        //console.log(ay/1000)
        tooldiv
        .html(`<div style='text-align:left; height: 50px; '>
                  <div>
                      <span style='color: #3478ff;'>먹거리</span>: &nbsp; &nbsp;${cn1}회
                  </div>
                  <div>
                      <span style='color: #2ebfff;'>관광지</span>: &nbsp; &nbsp;${cn2}회
                  </div>
                  <div>
                      <span style='color: #c96bff;'>숙박</span>: &nbsp; &nbsp;${cn3}회
                  </div>
              </div> `)
        .style("opacity", 1)
        //.style('transform', `translate( ${ax}px , ${ay}px )` )
        .attr('x', (e.pageY-50)+'px')
        .attr('y', (e.pageY-50)+'px')
        .style('font-family', "NotoSansCJKkr-Regular, Noto Sans CJK KR")
        .style('font-size', '14px')
        .style('font-weight' ,'400')
        .style('width', `${width/5.6}px`)
        .style('height', `${width/7}px`)
        .style('border', '1px solid #D4D8DF')
        .style('border-radius', '5.5%')
        .style('vertical-align', 'middle')
        .style('justify-content', 'center')
      })
      .on('mouseleave', (e,d)=>{
        tooldiv		
              .style("opacity", 0);	
      })
     
        
    

   
    const tooldiv = d3.select('#test')
            .append('div')
            .attr('id', 'tba2')
            .style('opacity', '0')
            .style('position', 'absolute')
            .style('background-color', 'white')
            .style('overflow', 'visible')
     


    // axes
    const xAxis = axisBottom(xScale);
    svg
      .select(".x-axis")
      .style("opacity", "0.5")
      .attr("transform", `translate(0, ${height})`)
      .call(xAxis)
      .call(g => g.select(".domain").remove());

    const yAxis = axisLeft(yScale);
    svg.select(".y-axis")
       .call(yAxis)
       .call(g => g.select(".domain").remove())
       .call(g => g.selectAll(".tick line").remove());

       svg
      .selectAll(".y-axis")
      .selectAll("text")
      .style("opacity", "0.5")
      .text(function(d) {return d+"k"})
    
  }, [colors, data, dimensions, keys]);

  return (
    <React.Fragment>
      <div ref={wrapperRef} style={{ marginBottom: "2rem" }}>
      <div id='test'></div>
        <svg id='start__' ref={svgRef}>
          <g className="x-axis" />
          <g className="y-axis" />
        </svg>
      </div>
    </React.Fragment>
  );
}

export default StackChart_TBA2;