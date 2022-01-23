import React, { useState } from "react";
import "./TBA2.css";
import StackChart_TBA2 from "./StackChart_TBA2";

const data = [
  {
    year: "1일",
    "먹거리": 15293,
    "관광지": 22415,
    "숙박": 32523
  },
  {
    year: "2일",
    "먹거리": 10315,
    "관광지": 23240,
    "숙박": 12530
  },
  {
    year: "3일",
    "먹거리": 64310,
    "관광지": 63220,
    "숙박": 23530
  },
  {
    year: "4일",
    "먹거리": 55410,
    "관광지": 53220,
    "숙박": 15630
  },
  {
    year: "5일",
    "먹거리": 53610,
    "관광지": 43320,
    "숙박": 77530
  },
  {
    year: "6일",
    "먹거리": 23510,
    "관광지": 43720,
    "숙박": 26730
  },
  {
    year: "7일",
    "먹거리": 37410,
    "관광지": 72320,
    "숙박": 26730
  },
  {
    year: "8일",
    "먹거리": 64710,
    "관광지": 33320,
    "숙박": 54730
  },
  {
    year: "9일",
    "먹거리": 34710,
    "관광지": 35320,
    "숙박": 34730
  },
  {
    year: "10일",
    "먹거리": 26110,
    "관광지": 67320,
    "숙박": 26130
  },
  {
    year: "11일",
    "먹거리": 23610,
    "관광지": 27310,
    "숙박": 27530
  },
  {
    year: "12일",
    "먹거리": 23710,
    "관광지": 28640,
    "숙박": 25830
  },
  {
    year: "13일",
    "먹거리": 47310,
    "관광지": 22460,
    "숙박": 75430
  },
  {
    year: "14일",
    "먹거리": 23510,
    "관광지": 32520,
    "숙박": 23530
  },
  {
    year: "15일",
    "먹거리": 75510,
    "관광지": 57420,
    "숙박": 37830
  },
];

const allKeys = ["먹거리", "관광지", "숙박"];

const colors = {
  "먹거리": "#3478FF",
  "관광지": "#2EBFFF",
  "숙박": "#C96BFF"
};

function TBA2() {
  const [keys, setKeys] = useState(allKeys);
  return (
    <React.Fragment>
        
        
        <div style={{display: "flex", marginBottom: "5%", justifyContent: "space-between", opacity: "0.7",fontSize: "14px"}}>
          
          <div style={{fontSize: "14px", marginLeft:"-5%" }}> 목적지 검색 건수</div>
          
          <div style={{marginLeft:"-15%"}}>   
            <span> <span style={{color:"#3478FF"}}>■</span> 먹거리 </span>
            <span> <span style={{color:"#2EBFFF"}}>■</span> 광광지 </span>
            <span> <span style={{color: "#C96BFF"}}>■</span> 숙박 </span>
          </div>

          <div> 
            
            
          <div id="checkDataDate" style={{opacity: "0.5" } }>
              <button>오늘</button>
              <button>7일</button>
              <button>15일</button>
              <button>한달</button>
              <button>1년</button>
            </div>
          </div>

      </div>
      <StackChart_TBA2 data={data} keys={keys} colors={colors} />

      <div id="TBA2_STACK" className="fields" >
        {allKeys.map(key => (
          <div key={key} className="field">
            <input
              id={key}
              type="checkbox"
              checked={keys.includes(key)}
              onChange={e => {
                if (e.target.checked) {
                  setKeys(Array.from(new Set([...keys, key])));
                } else {
                  setKeys(keys.filter(_key => _key !== key));
                }
              }}
            />
            <label htmlFor={key} style={{ color: colors[key] }}>
              {key}
            </label>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default TBA2;