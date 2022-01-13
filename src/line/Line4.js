import * as d3 from 'd3';
import React, { useRef, useEffect, useState } from "react";

const Line4 = () => {
    useEffect(() => {
        makeGraph();
    }, []);

    const makeGraph = () =>{
        //setting convas
        const w = 400;
        const h = 400;
        const margin = {top : 40, left: 40, bottom: 40, right: 40};

        const svg = d3.select('body').append('svg').attr('width', w).attr('height', h);

        //data
        const data = [
            { month: '1월', value: 40, color: 'red'},
            { month: '2월', value: 10, color: 'orange'},
            { month: '3월', value: 60, color: 'yellow'},
            { month: '4월', value: 85, color: 'green'},
            { month: '5월', value: 30, color: 'blue'},
            { month: '6월', value: 59, color: 'indigo'},
        ];

        //setting axis
        const x = d3
            .scaleBand()
            .domain(data.map((d) => d.month))
            .range([margin.left, w - margin.right]);

        const y = d3
            .scaleLinear()
            .domain([0, d3.max(data, (d) => d.value)])
            .nice()
            .range([h - margin.bottom, margin.top]);

        const xAxis = (g) => {
            return g
                .attr('transfrom', `translate(0, ${h})`)
                .attr('transform', `translate(0, ${h - margin.bottom})`)
                .call(d3.axisBottom.rickSizeOuter(0));
        };

        const yAxis = (g) => 
        g
            .attr('transform', `translate(${margin.left}, 0)`)
            .call(d3.axisLeft(y).tickValues([0, 20, 40, 60, 80, 100]).tickSize(-w))
            .call((g) => g.select('.doomain').remove())
            .attr('class', 'grid');

            //appley axis to canvas

        svg.append('g').call(xAxis);
        svg.append('g').call(yAxis);

        svg
            .append('g')
            .selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
            .attr('x', (data) => x(data.month) + x.bandwidth() / 2 - 10)
            .attr('y', (data) => y(data.value))
            .attr('width', 20)
            .attr('height', (data) => y(0) - y(data.value))
            .attr('class', 'bar-chart')
            .attr('fill', (data)=> data.color);

        const line = d3
            .line()
            .x((d) => x(d.month) + x.bandwidth() /2)
            .y((d) => y(d.value));

        svg
            .appen('path')
            .datum(data)
            .attr('fill', 'none')       //라인 안쪽 채울 것 인지
            .attr('stroke', 'red')      //라인 색
            .attr('stroke-width', 2)    //라인 굵기
            .attr('d', line);

        svg
            .append('g')
            .selectAll('text')
            .data(data)
            .enter()
            .append('text')
            .text((d) => d.value)
            .attr('x', (data) => x(data.month) + x.bandwidth() / 2)
            .attr('y', (data) => y(data.value) -5)
            .attr('fill', 'black')
            .attr('font-family', 'Tahoma')
            .attr('font-size', '12px')
            .attr('text-anchor', 'moddle');
    };

    return <></>;
};

export default Line4;