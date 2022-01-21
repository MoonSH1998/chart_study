import React, { useState } from "react";
import "./Bar6.css";
import StackedBarChart from "./StackedBarChart";

const data = [
  {
    year: "1일",
    "먹거리": 10,
    "관광지": 2,
    "숙박": 32
  },
  {
    year: "2일",
    "먹거리": 10,
    "관광지": 20,
    "숙박": 30
  },
  {
    year: "3일",
    "먹거리": 10,
    "관광지": 20,
    "숙박": 30
  },
  {
    year: "4일",
    "먹거리": 10,
    "관광지": 20,
    "숙박": 30
  },
  {
    year: "5일",
    "먹거리": 10,
    "관광지": 20,
    "숙박": 30
  },
  {
    year: "6일",
    "먹거리": 10,
    "관광지": 20,
    "숙박": 30
  },
  {
    year: "7일",
    "먹거리": 10,
    "관광지": 20,
    "숙박": 30
  },
  {
    year: "8일",
    "먹거리": 10,
    "관광지": 20,
    "숙박": 30
  },
  {
    year: "9일",
    "먹거리": 10,
    "관광지": 20,
    "숙박": 30
  },
  {
    year: "10일",
    "먹거리": 10,
    "관광지": 20,
    "숙박": 30
  },
  {
    year: "11일",
    "먹거리": 10,
    "관광지": 20,
    "숙박": 30
  },
  {
    year: "12일",
    "먹거리": 10,
    "관광지": 20,
    "숙박": 30
  },
  {
    year: "13일",
    "먹거리": 10,
    "관광지": 20,
    "숙박": 30
  },
  {
    year: "14일",
    "먹거리": 10,
    "관광지": 20,
    "숙박": 30
  },
  {
    year: "15일",
    "먹거리": 10,
    "관광지": 20,
    "숙박": 30
  },
];

const allKeys = ["먹거리", "관광지", "숙박"];

const colors = {
  "먹거리": "#C96BFF",
  "관광지": "#2EBFFF",
  "숙박": "#3478FF"
};

function Bar6() {
  const [keys, setKeys] = useState(allKeys);
  return (
    <React.Fragment>
      <h2>Stacked Bar Chart with D3 </h2>
      <StackedBarChart data={data} keys={keys} colors={colors} />

      <div id="TBA1_STACK" className="fields">
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

export default Bar6;