import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import React from 'react';
import './App.css';
import Bar1 from './bar/Bar1';
import Bar2 from './bar/Bar2';
import Bar3 from './bar/Bar3';
import Bar4 from './bar/Bar4';
import Bar5 from './bar/Bar5';
import Bar6 from './bar/Bar6';
import Circle1 from './circle/Circle1';
import Circle2 from './circle/Circle2';
import Line1 from './line/Line1';
import Line2 from './line/Line2';
import Line3 from './line/Line3';
import Line4 from "./line/Line4";
import Line5 from "./line/Line5";
import Pie1 from './pie/Pie1';
import { Home } from './Home';
import TBA1 from "./tba/TBA1";
import TBA2 from "./tba/TBA2";
import TBA3 from "./tba/TBA3";

function App() {
  return (
    <Routes>
       <Route path="/" element={<Home />} />


  
            <Route path="/Bar1" element={<Bar1 />} />
            <Route path="Bar2" element={<Bar2 />} />
            <Route path="Bar3" element={<Bar3 />} />
            <Route path="Bar4" element={<Bar4 />} />
            <Route path="Bar5" element={<Bar5 />} />
            <Route path="Bar6" element={<Bar6 />} />
            
       
       
       
            <Route path="Circle1" element={<Circle1 />} />
            <Route path="Circle2" element={<Circle2 />} />
   
            <Route path="Line1" element={<Line1 />} />
            <Route path="Line2" element={<Line2 />} />
            <Route path="Line3" element={<Line3 />} />
            <Route path="Line4" element={<Line4 />} />
            <Route path="Line5" element={<Line5 />} />
     
             <Route path="Pie1" element={<Pie1 />} />  
             <Route path="TBA1" element={<TBA1 />} />  
             <Route path="TBA2" element={<TBA2 />} />  
             <Route path="TBA3" element={<TBA3 />} />  
    </Routes>
   
  );
}

export default App;