//https://velog.io/@bangina/D3.js-React.js-Hooks-%ED%95%A8%EA%BB%98-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-2.-%EA%B3%A1%EC%84%A0-%EA%B7%B8%EB%9E%98%ED%94%84-%EB%A7%8C%EB%93%A4%EA%B8%B0
import React, {useRef, useEffect, useState} from "react";
import {select, line, curveCardinal} from "d3";
import "./App.css";
const App = () => {
  //라인에 바인딩 될 data배열 생성
  const [lineData, setLineData] = useState([1,5,34,22,50,100,50,70,20,10,2,2,2,2,1,100,12,75]);
  //직접 dom에서 svg를 조작하기 위해 useRef 사용
  const lineRef = useRef();

  useEffect(() => {
    const svgLine = select(lineRef.current);
    const myLine = line()
    .x((value, index) => index * 20) // x좌표 50단위로 증가
    .y((value) => 150 - value) // y좌표값이 좌하단부터 시작하도록 조정
    .curve(curveCardinal);
    //  그래프 스타일 설정. curvecardinal: 점과 점 곡선으로 부드럽게 처리됨(디폴트는 직선 꺾은선 그래프 모양)
  
  
  /* 위 까지는 세팅 단계, 이제 그래프를 그려줘면 됨,
  svgLine변수의 
  <path>태그를 선택하고 -> lineData와 바인딩 해줌 -> path태그에서 좌표값을 담는 속성인
  "d"에 콜백함수를 이용해 위에서 만든 line메소드를 불러옴
  위에 myLine 이름으로 line 메소드에 데이터 value를 가져와 x,y좌표값을 어떻게 계산할지 &
  그래프 스타일은 어떻게 할지 미리 정의했으니 이제 불러오기만 하면 됨 */

  svgLine                   //d3.saelect("svg")
    .selectAll("path")      // svg안의 path태그 선택해서
    .data([lineData])       // 데이터와 바인딩해줌
    .join("path")           // enter, update, exit  통합관리.
    .attr("d", (value) => myLine(value))
      //path태그의 속성인 d(좌표값) -> 콜백함수로 line메소드 통채로 부름(x,y 계산식 포함된)

      .attr("fill", "none")   //채우기 없음
      .attr("stroke", "blue");  //선색상 파란색
      
}, [lineData]);

//데이터 변경 시 잘 적용되는지 테스트를 위해 증감 버튼 생성

const addData = () => {
  setLineData(lineData.map((d) => d + 10));
};
const subsData = () => {
  setLineData(lineData.map((d) => d - 10));
};
return (
  <React.Fragment>
    <svg ref = {lineRef}></svg>
    <br />
    <br />
    <br />
    <br />
    <button onClick={addData}>add 10 to data</button>
    <button onClick={subsData}>subtract 10 to data</button>
  </React.Fragment>
);
};

export default App;