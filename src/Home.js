import React from 'react';
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
import line4 from './line/Line4';
import line5 from './line/Line5';
import Pie1 from './pie/Pie1';
import TBA1 from './tba/TBA1';
import TBA2 from './tba/TBA2';
import TBA3 from './tba/TBA3';
import {Routes, Link, Outlet, Route } from "react-router-dom";



export const Home = () => {
  return (
   
    <div>
    <h1 style={{margin: '300px'}}>Studying Chart to d3 + react</h1>
    <div className='content'>
      <div>
        <h3>Bar Chart</h3>
          <div><Link to="Bar1">Bar1</Link></div>
          <div><Link to="Bar2">Bar2</Link></div>
          <div><Link to="Bar3">Bar3</Link></div>
          <div><Link to="Bar4">Bar4</Link></div>
          <div><Link to="Bar5">Bar5</Link></div>
          <div><Link to="Bar6">Bar6</Link></div>
      </div>    <div className='line'></div>
  
   <div>
         <h3>Circle Chart</h3>
          <div><Link to="Circle1">Circle1</Link></div>
          <div><Link to="Circle2">Circle2</Link></div>
    </div>  <div className='line'></div> 
   
   <div>
         <h3>Line Chart</h3>
        <div><Link to="Line1">Line1</Link></div>
        <div><Link to="Line2">Line2</Link></div>
        <div><Link to="Line3">Line3</Link></div>
        <div><Link to="Line4">Line4</Link></div>
        <div><Link to="Line5">Line5</Link></div>
   </div>
        <div className='line'></div> 
  
    <div>
        <h3>Pie Chart</h3>
         <div><Link to="Pie1">Pie1</Link></div>
    </div><div className='line'></div> 
    <div>
        <h3>TBA</h3>
        <div><Link to="TBA1">TBA1</Link></div>
        <div><Link to="TBA2">TBA2</Link></div>
        <div><Link to="TBA3">TBA3</Link></div>
    </div>

    <Outlet />

    </div>
    </div>
  );
};

export default Home;