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
      // .on("mouseenter", (event, value) =>  {
      //   // events have changed in d3 v6:
      //   // https://observablehq.com/@d3/d3v6-migration-guide#events
      //   const index = svg.selectAll(".bar").nodes().indexOf(event.target);

      //   svg
      //     .selectAll(".tooltip")
      //     .data( [value] )
      //     .join((enter) => enter.append("text").attr("y", yScale(value) - 4))
      //     .attr("class", "tooltip")
      //     .style('visibility','visible')
      //     //.text(region[index] + ": " + value + "명")
      //     .append('tspan')
      //     .text(region[index])
      //     .append('tspan')
      //     .text(": " + value + "명")
      //     .attr("x", xScale(region[index]) + xScale.bandwidth() / 2)
      //     .attr("text-anchor", "middle")
      //     .transition()
      //     .attr("y", yScale(value) - 8)
      //     .attr("opacity", 1)
      //   })
        .on('mouseenter', (e,d)=>{
          const cn1 = d.toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
          const index = svg.selectAll(".bar").nodes().indexOf(e.target);
          
          const startX = document.getElementById('start__'); // 요소의 id 값이 target이라 가정
      
           const clientRect = startX.getBoundingClientRect(); // DomRect 구하기 (각종 좌표값이 들어있는 객체)
           const startXval = clientRect.left; // Viewport의 시작지점을 기준으로한 상대좌표 X 값.
          
          const marginLeft_ = window.pageXOffset + startX.getBoundingClientRect().left;
          const marginTop_ = window.pageYOffset + startX.getBoundingClientRect().top;
          //console.log(marginLeft_)
          const ax = parseInt(xScale(region[index]))-parseInt(marginLeft_)-(xScale.bandwidth()/2);
          console.log(yScale(d))
          const ay = -80+yScale(d)
          //console.log(parseInt(ax))
          
          tooldiv
          .html(`<div style='margin-top: 10%'>${region[index]}:<span id='tba1' style='color:#7932F3 ; font-weight:bolder ;'>${cn1}</span>명</div>`)
          .style("opacity", 1)
          .style('transform', `translate( ${ax}px , ${ay}px )` )
           .style('font-family', "NotoSansCJKkr-Regular, Noto Sans CJK KR")
              .style('font-size', '14px')
              .style('font-weight' ,'500')
              .style('width', `${width/5.6}px`)
              .style('height', `${width/15}px`)
              .style('border', '1px solid #D4D8DF')
              .style('border-radius', '5.5%')
              .style('vertical-align', 'middle')
              .style('justify-content', 'center')
          
        })
        // .on('mousemove', (e,d)=>{
        //   const index = svg.selectAll(".bar").nodes().indexOf(e.target);
        //   tooldiv
        //   .style('top', (e.pageY-50)+'px')
        //   .style('left', (e.pageX-50)+'px')
        //      //.style('position', (`xScale(region[index]) + xScale.bandwidth() / 2, (yScale(d.value)-4)`))
        // })
        .on('mouseleave', (e,d)=>{
          tooldiv		
                .style("opacity", 0);	
        })
      .transition()
      .attr('fill', 'url(#a)')
      .attr("height", (value) => dimensions.height - yScale(value))
      
      

     
      const tooldiv = d3.select('#test')
              .append('div')
              .attr('id', 'tba2')
              .style('opacity', '0')
              .style('position', 'fixed')
              .style('background-color', 'white')
              .style('overflow', 'visible')
              //.style('font-family', "NotoSansCJKkr-Regular, Noto Sans CJK KR")
              //.style('font-size', '14px')
              //.style('font-weight' ,'500')
              //.style('width', `${width/5.6}px`)
              //.style('height', `${width/15}px`)
              //.style('border', '1px solid #D4D8DF')
              //.style('border-radius', '5.5%')
              //.style('vertical-align', 'middle')
              //.style('justify-content', 'center')
              
             // fill="#6c738a" font-size="14" font-family="NotoSansCJKkr-Regular, Noto Sans CJK KR"
     
           


  }, [data, dimensions]);

  return (


    <React.Fragment>
     
     <div   ref={wrapperRef} style={{marginBottom: "2rem"}}>
       <div id='test'></div>
        <svg id='start__' ref={svgRef}>
          <g className="x-axis" />
          <g className="y-axis" />
        </svg>
      </div>
        
      
    </React.Fragment>
  );
} 

export default BarChart_TBA1;