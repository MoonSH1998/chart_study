import React, { useState } from "react";
import "./TBA1.css";
import BarChart_TBA1 from "./BarChart_TBA1";
//1134
function TBA1() {
   // const data1= [23230, 30240, 62305, 66039, 20594,15928, 59604, 79472, 52938, 28395, 19383, 58493, 38295, 66666, 37591]
  const [data, setData] = useState([133230, 30240, 62305, 66039, 20594,15928, 59604, 79472, 52938, 28395, 19383, 58493, 38295, 66666, 37591]);
  /*
  const [data, setData] = useState([ data1[0]/1000,
                                     data1[1]/1000, 
                                     data1[2]/1000, 
                                     data1[3]/1000, 
                                     data1[4]/1000, 
                                     data1[5]/1000, 
                                     data1[6]/1000, 
                                     data1[7]/1000,
                                     data1[8]/1000,
                                     data1[9]/1000,
                                     data1[10]/1000,
                                     data1[11]/1000,
                                     data1[12]/1000,
                                     data1[13]/1000,
                                     data1[14]/1000
                                ]);
                                */
                                
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
      <BarChart_TBA1 data={data} />
     
    </React.Fragment>
  );
}

export default TBA1;