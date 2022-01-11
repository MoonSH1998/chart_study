import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
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
import { Home } from './Home';

function App() {
  return (
    <Routes>
      
      
        <Route path="/" element={<Home />} />
        <Route path="/App1" element={<App1 />} />
        <Route path="App2" element={<App2 />} />
        <Route path="App3" element={<App3 />} />
       <Route path="App4" element={<App4 />} />
      <Route path="App5" element={<App5 />} />
      <Route path="App6" element={<App6 />} />
      <Route path="App7" element={<App7 />} />
      <Route path="App8" element={<App8 />} />
      <Route path="App9" element={<App9 />} />
      <Route path="App10" element={<App10 />} />
      <Route path="App11" element={<App11 />} />     
    </Routes>
   
  );
}

export default App;