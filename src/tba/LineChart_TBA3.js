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
    const width_box = svg.selectAll("#start__");
    
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
              .data([data]) .attr('m', curveLinear)
              .attr("class", "area")
              .attr("d", area)
              .attr('fill', 'url(#a)');
    
     var area = d3.area()	
              .curve(d3.curveMonotoneX) //커브
              .x(function(d) { return xScale(d.name); })	
              .y0(height)					
              .y1(function(d) { return yScale(d.pv); });

         svg.append("path")
              .data([data]) .attr('m', curveLinear)
              .attr("class", "area")
              .attr("d", area)
              .attr("fill", "url(#b)") 
             .on('mouseover', (e,d)=>{
                const index = svg.selectAll("path").nodes().indexOf(e.target);
                const k = d3.select(e.currentTarget)
                tooldiv.style('visibility', 'visible')
                .html(`<div>${d[index].name}</div>`)
              
            })
           

const bar_width = parseInt(xScale.bandwidth())




svg
      .selectAll(".line_")
      .data(data)
      .join("rect")
      .attr("class", "line_")
      .style("transform", "scale(1, -1)")
      .attr("x", (value, index) => xScale(data[index].name))
      .style("width", width_box._parents[0].clientWidth/data.length)
      .style('height', `${height}`)
      .style('transform', `translate(-${width_box._parents[0].clientWidth/data.length/2}px, 0px)`)
      
        .on('mouseenter', (e,d)=>{
          //console.log(svg.select('#test').getBoundingClientRect().left)
          const width_box_ = svg.selectAll('#test')._parents[0].clientWidth
          console.log(e.target.getBoundingClientRect().left)
          const cn1 = d.pv.toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
            const cn2 = d.uv.toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
          // console.log(cn1)
          const index = svg.selectAll("rect").nodes().indexOf(e.target);
          const startX = document.getElementById('start__'); // 요소의 id 값이 target이라 가정
          const clientRect = startX.getBoundingClientRect(); // DomRect 구하기 (각종 좌표값이 들어있는 객체)
          const startXval = clientRect.left; // Viewport의 시작지점을 기준으로한 상대좌표 X 값.
         
         const marginLeft_ = window.pageXOffset + startX.getBoundingClientRect().left;
         const marginTop_ = window.pageYOffset + startX.getBoundingClientRect().top;
         //console.log(marginLeft_)
    
         //const ax = parseInt(xScale(d.name))-parseInt(marginLeft_)-width/data.length/2
        // const ax = e.target.getBoundingClientRect().left - width/data.length - e.path[1].getBoundingClientRect().left
        console.log(e.target)
         const ax = e.target.getBoundingClientRect().left - width_box_/24 - width/12
         console.log(yScale(Math.max(d.uv, d.pv)))
         const this_max_y = yScale(Math.max(d.uv, d.pv))
         const ay =  this_max_y - height*1.5 - 7
          tooldiv
          .html(`<div style='text-align:left; height: 50px; '>
          <div>
              <span style='color: #7932F3;'>밀양시</span>:&nbsp;${cn1}명
          </div>
          <div>
              <span style='color: #9DA9BE;'>광역평균</span>: &nbsp;${cn2}명
          </div>
      </div> `)
          .style("opacity", 1)
          //.style('transform', `translate( ${ax}px , ${ay}px )` )
           .style('font-family', "NotoSansCJKkr-Regular, Noto Sans CJK KR")
              .style('font-size', '13px')
              .style('font-weight' ,'500')
              .style('transform', `translate( ${ax}px , ${ay}px )` )
              .style('width', `${width/6}px`)
              .style('height', `${width/15}px`)
              .style('border', '1px solid #D4D8DF')
              .style('border-radius', '5.5%')
              .style('vertical-align', 'middle')
              .style('justify-content', 'center')
          
        })
   
        .on('mouseleave', (e,d)=>{
          tooldiv		
                .style("opacity", 0);	
        })
      .transition()
      .attr('opacity', '0')
    
          
      const tooldiv = d3.select('#test')
      .append('div')
      .attr('id', 'tba2')
      .style('opacity', '0')
      .style('position', 'absolute')
      .style('background-color', 'white')
      .style('overflow', 'visible')

        
   


  }, [data, dimensions]);

  return (


    <React.Fragment>
     
     <div id='test' ref={wrapperRef} style={{marginBottom: "2rem"}}>
        <svg id='start__'ref={svgRef}>
          <g className="x-axis" />
          <g className="y-axis" />
        </svg>
      </div>
        
      
    </React.Fragment>
  );
} 

export default LineChart_TBA3;
