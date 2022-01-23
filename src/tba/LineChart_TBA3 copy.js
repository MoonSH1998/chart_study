import * as d3 from "d3";
import React, { useRef, useEffect, useState } from "react";
import { area, select, axisBottom, axisLeft, max, scaleLinear,  scaleBand, curveLinear, least, scaleDiverging, path, tickFormat, text } from "d3";
import useResizeObserver from "./useResizeObserver";
import { Colors } from "./color.type.ts"

function LineChart_TBA3({data}) {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);
  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current); 

    if(!dimensions) return;

    const { width, height } =
      dimensions || wrapperRef.current.getBoundingClientRect();

     let max1 =max((data.map(d => d.uv * 1.1)));
     let max2 = max((data.map(d => d.pv * 1.1)));
     const maxx = max1>max2 ? max1  : max2 ;
     const extend = [ 0, maxx ]
      // scales

    const xScale = scaleBand()      //끝 둥글게 하기
      .domain(data.map(d => d.name ))
      .range([0, width])
      .paddingInner(100);     
    
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
        .text(function(d) {return (d/1000) +"k"})
      
     svg
      .selectAll(".x-axis .tick line")
      .style("opacity", "0.5")
  
     const generateScaledLine1 = d3.line()
          .curve(d3.curveMonotoneX)
          .x(function(d) { return xScale(d.name); })	
          .y(function(d) { return yScale(d.uv); });

    const generateScaledLine2 = d3.line()
          .curve(d3.curveMonotoneX)
          .x(function(d) { return xScale(d.name); })	
          .y(function(d) { return yScale(d.pv); });


    svg.selectAll('.line') 
        .data([data])
        .join('path')
        .attr('d', d => generateScaledLine1(d))
        .attr('fill', 'none')
        .attr('stroke-width', '2')
        .attr('stroke', '#7932F3');

    svg.selectAll('.line') 
        .data([data])
        .join('path')
        .attr('d', d => generateScaledLine2(d))
        .attr('fill', 'none')
        .attr('stroke-width', '2')
        .attr('stroke', '#9DA9BE');


    const a = svg.append('linearGradient')
              .attr('x1', '0')
              .attr('x2', '0')
              .attr('y1', '0')
              .attr('y2', '1')
              .attr('id', 'a');

    a.append('stop')
              .attr('offset', '5%')
              .attr('stop-color', '#7932F3')
              .attr('stop-opacity', '0.5');

    a.append('stop')
              .attr('offset', '95%')
              .attr('stop-color', '{Colors.white}')
              .attr('stop-opacity', '0.01');
      
    const b = svg.append('linearGradient')
              .attr('x1', '0')
              .attr('x2', '0')
              .attr('y1', '0')
              .attr('y2', '1')
              .attr('id', 'b');

    b.append('stop')
              .attr('offset', '5%')
              .attr('stop-color', '#9DA9BE')
              .attr('stop-opacity', '0.5');

    b.append('stop')
              .attr('offset', '95%')
              .attr('stop-color', '{Colors.white}')
              .attr('stop-opacity', '0.01');


    var	area = d3.area()	
              .curve(d3.curveMonotoneX) //커브
              .x(function(d) { return xScale(d.name); })	
              .y0(height)					
              .y1(function(d) { return yScale(d.uv); });

    svg.append("path")
              .data([data]) .attr('d', curveLinear)
              .attr("class", "area")
              .attr("d", area)
              .attr('fill', 'url(#a)');
    
     var area = d3.area()	
              .curve(d3.curveMonotoneX) //커브
              .x(function(d) { return xScale(d.name); })	
              .y0(height)					
              .y1(function(d) { return yScale(d.pv); });

    svg.append("path")
              .data([data]) .attr('d', curveLinear)
              .attr("class", "area")
              .attr("d", area)
              .attr("fill", "url(#b)") 
              
              
              .on('mouseover', (e,d)=>{
                const index = svg.selectAll("path").nodes().indexOf(e.target);
                const k = d3.select(e.currentTarget)
                console.log(k)
                //console.log(e);
               // console.log(d);
                tooldiv.style('visibility', 'visible')
                .html(`<div>${d[index].name}</div>`)
              
            })
            .on('mousemove', (e,d)=>{
              tooldiv.style('top', (e.pageY-50)+'px')
                     .style('left', (e.pageX-50)+'px')
            })
            .on('mouseout', (e,d)=>{
              tooldiv.style('visibility', 'hidden')
            })
              
             


    const tooldiv = d3.select('#test')
                      .append('div')
                      .style('visiblity', 'hidden')
                      .style('position', 'absolute')
                      .style('background-color', 'red')

                      
                      
                      
                 
                        

             /*
              svg.selectAll("path")
              .on("mouseenter", (event, v) =>  {
                
               const index = svg.selectAll(".bar").nodes().indexOf(event.target);
                svg
                  .selectAll(".tooltip")
                  .data( [data.uv] )
                  .join((enter) => enter.append("div").attr("y", yScale(data.uv) - 4))
                  .attr("class", "tooltip")
                  .style('visibility','visible')
                  .html("<div>aa</div>")
                  .text(data.name + ": " + data.uv + "명")
                  .attr("stroke", "red")
                  .attr("x", xScale(data.uv) + xScale.bandwidth() / 2)
                  .attr("text-anchor", "middle")
                  .transition()
                  .attr("y", yScale(data.uv) - 8)
                  .attr("opacity", 1)
                })
              
*/


  }, [data, dimensions]);

  return (


    <React.Fragment>
     
     <div id='test' ref={wrapperRef} style={{marginBottom: "2rem"}}>
        <svg ref={svgRef}>
          <g className="x-axis" />
          <g className="y-axis" />
        </svg>
      </div>
        
      
    </React.Fragment>
  );
} 

export default LineChart_TBA3;