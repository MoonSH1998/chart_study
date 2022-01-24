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
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="158" height="81.59" viewBox="0 0 158 81.59">
  <defs>
    <filter id="합치기_5" x="0" y="0" width="158" height="81.59" filterUnits="userSpaceOnUse">
      <feOffset dx="3" dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feFlood flood-opacity="0.078"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g id="그룹_773" data-name="그룹 773" transform="translate(-1524 -389.41)">
    <g id="구성_요소_64_2" data-name="구성 요소 64 – 2" transform="translate(1530 395.41)">
      <g transform="matrix(1, 0, 0, 1, -6, -6)" filter="url(#합치기_5)">
        <g id="합치기_5-2" data-name="합치기 5" transform="translate(-17784 -21518)" fill="#fff">
          <path d="M 17860 21587.087890625 C 17859.8671875 21587.087890625 17859.740234375 21587.03515625 17859.646484375 21586.94140625 L 17856.3515625 21583.646484375 L 17856.205078125 21583.5 L 17855.998046875 21583.5 L 17793.998046875 21583.5 C 17792.068359375 21583.5 17790.5 21581.931640625 17790.5 21580.001953125 L 17790.5 21528.001953125 C 17790.5 21526.0703125 17792.068359375 21524.498046875 17793.998046875 21524.498046875 L 17926.001953125 21524.498046875 C 17927.931640625 21524.498046875 17929.5 21526.0703125 17929.5 21528.001953125 L 17929.5 21580.001953125 C 17929.5 21581.931640625 17927.931640625 21583.5 17926.001953125 21583.5 L 17864.001953125 21583.5 L 17863.794921875 21583.5 L 17863.6484375 21583.646484375 L 17860.353515625 21586.94140625 C 17860.259765625 21587.03515625 17860.1328125 21587.087890625 17860 21587.087890625 Z" stroke="none"/>
          <path d="M 17860 21586.587890625 L 17863.587890625 21583 L 17926.001953125 21583 C 17927.654296875 21583 17929 21581.654296875 17929 21580.001953125 L 17929 21528.001953125 C 17929 21526.345703125 17927.654296875 21524.998046875 17926.001953125 21524.998046875 L 17793.998046875 21524.998046875 C 17792.345703125 21524.998046875 17791 21526.345703125 17791 21528.001953125 L 17791 21580.001953125 C 17791 21581.654296875 17792.345703125 21583 17793.998046875 21583 L 17856.412109375 21583 L 17860 21586.587890625 C 17860 21586.587890625 17860 21586.587890625 17860 21586.587890625 M 17860 21587.587890625 C 17859.744140625 21587.587890625 17859.48828125 21587.490234375 17859.29296875 21587.294921875 L 17855.998046875 21584 L 17793.998046875 21584 C 17791.79296875 21584 17790 21582.20703125 17790 21580.001953125 L 17790 21528.001953125 C 17790 21525.791015625 17791.79296875 21523.998046875 17793.998046875 21523.998046875 L 17926.001953125 21523.998046875 C 17928.20703125 21523.998046875 17930 21525.791015625 17930 21528.001953125 L 17930 21580.001953125 C 17930 21582.20703125 17928.20703125 21584 17926.001953125 21584 L 17864.001953125 21584 L 17860.70703125 21587.294921875 C 17860.51171875 21587.490234375 17860.255859375 21587.587890625 17860 21587.587890625 Z" stroke="none" fill="#d4d8df"/>
        </g>
      </g>
    </g>
    <text id="밀양시:_48_683명" data-name="밀양시: 48,683명" transform="translate(1542 418.707)" fill="#7932f3" font-size="14" font-family="NotoSansCJKkr-Medium, Noto Sans CJK KR" font-weight="500"><tspan x="0" y="0">밀양시</tspan><tspan y="0" fill="#6c738a" font-family="NotoSansCJKkr-Regular, Noto Sans CJK KR" font-weight="400">: 48,683명</tspan></text>
    <text id="광역평균:_27_881명" data-name="광역평균: 27,881명" transform="translate(1542 440.707)" fill="#9da9be" font-size="14" font-family="NotoSansCJKkr-Medium, Noto Sans CJK KR" font-weight="500"><tspan x="0" y="0">광역평균</tspan><tspan y="0" fill="#6c738a" font-family="NotoSansCJKkr-Regular, Noto Sans CJK KR" font-weight="400">: 27,881명</tspan></text>
  </g>
</svg>

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