/*

import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '1월',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '2월',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '3월',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '4월',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '5월',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '6월',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '7월',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '8월',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '9월',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '10월',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '11월',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '12월',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function TBA3() {
    return (
        <ResponsiveContainer width="100%" aspect={3}>
          <LineChart
            width={100000}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="2.5 2.5" horizontal="true" vertical="" />
            <XAxis dataKey="name" opacity={0.5}/>
            <YAxis type="number" domain={[dataMin => (0), dataMax => Math.round(dataMax * 1.1)]} tick={6} />
            <Tooltip />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" dot={{fill:"", stroke:"" }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
    );
  }
  
  export default TBA3;

  */

  import React, { useState } from "react";
import "./TBA1.css";
import LineChart_TBA3 from "./LineChart_TBA3";
//1134
function TBA1() {


  //const [data, setData] = useState([133230, 30240, 62305, 66039, 20594,15928, 59604, 79472, 52938, 28395, 19383, 58493, 38295, 66666, 37591]);
  const data = [
    {
      name: '1월',
      uv: 4100,
      pv: 2400,
      amt: 2400,
    },
    {
      name: '2월',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: '3월',
      uv: 2000,
      pv: 800,
      amt: 2290,
    },
    {
      name: '4월',
      uv: 2780,
      pv: 2208,
      amt: 2000,
    },
    {
      name: '5월',
      uv: 1890,
      pv: 1800,
      amt: 2181,
    },
    {
      name: '6월',
      uv: 1390,
      pv: 2800,
      amt: 2500,
    },
    {
      name: '7월',
      uv: 3490,
      pv: 2300,
      amt: 2100,
    },
    {
      name: '8월',
      uv: 3490,
      pv: 1300,
      amt: 2100,
    },
    {
      name: '9월',
      uv: 4490,
      pv: 1300,
      amt: 2100,
    },
    {
      name: '10월',
      uv: 3490,
      pv: 2300,
      amt: 2100,
    },
    {
      name: '11월',
      uv: 3490,
      pv: 2700,
      amt: 2100,
    },
    {
      name: '12월',
      uv: 3990,
      pv: 1800,
      amt: 2100,
    },
  ];
                                
  return (
    <React.Fragment>

        <div id="#BarChart_TBA1_div" style={{display: "flex", justifyContent: "space-between", margin: "0 -2% 5% -5%", opacity: "0.7",fontSize: "14px"}}> 
            <div> 방문 여행객 거주지 그래프</div>
            
            <div id="checkDataDate" style={{opacity: "0.5"}}>
              <button>오늘</button>
              <button>7일</button>
              <button>15일</button>
              <button>한달</button>
              <button>1년</button>
            </div>
          </div>
      <LineChart_TBA3 data={data} />
     
    </React.Fragment>
  );
}

export default TBA1;