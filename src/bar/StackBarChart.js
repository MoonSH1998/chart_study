/*
import React, { useEffect, useRef } from "react";
import { select, scaleBand, axisBottom, stack } from "d3";
import useResizeObserver from "./useResizeObsever";

//stack bar char~~

function StackBarChart ({ data, keys, colors }){
    const svgRef = useRef();
    const wrapperRef = useRef();
    const dimensions = useResizeObserver(wrapperRef);
    
    
    useEffect(() => {
        const svg = select(svgRef.current);
        const { width, height } = 
            dimensions ||  wrapperRef.current.getBoundingClientRect();

        const xScale = scaleBand()
            .domain(data.map(d => d.year))
            .range([0, width]);

        const xAxis = axisBottom(xScale);

        svg
            .select(".x-axis")
            .atrr("transform", `translate(0, ${height})`)
            .call(xAxis); 


    }, [colors, data, dimensions, keys]);

    return (
        <React.Fragment>
            <div ref={wrapperRef} style={{marginBottom: "2rem"}}>
                <svg ref={svgRef}>
                    <g className="x-axis" />
                    <g className="y-axis" />
                </svg>
            </div>
        </React.Fragment>
    )
}

export default StackBarChart;

*/