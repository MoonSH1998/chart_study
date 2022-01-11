import App1 from './App1';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';
import App5 from './App5';
import App6 from './App6';
import App7 from './App7';
import App8 from './App8';
import App9 from './App9';
import App10 from './App10';
import App11 from './App11';
import {Routes, Link, Outlet, Route } from "react-router-dom";


export const Home = () => {
  return (
    <div>

    <div><Link to="App1">App1</Link></div>
    <div><Link to="App2">App2</Link></div>
    <div><Link to="App3">App3</Link></div>
    <div><Link to="App4">App4</Link></div>
    <div><Link to="App5">App5</Link></div>
    <div><Link to="App6">App6</Link></div>
    <div><Link to="App7">App7</Link></div>
    <div><Link to="App8">App8</Link></div>
    <div><Link to="App9">App9</Link></div>
    <div><Link to="App10">App10</Link></div>
    <div><Link to="App11">App11</Link></div>

    <Outlet />

    </div>
  );
};

export default Home;